# Debugging

Open a terminal in vscode and run:

```sh
npm run tsc-watch 
```

Add a breakpoint, e.g. in the execute method in src/cli/cli.ts.

Open a second "JavaScript Debug Terminal" and run: 

```sh
node bin/httpyac.js --help
``` 

See what happens ;)