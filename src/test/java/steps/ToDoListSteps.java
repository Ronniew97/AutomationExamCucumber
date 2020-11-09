package steps;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.ToDoListPage;
import util.BrowserFactory;

public class ToDoListSteps {

	WebDriver driver;
	ToDoListPage todolist;
	BrowserFactory browser;

	@Given("^The background of techfios test page is white$")
	public void the_background_of_techfios_test_page_is_white() throws Throwable {
		driver = BrowserFactory.init();
		todolist = PageFactory.initElements(driver, ToDoListPage.class);
		todolist.validateWhiteColor();
	}

	@When("^the user clicks Set SkyBlue Background$")
	public void the_user_clicks_Set_SkyBlue_Background() throws Throwable {
		todolist.clickSetSkyBlueBackgroundButton();
	}

	@Then("^the background should change to SkyBlue$")
	public void the_background_should_change_to_SkyBlue() throws Throwable {
		todolist.validateSkyBlueColor();
		todolist.takeScreenshotAtTheEndOfTesting(driver, "blue_background_test");
	}

	@After()
	public void closeBrowser() {
		browser = new BrowserFactory();
		try {
			browser.closeBrowser();
		} catch (NoSuchSessionException n) {
		}
	}

}
