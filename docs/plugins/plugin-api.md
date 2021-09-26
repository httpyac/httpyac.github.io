# Plugin API

By means of the [plugin api](https://github.com/AnWeber/httpyac/blob/main/src/models/httpHooksApi.ts) it is possible to register hooks at important program points of httpYac.


```ts
export interface HttpyacHooksApi{
  readonly version: string;
  readonly rootDir?: PathLike;
  readonly httpFile: Readonly<HttpFile>;
  readonly config: EnvironmentConfig;
  readonly hooks: HttpFileHooks;
  readonly log: LogHandler;
  readonly fileProvider: FileProvider,
  readonly sessionStore: SessionStore,
  readonly userInteractionProvider: UserInteractonProvider;
  getHookCancel(): symbol;
}
```

## version

* Type: `string`

The version string for the httpYac api version that is loading the plugin.

## rootDir

* Type: `string`

The project root directory of current http File.


## httpFile


* Type: [`HttpFile`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts#L7)

http file prepared for parsing, which has no regions yet.

## config

* Type: [`EnvironmentConfig`](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L7)

Environment configuration determined for the current execution


## log

* Type: [`LogHander`](https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L13)

The log module provides a simple debugging console. The output channel is redirected per use case

## fileProvider

* Type: [`FileProvider`](https://github.com/AnWeber/httpyac/blob/main/src/models/fileProvider.ts)

Data access layerfor file access

::: warning
The VS Code extension also supports loading [virtual documents](https://code.visualstudio.com/api/extension-guides/virtual-documents). Direct access via `fs` is not always possible.
:::


## sessionStore

* Type: [`SessionStore`](https://github.com/AnWeber/httpyac/blob/main/src/models/sessionStore.ts)

Service to store user sessions. The user has the possibility to delete them manually

## userInteractionProvider

* Type: [`UserInteractionProvider`](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L38)

enables interaction with the user

## getHookCancel

* Type: [`HookCancel Symbol`](https://github.com/AnWeber/httpyac/blob/main/src/models/hook.ts#L9)

function to retrieve javascript symbol, which is used to cancel execution of hooks

## hooks

* Type: [HttpFileHooks](https://github.com/AnWeber/httpyac/blob/main/src/models/httpFileHooks.ts)

List of hooks for which own program logic can be registered


```ts
export interface HttpFileHooks{
  readonly parse: ParseHook,
  readonly parseEndRegion: ParseEndRegionHook,
  readonly replaceVariable: ReplaceVariableHook;
  readonly provideEnvironments: ProvideEnvironmentsHook;
  readonly provideVariables: ProvideVariablesHook;


  readonly onRequest: OnRequestHook;
  readonly onResponse: OnResponseHook,
  readonly responseLogging: ResponseLoggingHook,
}
```

::: tip
httpYac uses most of the hooks itself for its own application logic. Just look in the source code
:::

### ParseHook

* Type: `function`
* Arguments:
  * [`getHttpLineGenerator`](https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L9) Generator to read lines of file
  * [`ParserContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L12) context of file parsing

* Return: [`HttpRegionParserResult`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRegionParserResult.ts#L8)


hook for parsing http file. The goal is to determine and register the necessary actions for this line.

::: tip
As soon as a hook determines a result, the processing for this row is aborted and the subsequent hooks are not processed (BailHook).
:::


::: warning
Hook `requestBody` always returns a result. It is necessary to register the own parser before this one
:::

```ts

export async function parseJavascript(
  getLineReader: models.getHttpLineGenerator,
  { httpRegion, data }: models.ParserContext
): Promise<models.HttpRegionParserResult> {
  const lineReader = getLineReader();
  let next = lineReader.next();

  if (!next.done) {
    // regex match if line is javascript start line
    const match = ParserRegex.javascript.scriptStart.exec(next.value.textLine);
    if (!match) {
      return false;
    }
    const lineOffset = next.value.line;
    next = lineReader.next();
    const script: Array<string> = [];
    while (!next.done) {
      // regex match if line is javascript end line
      if (ParserRegex.javascript.scriptEnd.test(next.value.textLine)) {
        const scriptData: ScriptData = {
          script: utils.toMultiLineString(script),
          lineOffset,
        };
        if (!match.groups?.executeOnEveryRequest) {
          // add hook to execute script on request send
          httpRegion.hooks.execute.addObjHook(obj => obj.process, new JavascriptAction(scriptData));
        }
        return { // return nextParserLine and symbol for lines
          nextParserLine: next.value.line,
          symbols: [{
            name: 'script',
            description: 'nodejs script',
            kind: models.HttpSymbolKind.script,
            startLine: lineOffset,
            startOffset: 0,
            endLine: next.value.line,
            endOffset: next.value.textLine.length,
          }]
        };
      }
      script.push(next.value.textLine);
      next = lineReader.next();
    }
  }
  return false;
}
```


### ParseEndRegionHook

* Type: `function`
* Arguments:
  * [`ParserContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L12) context of file parsing

* Return: `void`


hook after identifing new http region

### ReplaceVariableHook

* Type: `function`
* Arguments:
  * `string` text in which the variables are to be replaced
  * [`VariableType | string`](https://github.com/AnWeber/httpyac/blob/main/src/models/variableType.ts) variableType or headerName
  * [`ParserContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/parserContext.ts#L12) context of file parsing

* Return: `string`

hook to replace variable in request line, header or request body

```ts
export async function hostVariableReplacer(text: string, type: VariableType | string, { variables }: ProcessorContext): Promise<string | undefined> {
  if (VariableType.url === type && !!variables.host) {
    if (text.startsWith('/')) {
      return `${variables.host}${text}`;
    }
  }
  return text;
}

```

### ProvideVariablesHook

* Type: `function`
* Arguments:
  * `string[] | undefined` list of environments
  * [`VariableProviderContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/variableProviderContext.ts) context to determine variables

* Return: [`Promise<Variables>`](https://github.com/AnWeber/httpyac/blob/main/src/models/variables.ts) promise with Variables


hook to provide custom variables

```ts
import { VariableProviderContext, Variables } from '../../models';
const DEFAULT_ENV = '$shared';

export async function provideConfigVariables(envs: string[] | undefined, context: VariableProviderContext): Promise<Variables> {
  const variables: Variables[] = [];
  if (envs && context.config?.environments) {
    const environments = context.config.environments;
    variables.push(environments[DEFAULT_ENV]);
    variables.push(...envs.map(env => environments[env]));
  }
  return Object.assign({}, ...variables);
}
```

### ProvideEnvironmentsHook

* Type: `function`
* Arguments:
  * [`VariableProviderContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/variableProviderContext.ts) context to determine variables

* Return: `Promise<string[]>` list of possible environments

hook to provide environments

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.provideEnvironments.addHook('default_dev', function (context) {
			return ['dev','prev'];
		});
	}
}
```

### OnRequest Hook

* Type: `function`
* Arguments:
  * [`HttpRequest`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts) current request
  * [`ProcessorContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/processorContext.ts#L39)

* Return: `Promise<void>`

hook called before every request call

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.onRequest.addHook('add_authentication_header', function (request) {
			request.headers.Authentication = 'Bearer foo';
		});
	}
}
```

### OnResponse Hook

* Type: `function`
* Arguments:
  * [`HttpResponse`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpResponse.ts) response of request
  * [`ProcessorContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/processorContext.ts#L39)

* Return: `Promise<void>`

hook called after every response

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.onResponse.addHook('response', function (response) {
			...
		});
	}
}
```

### ResponseLoggingHook

* Type: `function`
* Arguments:
  * [`HttpResponse`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpResponse.ts) response of request
  * [`ProcessorContext`](https://github.com/AnWeber/httpyac/blob/main/src/models/processorContext.ts#L39)

* Return: `Promise<void>`


hook called for every logging of a response.

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.responseLogging.addHook('removeSensitiveData', function (response) {
			if (response.request) {
				delete response.request.headers['authorization'];
			}
		});
	}
}
```