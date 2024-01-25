module.exports = {
	environments: {
		$shared: {
			dev: false,
			live: false,
			host: 'https://httpbin.org',
			system: 'none'
		},
		dev: {
			dev: true,
			system: 'dev'
		},
		live: {
			live: true,
			system: 'live'
		}
	}
};