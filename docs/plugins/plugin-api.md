# Plugin API

By means of the [plugin api](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L46-L57) it is possible to register hooks at important program points of httpYac.


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

Type: `string`

The version string for the httpYac api version that is loading the plugin.

## rootDir

Type: `string`

The project root directory of current http File.


## httpFile

[http file]((https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts#L7)) prepared for parsing, which has no regions yet.

## config

[Environment configuration](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L7) determined for the current execution


## log

The [log](https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L13) module provides a simple debugging console. The output channel is redirected per use case

## fileProvider

[Data access layer](https://github.com/AnWeber/httpyac/blob/main/src/io/fileProvider.ts#L7-L18) for file access


```ts
export interface FileProvider{
  exists(fileName: PathLike): Promise<boolean>;
  joinPath(fileName: PathLike, path: string): PathLike;
  extname(fileName: PathLike): string;
  dirname(fileName: PathLike): PathLike | undefined;
  isAbsolute(fileName: PathLike): boolean;
  readFile(fileName: PathLike, encoding: FileEnconding): Promise<string>;
  readBuffer(fileName: PathLike): Promise<Buffer>;
  readdir: (dirname: PathLike) => Promise<string[]>;
  fsPath(fileName: PathLike): string;
  toString(fileName: PathLike): string;
}
```

::: warning
The VS Code extension also supports loading [virtual documents](https://code.visualstudio.com/api/extension-guides/virtual-documents). Direct access via `fs` is not always possible.
:::


## sessionStore

[Location](https://github.com/AnWeber/httpyac/blob/main/src/models/userSession.ts#L8) to store user sessions. The user has the possibility to delete them manually

```ts
export interface SessionStore {
  reset(): Promise<void>;
  getUserSession(id: string): UserSession | undefined;
  setUserSession(userSession: UserSession): void;
  removeUserSession(id: string): void;
}
export interface UserSession {
  id: string;
  title: string;
  description: string;
  logout?: () => void;
}
```

## userInteractionProvider

enables interaction with the user

```ts
export interface UserInteractonProvider{
  showNote: (note: string) => Promise<boolean>;
  showInputPrompt: (message: string, defaultValue?: string) => Promise<string | undefined>,
  showListPrompt: (message: string, values: string[]) => Promise<string | undefined>,
  showWarnMessage?: (message: string) => Promise<void>,
  showErrorMessage?: (message: string) => Promise<void>,
}
```

## getHookCancel

function to retrieve javascript symbol, which is used to cancel execution of hooks

## hooks

List of [hooks](https://github.com/AnWeber/httpyac/blob/main/src/models/httpFileHooks.ts) for which own program logic can be registered


```ts
export interface HttpFileHooks{
  readonly parse: ParseHook,
  readonly parseAfterRegion: ParseAfterRegionHook,
  readonly replaceVariable: ReplaceVariableHook;
  readonly provideEnvironments: ProvideEnvironmentsHook;
  readonly provideVariables: ProvideVariablesHook;


  readonly beforeRequest: BeforeRequestHook;
  readonly afterRequest: AfterRequestHook,
  readonly responseLogging: ResponseLoggingHook,
}

```

### ParseHook

hook for parsing http file

### ParseAfterRegionHook

hook after identifing new http region

### ReplaceVariableHook

hook to replace variable in request line, header or request body

### ProvideVariablesHook

hook to provide custom variables

### ProvideEnvironmentsHook

hook to provide environments for custom variables

### BeforeRequestHook

hook called before every request call

### AfterRequestHook

hook called after every request call

### ResponseLoggingHook

hook called for every logging of a response.