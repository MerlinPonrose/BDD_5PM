$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:DataTable_demosite.feature");
formatter.feature({
  "name": "It is to demo data table",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add product to the Cart_test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email and passwordwor in the textbox",
  "rows": [
    {
      "cells": [
        "Email",
        "Pass"
      ]
    },
    {
      "cells": [
        "test1@test.com",
        "123456"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "DataTable_demo.user_enter_email_and_passwordwor_in_the_textbox(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: received Inspector.detached event\n  (failed to check if window was closed: disconnected: Unable to receive message from renderer)\n  (Session info: chrome\u003d122.0.6261.95)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PJ5JRQT\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.95, chrome: {chromedriverVersion: 122.0.6261.94 (880dbf29479c..., userDataDir: C:\\Users\\KARENA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54320}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6b91a941e3609bae2b4aa22eb9e80250\n*** Element info: {Using\u003dname, value\u003dEmail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.bdd.stepdefinition.DataTable_demo.user_enter_email_and_passwordwor_in_the_textbox(DataTable_demo.java:62)\r\n\tat ✽.User enter email and passwordwor in the textbox(file:DataTable_demosite.feature:6)\r\n",
  "status": "failed"
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
formatter.step({
  "name": "User click the searchbox and search the product",
  "rows": [
    {
      "cells": [
        "Products"
      ]
    },
    {
      "cells": [
        "HTC One Mini Blue"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DataTable_demo.user_click_the_searchbox_and_search_the_product(DataTable)"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:demosite.feature");
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chromebrowser and open the url \"https://demo.nopcommerce.com/login?returnUrl\u003d%2F\"",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoSiteApp.user_launches_the_chromebrowser_and_open_the_url(String)"
});
