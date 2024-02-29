package com.bdd.stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before(order=2)
	public void testpre_condition()
	{
		System.out.println("pre condition 1 ");
	}
	
	@Before(order=1)
	public void precodition2_test()
	{
		System.out.println("pre condition 2 ");
	}

	@After(order=1)
	public  void postcondition()
	{
		System.out.println("post condition 1 ");
	}
	
	@After(order=2)
	public  void postcondition2()
	{
		System.out.println("post condition 2 ");
	}
	
	@Before("@test")
	public void test_precondition()
	{
		System.out.println("Test pre condition");
	}
	

	@After("@test")
	public void test_postcondition()
	{
		System.out.println("Test post condition");
	}
}
