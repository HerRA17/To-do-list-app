function newItem() {
   
 //1. Adding a new item to the list of items:

    let li = append('<li></li>');
    let inputValue = $('#input').val();
    const listItem =$(`<li><span>$(inputValue)</span></li>`);
    li.appendChild(text);
    
    if(inputValue === '') {
        alert('You must write something!');
        } else {
     $('#list').append(listItem);
    }

//2. Crossing out an item from the list of items:

function crossOut(){
    listItem.toggleClass('strike');
};
    listItem.on('dblclick', crossOut());
    crossOutButton.on('click',deleteListItem);
    
//3(i). Adding the delete button "X": 

let crossOutButton = append('<crossOutButton></crossOutButton>');
    crossOutButton.appendChild(document.createTextNode('X'));
    li.appendChild(crossOutButton);
    crossOutButton.on('click', deleteListItem);
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

function deleteListItem(){
    listItem.addClass('delete');
}
// 4. Reordering the items: 
$('#list').sortable();
$('#input').val('')

}