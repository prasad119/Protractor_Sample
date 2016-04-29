// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

jasmineNodeOpts: {
    defaultTimeoutInterval: 250000
},
   capabilities: {
    browserName: 'chrome'
  }
}