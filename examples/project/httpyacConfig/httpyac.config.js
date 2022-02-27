

module.exports = {
	configureHooks: function (api) {
    api.hooks.onResponse.addHook('variableOnlyInCurrentRequest', function (response, { variables }) {
      const accessToken = api.utils.decodeJWT(response.parsedBody.headers.Authorization);
      variables.variableOnlyInCurrentRequest = accessToken
    });
    api.hooks.onResponse.addHook('longLivingVariable', function (response, context) {
      const accessToken = api.utils.decodeJWT(response.parsedBody.headers.Authorization);
      api.utils.setVariableInContext({
        longLivingVariable: accessToken,
      }, context);
    });
	}
}