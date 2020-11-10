$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/todolist.feature");
formatter.feature({
  "line": 2,
  "name": "Valid user should be able to change the background color in the techfios test page",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "A valid user should be able to change the backbround color",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page;a-valid-user-should-be-able-to-change-the-backbround-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The background of techfios test page is white",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks Set SkyBlue Background",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background should change to SkyBlue",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListSteps.the_background_of_techfios_test_page_is_white()"
});
formatter.result({
  "duration": 7738686300,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListSteps.the_user_clicks_Set_SkyBlue_Background()"
});
formatter.result({
  "duration": 243390800,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListSteps.the_background_should_change_to_SkyBlue()"
});
formatter.result({
  "duration": 595658100,
  "status": "passed"
});
formatter.after({
  "duration": 724501200,
  "status": "passed"
});
formatter.after({
  "duration": 108200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "A valid user should be able to change the backbround color",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page;a-valid-user-should-be-able-to-change-the-backbround-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "The background of techfios test page is blue",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user clicks Set White Background",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background should change to White",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListStep2.the_background_of_techfios_test_page_is_blue()"
});
formatter.result({
  "duration": 3281276700,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListStep2.the_user_clicks_Set_White_Background()"
});
formatter.result({
  "duration": 223779500,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListStep2.the_background_should_change_to_White()"
});
formatter.result({
  "duration": 520850000,
  "status": "passed"
});
formatter.after({
  "duration": 727905000,
  "status": "passed"
});
formatter.after({
  "duration": 98200,
  "status": "passed"
});
});