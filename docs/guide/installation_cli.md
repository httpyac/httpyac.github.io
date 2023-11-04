# httpyac CLI

httpyac CLI provides a command line interface to execute *.http and *.rest files. This can be used to quickly execute a single *.http file, but also to execute all files in a folder.

[<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"/></svg>](https://github.com/AnWeber/httpyac) [<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="54px" height="21px" viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"/><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "/><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"/><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "/></svg>](https://www.npmjs.com/package/httpyac) [![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/Anweber/httpyac)

## Installation

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

Usage: httpyac [options] [command]
httpYac - Quickly and easily send REST, SOAP, GraphQL and gRPC requests
Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  oauth2 [options]              generate oauth2 token
  send [options] <fileName...>  send/ execute http files
  help [command]                display help for command
```

```shell
> httpyac help send

Usage: httpyac send [options] <fileName...>

send/ execute http files

Arguments:
  fileName                  path to file or glob pattern

Options:
  -a, --all                 execute all http requests in a http file
  --bail                    stops when a test case fails
  -e, --env  <env...>       list of environments
  --filter <filter>          filter requests output (only-failed)
  --insecure                allow insecure server connections when using ssl
  -i --interactive          do not exit the program after request, go back to selection
  --json                    use json output
  --junit                   use junit xml output
  -l, --line <line>         line of the http requests
  -n, --name <name>         name of the http requests
  --no-color                disable color support
  -o, --output <output>     output format of response (short, body, headers, response, exchange, none)
  --output-failed <output>  output format of failed response (short, body, headers, response, exchange, none)
  --raw                     prevent formatting of response body
  --quiet
  --repeat <count>          repeat count for requests
  --repeat-mode <mode>      repeat mode: sequential, parallel (default)
  --parallel <count>        send parallel requests
  -s, --silent              log only request
  --timeout <timeout>       maximum time allowed for connections
  --var  <variables...>     list of variables
  -v, --verbose             make the operation more talkative
  -h, --help                display help for command
```

## Manual Selection

When called without `--all` it is possible to specify a single request.

![execute one requests](/cli.gif)


## Execute Tests
httpYac supports [globby](https://www.npmjs.com/package/globby) queries. This allows multiple files to be marked for execution at the same time.

![execute one requests](/cli_tests.gif)


## Usage in CI with JSON Output
It is possible to prevent all outputs and get a JSON object as result instead. The object corresponds to the following [interface](https://github.com/AnWeber/httpyac/blob/main/src/cli/cliJsonOutput.ts#L5-L34).

![output json](/cli_json.gif)
