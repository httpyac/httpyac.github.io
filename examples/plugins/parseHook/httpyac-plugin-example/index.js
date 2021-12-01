module.exports = (api) => {
  api.hooks.parse.addHook('getCoffee', function (getLineReader, context) {
    const lineReader = getLineReader();
    let next = lineReader.next();
    if (!next.done) {
      // regex match if line is javascript start line
      const match = /^\s*GET\s+coffee?$/ui.test(next.value.textLine);
      if (!match) {
        return false;
      }

      context.httpRegion.hooks.execute.addHook('get_coffee', async context => {
        context.scriptConsole?.info?.(`get coffee`);
      });
      return { // return nextParserLine and symbol for lines
        nextParserLine: next.value.line,
        symbols: [{
          name: 'coffee',
          description: 'coffee with some milk, no sugar',
          kind: 'comment',
          startLine: next.value.line,
          startOffset: 0,
          endLine: next.value.line,
          endOffset: next.value.textLine.length,
        }]
      };
    }
    return false;
  }, {
    before: ['request']
  });
}
