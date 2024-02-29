$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:demosite.feature");
formatter.feature({
  "name": "This feaure is to automate demo site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Demosite"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the emailfield and enter the value \"test1@test.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_emailfield_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the passwordtextbox and enter \"123456\" in the passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_passwordtextbox_and_enter_in_the_passwordfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.clickSubmitbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add product to the Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demosite"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User click the searchbox and search the product \"HTC One Mini Blue\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_searchbox_and_search_the_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the Add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_Shopping_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validat the product in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSiteApp.user_validat_ethe_product_in_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:multipledata.feature");
formatter.feature({
  "name": "Multiple data to the scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Adding multiple product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User click the searchbox and search the product \"\u003cProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click the Add to cart button",
  "keyword": "And "
});
formatter.step({
  "name": "User click Shopping cart link",
  "keyword": "And "
});
formatter.step({
  "name": "User validat the product in shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "HTC One Mini Blue"
      ]
    },
    {
      "cells": [
        "Nokia Lumia 1020"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the emailfield and enter the value \"test1@test.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_emailfield_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the passwordtextbox and enter \"123456\" in the passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_passwordtextbox_and_enter_in_the_passwordfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.clickSubmitbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Adding multiple product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User click the searchbox and search the product \"HTC One Mini Blue\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_searchbox_and_search_the_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the Add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_Shopping_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validat the product in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSiteApp.user_validat_ethe_product_in_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the emailfield and enter the value \"test1@test.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_emailfield_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the passwordtextbox and enter \"123456\" in the passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_passwordtextbox_and_enter_in_the_passwordfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.clickSubmitbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Adding multiple product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "User click the searchbox and search the product \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_searchbox_and_search_the_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the Add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_Shopping_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validat the product in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSiteApp.user_validat_ethe_product_in_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:test.feature");
formatter.feature({
  "name": "This feaure is to automate demo site",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the emailfield and enter the value \"test1@test.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_emailfield_and_enter_the_value(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the passwordtextbox and enter \"123456\" in the passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_passwordtextbox_and_enter_in_the_passwordfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.clickSubmitbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add product to the Cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click the searchbox and search the product \"HTC One Mini Blue\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_searchbox_and_search_the_product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the Add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_the_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click Shopping cart link",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSiteApp.user_click_Shopping_cart_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validat the product in shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoSiteApp.user_validat_ethe_product_in_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
});