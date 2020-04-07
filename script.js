function active(){
    var searchBar = document.getElementById('searchBar');

    if(searchBar.value == 'Sök...'){
        searchBar.value = ''
        searchBar.placeholder = 'Sök...'
    }
}

function inactive(){
    var searchBar = document.getElementById('searchBar');

    if(searchBar.value == ''){
        searchBar.value = 'Sök...'
        searchBar.placeholder = ''
    }
}