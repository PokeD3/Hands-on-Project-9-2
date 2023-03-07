/*
JavaScript 6th Edition
Chapter 9
Hands-on Project 9-2

Author: Douglas Faulkner
Date:   March 5, 2023

Filename: script.js
*/
//Step5
"use strict";
//Step6
function processCookie() {
    document.cookie = "username" + document.getElementById("usernameinput").value;
}
//Step7
function populateInfo() {
    if (document.cookie) {
        var uname = document.cookie;
        uname = uname.substring(uname.lastIndexOf("=") + 1);
        document.getElementById("usernameinput").value = uname;
    }
}
//Step8
function handleSubmit() {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    processCookie();
    document.getElementsByTagName("form")[0].submit();
}
//Step9
function createEventListener() {
    var loginForm = document.getElementsByTagName("form")[0];
    if (loginForm.addEventListener) {
        loginForm.addEventListener("submit", handleSubmit, false);
    } else if (loginForm.attachEvent) {
        loginForm.attachEvent("onsubmit", handleSubmit);
    }
}
function setUpPage() {
    populateInfo();
    createEventListener();
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}