function newItem() {
    //1. Adding a new item to the list of items:
    let li = append('<li></li>');
//    let li = document.createElement("li");
    let inputValue = $('#input').val();
//    let inputValue = document.getElementById("input").value;
//    let text = document.createTextNode(inputValue);
    li.appendChild(text);
//    li.appendChild(text);

//    if (inputValue === '') {
    if(inputValue === '') {
//      alert("You must write something!");
        alert('You must write something!');
//    } else {
    } else {
//      let list = document.querySelector('#list');
        $('#list').appendChild(li);
//      list.appendChild(li);
    }
//2. Crossing out an item from the list of items:
// function crossOut() {
    function crossOut(){
    // li.classList.toggle("strike");
    li.toggleClass('strike');
}

// li.addEventListener("dblclick",crossOut);
    li.on('dblclick', crossOut() {
        li.toggleClass('strike');
    });

//3(i). Adding the delete button "X": 

// let crossOutButton = document.createElement("crossOutButton");
    let crossOutButton = append('<crossOutButton></crossOutButton><');
// crossOutButton.appendChild(document.createTextNode("X"));
    crossOutButton.appendChild(document.createTextNode('X'));
// li.appendChild(crossOutButton);
    li.appendChild(crossOutButton);
// crossOutButton.addEventListener("click", deleteListItem);
    crossOutButton.on('click', deleteListItem);
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

// function deleteListItem(){
    function deleteListItem(){
//     li.classList.add("delete")
        li.addClass('delete');
}
// 4. Reordering the items: 
$('#list').sortable();

}