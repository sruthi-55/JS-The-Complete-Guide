const listEl = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// Promisifying Http requests
// Using XMLHttpRequest()
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolveFn, rejectFn) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type','application/json');

    // addEventListener on xhr obj is not supported for all browsers
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolveFn(xhr.response);
      } else {
        // console.log(xhr.response);    // can access it here - to check data added to res body
        rejectFn(new Error("Oops! Something went wrong."));
      }
    };

    // This doesn't process for Http requests that are successful
    // so not processed for client-side errors like 404
    // this will kick in when network err occcurs
    xhr.onerror = function () {
      console.log(xhr.response);
      console.log(xhr.status);
      rejectFn(new Error("Failed to send the request!"));
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

// GET posts
async function fetchPosts() {
  // try{
  const resData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = resData;

  for (const post of posts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listEl.append(postEl);
  }
  // }
  // catch(err){
  //   alert(err.message);
  // }
}

// POST a post
async function createPost(title, content) {
  const userId = Math.random();
  const newPost = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );
}

// fetchPosts();
// createPost("Sruthi's new post", 'some content');      // 201 - successful creation of a resource

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;
  createPost(title, content);
});

// When delete btn is clicked - DELETE a post
// Updating UI is not implemented here
postList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const pId = e.target.closest("li").id;
    console.log(pId);
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${pId}`
    );
  }
});
