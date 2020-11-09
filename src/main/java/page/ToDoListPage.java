package page;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import util.BasePage;

public class ToDoListPage extends BasePage {

	WebDriver driver;

	public ToDoListPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//body[@style='background-color: white;']")
	WebElement VALIDATE_WHITE_COLOR;
	@FindBy(how = How.XPATH, using = "//body[@style='background-color: skyblue;']")
	WebElement VALIDATE_SKYBLUE_COLOR;
	@FindBy(how = How.XPATH, using = "//button[@onclick='myFunctionSky()']")
	WebElement SET_SKYBLUE_BACKGROUND_BUTTON;
	@FindBy(how = How.XPATH, using = "//button[@onclick='myFunctionWhite()']")
	WebElement SET_WHITE_BACKGROUND_BUTTON;

	public void validateWhiteColor() {
		try {
			VALIDATE_WHITE_COLOR.getAttribute("style");
		} catch (Exception e) {
			SET_WHITE_BACKGROUND_BUTTON.click();
		}

		String expectedColor = "background-color: white;";
		String actualColor = VALIDATE_WHITE_COLOR.getAttribute("style");

		Assert.assertEquals("wrong background color", expectedColor, actualColor);
	}

	public void validateSkyBlueColor() {
		try {
			VALIDATE_SKYBLUE_COLOR.getAttribute("stlye");
		} catch (Exception e) {
			SET_SKYBLUE_BACKGROUND_BUTTON.click();
		}
		
		String expectedColor = "background-color: skyblue;";
		String actualColor = VALIDATE_SKYBLUE_COLOR.getAttribute("style");

		Assert.assertEquals("wrong background color", expectedColor, actualColor);
	}

	public void clickSetSkyBlueBackgroundButton() {
		explicitWait("visible", driver, VALIDATE_WHITE_COLOR, 5);
		explicitWait("clickable", driver, SET_SKYBLUE_BACKGROUND_BUTTON, 5);
		SET_SKYBLUE_BACKGROUND_BUTTON.click();
	}

	public void clickSetWhiteBackgroundButton() {
		explicitWait("visible", driver, VALIDATE_SKYBLUE_COLOR, 5);
		explicitWait("clickable", driver, SET_WHITE_BACKGROUND_BUTTON, 5);
		SET_WHITE_BACKGROUND_BUTTON.click();
	}

	public void takeScreenshotAtTheEndOfTesting(WebDriver driver, String testname) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) (driver);
		File SourceFile = ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(SourceFile, new File("screenshots\\" + testname + System.currentTimeMillis() + ".png"));
	}
}
