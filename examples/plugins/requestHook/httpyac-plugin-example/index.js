module.exports = (api) => {
  api.hooks.onRequest.addHook('getCoffee', function (request) {
    request.headers = Object.assign({
      'X-Coffee':  'coffee with milk, no sugar',
     }, request.headers);
  });
}
