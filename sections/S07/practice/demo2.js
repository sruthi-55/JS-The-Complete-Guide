const list = document.getElementsByTagName('ul')[0];
const listItem = document.createElement('li');
listItem.textContent = 'Item 4';

// // cloneNode() - available on every DOM node object
// const copyLi = listItem.cloneNode(true);  //deep clone with all child nodes and descendants
// list.append(listItem,copyLi);


// ####### Difference b/w querySelector() and getElementXByZ()

const listItems = list.querySelectorAll('li');  // non-live array
const listItems1 = list.getElementsByTagName('li');   // live array of nodes
list.append(listItem);
console.log(listItems);
console.log(listItems1);


// ##### Removing nodes
list.remove();
// list.parentElement.removeChild(list);