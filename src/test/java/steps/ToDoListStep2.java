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

public class ToDoListStep2 {
	WebDriver driver;
	ToDoListPage todolist;
	BrowserFactory browser;

	@Given("^The background of techfios test page is blue$")
	public void the_background_of_techfios_test_page_is_blue() throws Throwable {
		driver = BrowserFactory.init();
		todolist = PageFactory.initElements(driver, ToDoListPage.class);
		todolist.validateSkyBlueColor();
	}

	@When("^the user clicks Set White Background$")
	public void the_user_clicks_Set_White_Background() throws Throwable {
		todolist.clickSetWhiteBackgroundButton();
	}

	@Then("^the background should change to White$")
	public void the_background_should_change_to_White() throws Throwable {
		todolist.validateWhiteColor();
		todolist.takeScreenshotAtTheEndOfTesting(driver, "white_background_test");
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
