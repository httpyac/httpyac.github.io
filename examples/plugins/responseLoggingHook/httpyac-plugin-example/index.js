module.exports = (api) => {
  api.hooks.responseLogging.addHook('removeHeadersAndRequest', async function (response) {
    delete response.headers;
    delete response.request;
    return response;
  });
}
