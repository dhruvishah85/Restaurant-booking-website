let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav ul li a');
var searchContainer = document.getElementById("search-box");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>offset && top<(offset+height)){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    searchContainer.style.top="7%";
    searchContainer.style.position="fixed";
  } else {
    searchContainer.style.top="50%";
  }
};

function toggleSearchBar() {
    var searchContainer = document.getElementById("search-box");
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  }