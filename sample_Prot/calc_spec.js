describe('It performs the calculator operation', function() {
	beforeEach(function() {
		browser.ignoreSynchronization = true
		console.log("Opening shavik");
		browser.get('http://fs.shavik.com.au/calc/');
		expect(browser.getTitle().toEqual('Wealthsense Calculator '));
	}, 2000);
	afterEach(function() {
		browser.close();
		browser.quit();
	});

	it('clicks on the dashboard in home page',function(){
		element(by.xpath("//button[contains(text(),'Dashboard')]")).click();
	});
});