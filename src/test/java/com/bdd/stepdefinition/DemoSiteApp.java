package com.bdd.stepdefinition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.bdd.utility.BaseClass;
import com.github.dockerjava.core.dockerfile.DockerfileStatement.Add;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DemoSiteApp extends BaseClass{
	
	
	@Given("User launches the chromebrowser and open the url {string}")
	public void user_launches_the_chromebrowser_and_open_the_url(String url){
WebDriverManager.chromedriver().setup();
		
		driver	 = new ChromeDriver();
			
	driver.manage().window().maximize();


	driver.get("https://demo.nopcommerce.com/login?returnUrl=%2F");
	 
	}

	@When("User click the emailfield and enter the value {string}")
	public void user_click_the_emailfield_and_enter_the_value(String email) {
		
		WebElement emailtextbox = driver.findElement(By.name("Email"));
		emailtextbox.click();
		emailtextbox.clear();
		emailtextbox.sendKeys(email);
	  
	}

	@When("User click the passwordtextbox and enter {string} in the passwordfield")
	public void user_click_the_passwordtextbox_and_enter_in_the_passwordfield(String pass) {
		

		WebElement emailtextbox = driver.findElement(By.name("Password"));
		emailtextbox.click();
		emailtextbox.clear();
		emailtextbox.sendKeys(pass);
	 
	}

	@When("User click the login button")
	public void clickSubmitbutton() {
		
		WebElement submitButton = driver.findElement(By.xpath("(//button[@type='submit'])[2]"));
		submitButton.click();
	   
	}

	@When("User click the searchbox and search the product {string}")
	public void user_click_the_searchbox_and_search_the_product(String product) {
		
		WebElement searchboxtextbox = driver.findElement(By.id("small-searchterms"));
		searchboxtextbox.click();
		searchboxtextbox.clear();
		searchboxtextbox.sendKeys(product);
		WebElement searchicon = driver.findElement(By.xpath("//button[text()='Search']"));
		searchicon.click();
	  
	}

	@When("User click the Add to cart button")
	public void user_click_the_Add_to_cart_button() {
		
		WebElement AddToCartButton = driver.findElement(By.xpath("//button[text()='Add to cart']"));
		AddToCartButton.click();
	  
	}

	@When("User click Shopping cart link")
	public void user_click_Shopping_cart_link() {
	  
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[text()='shopping cart']")));
		
		WebElement cartLink = driver.findElement(By.xpath("//a[text()='shopping cart']"));
		cartLink.click();
	}

	@Then("User validat the product in shopping cart")
	public void user_validat_ethe_product_in_shopping_cart() {
	   
		  List<WebElement> productTable = driver.findElements(By.xpath("//table[@class='cart']"));
		  int size = productTable.size();
		  if(size!=0)
		  {
			  System.out.println("Product Added");
		  }
		  else
		  {
			  System.out.println("Product is not available");
		  }
	}

	@Then("User validat the page title")
	public void user_validat_the_page_title() {
	 
	}

	@When("User enter email {string} in email text box and password {string} in password textbox")
	public void user_enter_email_in_email_text_box_and_password_in_password_textbox(String email, String pass) {
	 
	}
	
	@Then("validate something")
	public void validatefeature()
	{
		
	}
}
