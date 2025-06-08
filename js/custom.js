$(document).ready(function(){
  AOS.init();
  
   getBlogs(blogsCount);
  $(".portfolio-button").on("click", viewMore);
});

let blogsCount = 3;
const step = 1;

function getBlogs(count){
  let items = blogs.slice(0, count);

  $(".blogs").html('');
  items.forEach(function(blog){
    $(".blogs").append(`
      <div class="blogContainer">
        <div class="blog-item">
            <img src="${blog.image}" alt="">
        </div>
        <div class="blog-item">
            <a href="#">${blog.head}</a>
            <div class="date"><img src="./images/calendar.png" alt=""><p>${blog.date}</p><img src="./images/paper.png" alt="" class="marg"><p>${blog.category}</p></div>
            <p>${blog.tieser}</p>
        </div>
      </div>
    `);
  });
}

function viewMore(){
  blogsCount += step;
  if(blogsCount >= blogs.length){
    blogsCount = blogs.length;
    $(".portfolio-button").hide();
  }
  getBlogs(blogsCount);
}

$(document).ready(function(){
  getBlogs(blogsCount);
  $(".portfolio-button").on("click", viewMore);
});


function toggleSearch(event)
{
    event.stopPropagation();
    event.preventDefault();
    let search = document.getElementById("search-box");
    search.classList.add("active");

}

document.body.onclick = function(e) {
    let search = document.getElementById("search-box");
    search.classList.remove("active");
}

const divs = document.getElementsByClassName("service");
const ser = document.getElementsByClassName("ser");
const img = document.getElementsByClassName("phone");
const but = document.getElementsByClassName("more");
const h = document.getElementsByClassName("hed");

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('mouseover', (event) => {
    divs[i].style.backgroundColor = 'var(--color-green)';
    ser[i].style.color = 'var(--color-white)';
    img[i].src = './images/smartphone_light.png';
    but[i].style.color = 'var(--color-white)';
    but[i].style.border = '2px solid var(--color-white)';
    h[i].style.color = 'var(--color-white)';
  });

  divs[i].addEventListener('mouseout', (event) => {
    divs[i].style.backgroundColor = 'var(--color-white)';
    ser[i].style.color = 'var(--color-black)';
    img[i].src = './images/smartphone_dark.png'
    but[i].style.color = 'var(--color-black)';
    but[i].style.border = '2px solid varvar(--color-black)';
    but[i].style.border = '2px solid var(--color-black)';
    h[i].style.color = 'var(--color-black)';
  });
}



