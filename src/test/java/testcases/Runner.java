//1. Step Definition File
//2. Runner File <- This file
//3. Feature file

package testcases;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.MonochromeFormats;

@RunWith(Cucumber.class)
@CucumberOptions(tags="@HomePage",format={"pretty","html:reports"},monochrome=true)
public class Runner {

}
