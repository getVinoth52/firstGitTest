$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("testcases/home.feature");
formatter.feature({
  "line": 2,
  "name": "To validate new home page of NTL Taxi",
  "description": "",
  "id": "to-validate-new-home-page-of-ntl-taxi",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Validate home page with positive data",
  "description": "",
  "id": "to-validate-new-home-page-of-ntl-taxi;validate-home-page-with-positive-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser as Firefox",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter URL as http://www.ntltaxi.com",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Username as SampleUser",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter Password as 123!@3",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter Mobile Number as 0987654321",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter Pickup Address as here",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter Drop Address as again here",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select Vehicle Type as Sedan",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Dont Click Book Button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 337339584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 428258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SampleUser",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterUsername(String)"
});
formatter.result({
  "duration": 353617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123!@3",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterPassword(String)"
});
formatter.result({
  "duration": 442253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0987654321",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterMobileNumber(String)"
});
formatter.result({
  "duration": 410997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "here",
      "offset": 24
    }
  ],
  "location": "HomePageTest.enterPickupAddress(String)"
});
formatter.result({
  "duration": 788405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "again here",
      "offset": 22
    }
  ],
  "location": "HomePageTest.enterDropAddress(String)"
});
formatter.result({
  "duration": 684840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.selectVehicleType(String)"
});
formatter.result({
  "duration": 380208,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickBookButton()"
});
formatter.result({
  "duration": 389071,
  "status": "passed"
});
});