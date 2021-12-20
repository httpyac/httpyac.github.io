# Hooks

httpYac uses a plugin-based architecture. Most of the features listed in this documentation are implemented as plugins using hooks.

The plugin architecture makes httpYac flexible and extensible. If you are interested in developing a plugin, check out the [Plugin Development Guide](../plugins/).


## Project local hooks

If you need access to the hooks API in your project and don't want to create a full plugin for it, you can use the `httpyac.config.js` file:

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.responseLogging.addHook('removeSensitiveData', function (response) {
			if (response.request) {
				delete response.request.headers['authorization'];
			}
		});
	}
}
```

For more information, read the [Plugin API](../plugins/).
