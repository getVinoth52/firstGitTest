@HomePage
Feature: To validate new home page of NTL Taxi

  Scenario: Validate home page with positive data
    Given Open Browser as Firefox
    Then Enter URL as http://www.ntltaxi.com
    And Enter Username as SampleUser
    And Enter Password as 123!@3
    Then Enter Mobile Number as 0987654321
    And Enter Pickup Address as here
    And Enter Drop Address as again here
    When Select Vehicle Type as Sedan
    But Dont Click Book Button
