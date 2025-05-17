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