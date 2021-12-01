module.exports = (api) => {
  api.hooks.onResponse.addHook('getCoffee', function (response) {
    response.body = 'coffee with milk, no sugar';
    delete response.parsedBody;
    delete response.prettyPrintBody;
  });
}
