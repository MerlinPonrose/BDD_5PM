@Demosite
Feature: This feaure is to automate demo site


Background:
Given User launches the chromebrowser and open the url "https://demo.nopcommerce.com/login?returnUrl=%2F"
When User click the emailfield and enter the value "test1@test.com"
And User click the passwordtextbox and enter "123456" in the passwordfield
And User click the login button

@sanity @Regression
Scenario: Add product to the Cart
And User click the searchbox and search the product "HTC One Mini Blue"
And User click the Add to cart button
And User click Shopping cart link
Then User validat the product in shopping cart


@test
Scenario: Add product to the Cart_test
And User click the searchbox and search the product "HTC One Mini Blue"
And User click the Add to cart button
And User click Shopping cart link
Then User validat the product in shopping cart



