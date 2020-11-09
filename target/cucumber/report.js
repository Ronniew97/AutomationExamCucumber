$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/todolist.feature");
formatter.feature({
  "line": 1,
  "name": "Valid user should be able to change the background color in the techfios test page",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "A valid user should be able to change the backbround color",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page;a-valid-user-should-be-able-to-change-the-backbround-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "The background of techfios test page is white",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user clicks Set SkyBlue Background",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background should change to SkyBlue",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.the_background_of_techfios_test_page_is_white()"
});
formatter.result({
  "duration": 8043879200,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListSteps.the_user_clicks_Set_SkyBlue_Background()"
});
formatter.result({
  "duration": 203235300,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListSteps.the_background_should_change_to_SkyBlue()"
});
formatter.result({
  "duration": 512745700,
  "status": "passed"
});
formatter.after({
  "duration": 667750900,
  "status": "passed"
});
formatter.after({
  "duration": 126400,
  "status": "passed"
});
});