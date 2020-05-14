function add(e){
    e = e || window.event;
    e = e.target || e.scrElement;
    alert(e.id);
}