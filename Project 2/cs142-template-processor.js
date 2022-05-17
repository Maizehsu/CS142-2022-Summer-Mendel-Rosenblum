/*
 * @Author: xumai07 maizehsu@outlook.com
 * @Date: 2022-05-16 23:33:26
 * @LastEditors: xumai07 maizehsu@outlook.com
 * @LastEditTime: 2022-05-17 21:10:35
 * @FilePath: \Project 2\cs142-template-processor.js
 * @Description: cs142 project 2 template processor
 */

"use strict";

class Cs142TemplateProcessor {
  constructor(template) {
    this.template = template;
  }

  fillIn(dictionary) {
    let str = this.template;
    const re = /{{[^{}]*}}/g;
    const sol = str.match(re);
    for (let i = 0; i < sol.length; i++) {
      var word = sol[i].replace("{{", "").replace("}}", "");
      str = str.replace(sol[i], dictionary[word] || "");
    }
    return str;
  }
}

/*
var template =
  "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: "July", day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary);

var assert = require("assert");

assert(str === "My favorite month is July but not the day 1 or the year 2016");

//Case: property doesn't exist in dictionary
var dictionary2 = { day: "1", year: "2016" };
var str2 = dateTemplate.fillIn(dictionary2);

assert(str2 === "My favorite month is  but not the day 1 or the year 2016");
*/
