//conf.js
exports.config = {
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['spec.js'],

		jasmineNodeOpts: {
			defaultTimeoutInterval: 250000
		},
		onPrepare: function() {
			browser.driver.manage().window().maximize();
		},
		multiCapabilities: [
		                    {
		                    	'browserName' : 'chrome'
		                    },
		                    {
		                    	'browserName' : 'firefox'
		                    }

		                    ],
}