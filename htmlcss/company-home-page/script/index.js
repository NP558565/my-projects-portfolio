const searchBar = document.getElementById('search-input');
const clearText = () => {
    if (event.keyCode === 13){
        event.preventDefault();
        searchBar.value = "";
    }
}
searchBar.addEventListener('keyup', clearText);