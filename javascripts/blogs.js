let blogPostArea = document.getElementById("blogs")
let buttonInput = document.getElementById("blogButton");
let titleInput = document.getElementById("blogTitle");
let authorInput = document.getElementById("blogAuthor");
let blogContentInput = document.getElementById("blogContent");
let blogImageInput = document.getElementById("blog-img-url");
let postArea = document.getElementById("postArea");
let blog = "";
let blogPostsRepo = [];
let index = (blogPostsRepo.length - 1);

let currentDate = new Date();
let day = currentDate.getDate();
let monthIndex = currentDate.getMonth() + 1;
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let year = currentDate.getFullYear();


function Blogs(title, author, blogContent, imgURL) {
  this.title = title;
  this.author = author;
  this.blogContent = blogContent;
  this.imgURL = imgURL;
  index += 1;
}

function collectBlog() {
  if (titleInput.value === "" || authorInput.value === "" || blogContentInput.value === "") {
  } else {
    blogPostsRepo[(index+1)] = new Blogs(titleInput.value, authorInput.value, blogContentInput.value, blogImageInput.value);
  }
}

function clearBlog() {
  titleInput.value = "";
  authorInput.value = "";
  blogContentInput.value = "";
  blogImageInput.value = "";
}

function postBlog() {
  blogPostsRepo.forEach(function(item){
    blog += `
    <h3>${titleInput.value}</h3>
    <h4>By: ${authorInput.value}</h4>
    <p>${day}-${month[monthIndex]}-${year}</p>
    <p>${blogContentInput.value}</p>
    <p>${blogImageInput.value}</p>`
  })
  postArea.innerHTML = blog;
}

buttonInput.addEventListener("click", function(){
  collectBlog();
  postBlog();
  clearBlog();
  console.log(blogPostsRepo[0]);
});

console.log(currentDate);
