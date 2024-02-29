package com.bdd.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.bdd.utility.BaseClass;

import cucumber.api.java.en.When;

public class DataTable_demo extends BaseClass{
	
	
	@When("User click the searchbox and search the product")
	public void user_click_the_searchbox_and_search_the_product(io.cucumber.datatable.DataTable dataTable) {
		
		/*List<String> l = dataTable.asList();
		int size = l.size();
		
		for(int i=0;i<size;i++)
		{
			WebElement searchboxtextbox = driver.findElement(By.id("small-searchterms"));
			searchboxtextbox.click();
			searchboxtextbox.clear();
			searchboxtextbox.sendKeys(l.get(i));
			WebElement searchicon = driver.findElement(By.xpath("//button[text()='Search']"));
			searchicon.click();
		}
		
		*/
		
		Map<String, String> map = dataTable.asMap(String.class, String.class);
		WebElement searchboxtextbox = driver.findElement(By.id("small-searchterms"));
		searchboxtextbox.click();
		searchboxtextbox.clear();
		System.out.println(map.get("Products"));
		searchboxtextbox.sendKeys(map.get("Products"));
		WebElement searchicon = driver.findElement(By.xpath("//button[text()='Search']"));
		searchicon.click();
		
		
	  
	}
	
	@When("User enter email and passwordwor in the textbox")
	public void user_enter_email_and_passwordwor_in_the_textbox(io.cucumber.datatable.DataTable dataTable) {
	  /* List<List<String>> l2 = dataTable.asLists();
	   
		WebElement emailtextbox = driver.findElement(By.name("Email"));
		emailtextbox.click();
		emailtextbox.clear();
		emailtextbox.sendKeys(l2.get(0).get(0));
	  
		WebElement pass = driver.findElement(By.name("Password"));
		pass.click();
		pass.clear();
		pass.sendKeys(l2.get(0).get(1));*/
		
		List<Map<String, String>> asMaps = dataTable.asMaps(String.class, String.class);
		WebElement emailtextbox = driver.findElement(By.name("Email"));
		emailtextbox.click();
		emailtextbox.clear();
		emailtextbox.sendKeys(asMaps.get(0).get("Email"));
	  
		WebElement pass = driver.findElement(By.name("Password"));
		pass.click();
		pass.clear();
		pass.sendKeys("123456");
		
	
		
	}

}
