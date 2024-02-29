Feature: Multiple data to the scenario


Background:
Given User launches the chromebrowser and open the url "https://demo.nopcommerce.com/login?returnUrl=%2F"
When User click the emailfield and enter the value "test1@test.com"
And User click the passwordtextbox and enter "123456" in the passwordfield
And User click the login button

@Test
Scenario Outline: Adding multiple product to cart
And User click the searchbox and search the product "<Product>"
And User click the Add to cart button
And User click Shopping cart link
Then User validat the product in shopping cart

Examples:
|Product|
|HTC One Mini Blue|
|Nokia Lumia 1020|