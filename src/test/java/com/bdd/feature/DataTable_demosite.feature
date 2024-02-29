Feature: It is to demo data table

@test
Scenario: Add product to the Cart_test
Given User launches the chromebrowser and open the url "https://demo.nopcommerce.com/login?returnUrl=%2F"
When User enter email and passwordwor in the textbox
|Email|Pass|
|test1@test.com|123456|
And User click the login button
And User click the searchbox and search the product
|Products|
|HTC One Mini Blue|
And User click the Add to cart button
And User click Shopping cart link
Then User validat the product in shopping cart