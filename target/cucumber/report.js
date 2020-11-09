$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/todolist.feature");
formatter.feature({
  "line": 1,
  "name": "Valid user should be able to change the background color in the techfios test page",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "A valid user should be able to change the backbround color",
  "description": "",
  "id": "valid-user-should-be-able-to-change-the-background-color-in-the-techfios-test-page;a-valid-user-should-be-able-to-change-the-backbround-color",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "The background of techfios test page is blue",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user clicks Set White Background",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the background should change to White",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoListStep2.the_background_of_techfios_test_page_is_blue()"
});
formatter.result({
  "duration": 8640783400,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListStep2.the_user_clicks_Set_White_Background()"
});
formatter.result({
  "duration": 183799600,
  "status": "passed"
});
formatter.match({
  "location": "ToDoListStep2.the_background_should_change_to_White()"
});
formatter.result({
  "duration": 466703600,
  "status": "passed"
});
formatter.after({
  "duration": 705548400,
  "status": "passed"
});
formatter.after({
  "duration": 136000,
  "status": "passed"
});
});