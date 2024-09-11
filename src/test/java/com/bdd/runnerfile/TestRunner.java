package com.bdd.runnerfile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\neworkspace\\BDDFramework_Feb\\src\\test\\java\\com\\bdd\\feature",
glue="com.bdd.stepdefinition",
plugin= {"pretty","html:target/cucumber","json:target/cucumber.json"},
monochrome=true,
dryRun=false)
public class TestRunner {

}
