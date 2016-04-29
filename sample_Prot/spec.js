describe('Posse demo', function() {
	it('Enter Hyderabad in Search and click on search button', function(){
		console.log("Entered into TestCase");
		element(by.model('userInputQuery')).sendKeys('Hyderabad');
		element(by.className('btn btn-default btn-primary')).click();
	});
	
//	it('Enter coffee in search box and click on search button', function (){
//		console.log("Performing coffee search operation");
//		element(by.model('userInputQuery')).sendKeys('coffee');
//		element(by.xpath('//button[@ng-disabled="!canSearch()"]')).click();
//	});
	beforeEach(function() {
		browser.ignoreSynchronization = true
		browser.get("https://posse.com/");			
		expect(browser.getTitle()).toEqual('Posse - Discover the best places on Earth');
		console.log("Launched "+browser.getTitle()+" successfully");
	});
	afterEach(function() {
		browser.close();
	});
});