// spec.js
describe('Protractor Rocketmiles Test', function() {
	var searchButton = element(by.className('submit col-md-12'));
	var locationField = element(by.model('searchForm.params.location'));
	var checkInField = element(by.model('searchForm.params.checkIn'));
	var checkOutField = element(by.model('searchForm.params.checkOut'));
    var numRooms = element(by.model('searchForm.params.rooms'));
    var rewardProgram = element(by.model('searchForm.params.program'));
    var numAdults = element(by.model('searchForm.params.adults'));
    var closePopup = element(by.className('close'))




	beforeEach(function() {
      browser.get('http://www.rocketmiles.com');
      //closePopup.click();
      //expect(browser.getTitle()).toEqual('Rocketmiles');
  });

	// Test Cases

	it('should search if all fields have valid values', function() {
		locationField.sendKeys('New York City, NY, United States');
		
		// select all other valid values and search. Expect to be on a results page with 0 or more values.


	});

	// missing fields
    it('should not search if there is a missing location field', function() {
    });

    it('should not search if there is a missing check in field', function() {
    });

    it('should not search if there is a missing check out field', function() {
    });

    it('should not search if there is a missing Reward Program field', function() {
    });

    // invalid fields
    it('should not search if there is an invalid location field', function() {
    });

    it('should not search if there is an invalid check in field', function() {
    });

    it('should not search if there is an invalid check out field', function() {
    });

    it('should not search if there is an invalid number of rooms field', function() {
    });

    it('should not search if there is an invalid Reward Program field', function() {
    });

    it('should not search if there is an invalid Number of Adults field', function() {
    });

    //Additional Tests: Part 2

    // Test the following things:
    // 1. Sign in to website (Valid and invalid information)
    // 2. Sign in Security - verify that the user can access user features when signed in, and cannot if not signed in. 
   	//    Also verify that administrator features are only useable by admins.
   	// 3. Verify Language and Currency Selection.
   	// 4. Verify booking process. This includes:
    //    a. Booking works
    //    b. Verification email sent
    //    c. Rewards applied to a given reward program.

});