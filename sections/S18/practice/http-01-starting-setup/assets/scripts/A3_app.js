const listEl = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// Promisifying Http requests
// Using fetch() API - new (not supported in old browser versions)
function sendHttpRequest(method, url, data) {
  // returns a promise
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      something: "hehe",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json(); // by default fetch() gives streamed response
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong. client-side error");
        });
      }
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Something went wrong.");
    });
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
