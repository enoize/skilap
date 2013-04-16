var webdriver = require('selenium-webdriver')
var By = webdriver.By;
var Key = webdriver.Key;
var assert = require("assert");
var _ = require("lodash");

module.exports.login = function (user, check) {
	var self = this;
	this.browser.get("http://localhost/login");
	// wait for page load
	self.browser.wait(function () {
		return self.browser.isElementPresent(By.name("name"));
	});		
	this.browser.findElement(By.name("name")).sendKeys(user.login)
	this.browser.findElement(By.name("password")).sendKeys(user.password)
	this.browser.findElement(By.css("button[name='dologin']")).click()
	// wait for page reload
	self.browser.wait(function () {
		return self.browser.isElementPresent(By.name("name")).then(function (v) {return !v; })
	});
}

module.exports.waitModalLoad = function (selector) {
	var self = this;
	selector = selector || By.css('.modal');
	self.browser.wait(function () {
		return self.browser.isElementPresent(selector)
	});
	var modal = this.browser.findElement(selector);

	self.browser.wait(function () {
		return modal.getCssValue("opacity").then(function (v) { return v==1; });
	})
	return modal;
}

module.exports.waitModalUnload = function (selector) {
	var self = this;
	selector = selector || By.css('.modal');
	self.browser.wait(function () {
		return self.browser.isElementPresent(selector).then(function (v) { return !v; })
	});	
}
