/*
Rapid Prototyping with JS is a JavaScript and Node.js book that will teach you how to build mobile and web apps fast. — Read more at
http://rapidprototypingwithjs.com.
*/

$(document).ready(function() {
	var parseApplicationId = "IJv3fe5ACfXMz31Hcgawlu9hqCSpZnRmdXhla8Tv";
	var parseJavaScriptKey = "zCVOU04XW6uVavaAArckdjWyMlaxrNZ3kGKXUKd5";
	var parseRestKey = "2lO4jWiQ3QNMi5bgg9sCPoMgQC3z21jkoSEy8gUw";
	//change parseApplicationId and parseJavaScriptKey to values from Parse.com application dashboard
	Parse.initialize(parseApplicationId, parseJavaScriptKey);
	var Test = Parse.Object.extend("Test");
	var test = new Test();
	test.save({
	    name: "John", 
	    text: "hi"}, {
	    success: function(object) {
	        console.log("Parse.com object is saved: "+object);
			alert(1);
	        //alternatively you could use alert("Parse.com object is saved");
	    },
	    error: function(object) {
	        console.log("Error! Parse.com object is not saved: "+object);
			alert(2);
	    }
	});
})
