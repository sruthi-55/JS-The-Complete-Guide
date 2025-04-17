// https://jsonplaceholder.typicode.com/
// a dummy web service that we can make requests to

const listEl = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');


// Making GET request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

// xhr.responseType = 'json';

// addEventListener on xhr obj is not supported for all browsers
xhr.onload = function(){
  // console.log(xhr.response);

  // JSON.stringify() - converts JS obj to JSON string
  // JSON.parse() - converts JSON obj to JS
  const posts = JSON.parse(xhr.response);
  console.log(posts);

  for(const post of posts){
    const postEl = document.importNode(postTemplate.content,true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listEl.append(postEl);
  }


};

xhr.send();     // can find request being sent in network tab in dev tools



