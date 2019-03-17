//1. Step Definition File <- This file
//2. Runner File
//3. Feature file

package testcases;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;

public class HomePageTest {

	@Given("^Open Browser as (.*)$")
	public void openBrowser(String browser) {
		System.out.println("openBrowser completed "+browser);
	}

	@Then("^Enter URL as (.*)$")
	public void enterURL(String url) {
		System.out.println("enterURL completed "+url);
	}

	@And("^Enter Username as (.*)$")
	public void enterUsername(String username) {
		System.out.println("enterUsername completed "+username);
	}

	@And("^Enter Password as (.*)$")
	public void enterPassword(String password) {
		System.out.println("enterPassword completed "+password);
	}

	@Then("^Enter Mobile Number as (.*)$")
	public void enterMobileNumber(String mobilenumber) {
		System.out.println("enterMobileNumber completed "+mobilenumber);
	}

	@And("^Enter Pickup Address as (.*)$")
	public void enterPickupAddress(String pickupaddress) {
		System.out.println("enterPickupAddress completed "+pickupaddress);
	}

	@And("^Enter Drop Address as (.*)$")
	public void enterDropAddress(String dropaddress) {
		System.out.println("enterDropAddress completed "+dropaddress);
	}

	@When("^Select Vehicle Type as (.*)$")
	public void selectVehicleType(String vehicletype) {
		System.out.println("selectVehicleType completed "+vehicletype);
	}

	@But("^Dont Click Book Button$")
	public void clickBookButton() {
		System.out.println("clickBookButton completed");
	}
}
