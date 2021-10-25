// =============== CONST VARIABLES ===========================

const LOADING_MESSAGE = "Loading...";

// =============== Calling HTML elements ========================

const elUserMessage = $_(".js-user-message"); // p tag for showing count of users
const elPostsMessage = $_(".js-post-message"); // p tag for showing count of posts
const elCommentsMessage = $_(".js-comment-message"); // p tag for showing count of comments

const elUserList = $_(".js-user-list"); // ul tag for users list
const elPostList = $_(".js-post-list"); // ul tag for posts list
const elCommentList = $_(".js-comment-list"); // ul tag for comments list

// =============== Calling Templates =========================

const elUserTemplate = $_("#user-template").content; // Template for user datas
const elPostTemplate = $_("#post-template").content; // Template for post datas
const elCommentTemplate = $_("#comment-template").content; // Template for comments

// ================ Initial commands =========================
fetchUsersApi(); // Call function for fetching users data
elUserMessage.textContent = LOADING_MESSAGE; // Show "Loading..." text in user message tag
elPostsMessage.textContent = "Select user"; // Set text for post message tag
elCommentsMessage.textContent = "Select post"; // Set text for comment message tag

/************************
EVENT LISTENERS
************************/
// Event Listener when click USER NAME
elUserList.addEventListener("click", (e) => {
  if (e.target.className === "btn btn-link link-button js-user-post-btn") {
    elPostsMessage.textContent = LOADING_MESSAGE; // Set text for post message tag
    elCommentsMessage.textContent = "Select post"; // Set text for comment message tag
    elPostList.innerHTML = ""; // Clear Post list
    elCommentList.innerHTML = ""; // Clear Comment list
    fetchPostsApi(e.target.value); // Call function for fetching posts data
  }
})

// Event Listener when click POST NAME
elPostList.addEventListener("click", (e) => {
  if (e.target.className === "btn btn-link text-start link-button js-post-name-btn") {
    elCommentsMessage.textContent = LOADING_MESSAGE; // Set text for comment message tag
    elCommentList.innerHTML = ""; // Clear Comment list
    fetchCommentsApi(e.target.value);// Call function for fetching Comments data
  }
})