# httpyac CLI

httpyac CLI provides a command line interface to execute *.http and *.rest files. This can be used to quickly execute a single *.http file, but also to execute all files in a folder.

## Intallation

httpyac can be easily downloaded from the [npm registry](https://www.npmjs.com/search?q=httpyac)

``` bash
npm install -g httpyac
# OR
yarn global add httpyac
```
## Upgrading

To upgrade the global httpyac package, you need to run:

``` bash
npm update -g httpyac

# OR
yarn global upgrade --latest httpyac
```

## Arguments

```shell
> httpyac --help

usage: httpyac [options...] <file or glob pattern>
       --all           execute all http requests in a http file
       --editor        enter a new request and execute it
  -e   --env           list of environemnts
       --filter        filter requests output (only-failed)
  -h   --help          help
       --insecure      allow insecure server connections when using ssl
  -i   --interactive   do not exit the program after request, go back to selection
       --json          use json output
  -l   --line          line of the http requests
  -n   --name          name of the http requests
       --no-color      disable color support
  -o   --output        output format of response (short, body, headers, response, exchange, none)
       --output-failed output format of failed response (short, body, headers, response, exchange, none)
       --raw           prevent formatting of response body
  -r   --repeat        repeat count for requests
       --repeat-mode   repeat mode: sequential, parallel (default)
  -s   --silent        log only request
       --timeout       maximum time allowed for connections
  -v   --verbose       make the operation more talkative
       --version       version of httpyac

```

::: warning
--editor option only works on linux and mac ([see](https://github.com/nodejs/node/issues/21771))
:::

## Manual Selection

When called without `--all` it is possible to specify a single request.

![execute one requests](/cli.gif)


## Execute Tests
httpYac supports [globby](https://www.npmjs.com/package/globby) queries. This allows multiple files to be marked for execution at the same time.

![execute one requests](/cli_tests.gif)


## Usage in CI with JSON Output
It is possible to prevent all outputs and get a JSON object as result instead. The object corresponds to the following [interface](https://github.com/AnWeber/httpyac/blob/main/src/cli/cliJsonOutput.ts#L5-L34).

![output json](/cli_json.gif)