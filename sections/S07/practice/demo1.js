//#### Traversing DOM
// parentNode, parentElement, closest()

// childNodes, children
// firstChild, firstElementChild, lastChild, lastElementChild

// previousSibling, previousElementSibling
// nextSibling, nextElementSibling


// To display white-spaces b/w HTML elements set style "white-space: pre"

// li.closest('body') - selects closest ancestor element

// classList .add(), .remove(), .contains, .toggle()



//#### Creating & Inserting DOM Elements (2 ways)
// innerHTML, insertAdjacentHTML()

// createElement() with 
// - append(), appendChild(), 
// - prepend(), before(), after(), insertBefore(), 
// - insertAdjacentElement()
// - replaceChild(), replaceWith()

const newLi = document.createElement('li');
newLi.textContent = 'ITEM 4';

// Inserting the same element multiples times just moves it beacuse it is an object 

const list = document.getElementsByTagName('ul')[0];

// list.before(newLi);
list.after(newLi);
// list.prepend(newLi);
// list.append(newLi);
// list.replaceWith(newLi);

const secLi = list.children[1];
// secLi.after(newLi);
secLi.insertAdjacentElement('afterend',newLi);