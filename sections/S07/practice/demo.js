// DOM - Document Object Model
// The browser exposes a Web API to allow JS to work with the parsed HTML document

// document & window - global objects that are exposed by browsers to interact with HTML
// document is a property of window

// DOM tree consists of element nodes, text nodes

// console.dir(document);
// $0 - only in browser dev tools - refers to the most recently selected element

// querySelector()
// getElementById()

// querySelectorAll()
// getElementsByTagName()
// getElementsByClassName()

// querySelectorAll() returns a non-live NodeList while getXByY return live NodeList

console.log(document.querySelector("ul li:first-of-type"));   //pseudo selector

// document.head - selects head
// document.body - selects body
// document.documentElement - select html


// input.id - 1:1 mapping + live-sync
// input.className - diff names + live-sync
// input.value - 1:1 mapping + 1 way live-sync
// setAttribute(,)

// textContent, backgroundColor - properties follow camelCase