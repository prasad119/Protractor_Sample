describe('It performs the calculator operation', function() {
	beforeEach(function() {
		browser.driver.ignoreSynchronization = false //It is need to maintain for handling non angular applications
		console.log("Opening shavik");
		browser.driver.get('http://fs.shavik.com.au/calc/');
	}, 10000);
	afterEach(function() {
		browser.driver.close();
		browser.driver.quit();
	});

	it('clicks on the dashboard in home page',function(){
		browser.driver.ignoreSynchronization = false
		var ele = browser.driver.findElement(by.css("button:contains('Dashboard')"));
		ele.click();
	});
});