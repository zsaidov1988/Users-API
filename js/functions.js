//=================Functions======================

// ================ FETCH USER API =================
function fetchUsersApi() {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((data) => {
    if (data.length > 0) {
      data.forEach(user => {
        renderUser(user);
      });
      elUserMessage.textContent = `Count of users: ${data.length}`;
    }
  });
}

// ================ RENDER USER API =================
function renderUser(user) {
  const newLi = elUserTemplate.cloneNode(true);
  const linkUser = $_(".js-user-post-btn", newLi); // Button for user name
  linkUser.textContent = `${user.name} - ${user.username}`;
  linkUser.value = user.id; // Assign user id to button value
  const userEmail = $_(".js-user-email-link", newLi); // a tag for user email
  userEmail.textContent = user.email;
  userEmail.href = `mailto:${user.email}`;
  $_(".js-country-span", newLi).textContent = user.address.city; // span tag for country
  $_(".js-company-span", newLi).textContent = user.company.name; // span tag for company name
  const linkSite = $_(".js-website-link", newLi); // a tag for website
  linkSite.textContent = user.website;
  linkSite.href = `https://www.${user.website}`;
  linkSite.target = "blank";
  elUserList.appendChild(newLi);
}

// ================ FETCH POST API =================
function fetchPostsApi(id) {
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
    if (data.length > 0) {
      let countPosts = 0;
      data.forEach(post => {
        if (post.userId == id) {
          renderPost(post);
          countPosts++;
        }
      });
      elPostsMessage.textContent = `Count of posts: ${countPosts}`;
    }
  });
}

// ================ RENDER POST API =================
function renderPost(post) {
  const newLi = elPostTemplate.cloneNode(true);
  const postNameBtn = $_(".js-post-name-btn", newLi); // Button for post name
  postNameBtn.textContent = post.title;
  postNameBtn.value = post.id; // Assign post id to button value
  $_(".js-post-span", newLi).textContent = post.body; // Span tag for post text
  elPostList.appendChild(newLi);
}

// ================ FETCH COMMENT API =================
function fetchCommentsApi(id) {
  fetch("https://jsonplaceholder.typicode.com/comments").then((response) => response.json()).then((data) => {
    if (data.length > 0) {
      let countComments = 0;
      data.forEach(comment => {
        if (comment.postId == id) {
          renderComment(comment);
          countComments++;
        }
      });
      elCommentsMessage.textContent = `Count of comments: ${countComments}`;
    }
  });
}

// ================ RENDER COMMENT API =================
function renderComment(comment) {
  const newLi = elCommentTemplate.cloneNode(true);
  $_(".js-comment-name", newLi).textContent = comment.name; // h4 tag for comment name
  const userEmail = $_(".js-comment-email-link", newLi); // a tag for user email
  userEmail.textContent = comment.email;
  userEmail.href = `mailto:${comment.email}`;
  $_(".js-comment-span", newLi).textContent = comment.body; // span tag for comment text
  elCommentList.appendChild(newLi);
}