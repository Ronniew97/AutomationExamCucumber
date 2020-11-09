Feature: Valid user should be able to change the background color in the techfios test page

@Scenario1
Scenario: A valid user should be able to change the backbround color
	Given The background of techfios test page is white
	When the user clicks Set SkyBlue Background
	Then the background should change to SkyBlue

@Scenario2
Scenario: A valid user should be able to change the backbround color
	Given The background of techfios test page is blue
	When the user clicks Set White Background
	Then the background should change to White
