module.exports = {
	"log": {
		"responseBodyLength": 0,
		"prettyPrint": true
	},
	"clientCertificates": {
		"client.badssl.com": {
			"pfx": "./variables/badssl.com-client.p12",
			"passphrase": "badssl.com"
		}
	},
	configureHooks: function (api) {
		api.hooks.responseLogging.addHook('removeSensitiveData', function (response) {
			if (response.request) {
				delete response.request.headers['authorization'];
			}
		});
	}
}