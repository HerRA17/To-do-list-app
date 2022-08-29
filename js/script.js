function newItem() {
   
 //1. Adding a new item to the list of items:
    // let li = append('<li></li>');
    let inputValue = $('#input').val();
    // const listItem = $(`<li><span>$(inputValue)</span></li>`);
    let li = $('<li>'+inputValue +'</li>')
    // li.appendChild(text);
    
    if(inputValue === '') {
        alert('You must write something!');
        } else {
        // $('#list').append(listItem);
        let list = $('#list').append(li);
        // list.append(li);
    }

//2. Crossing out an item from the list of items:
    function crossOut(){
        // listItem.toggleClass('strike');
        li.toggleClass('strike');
        };
    // listItem.on('dblclick', crossOut());
    li.on('dblclick', function(event) {
        crossOut();
    });
//3(i). Adding the delete button "X": 
    // let crossOutButton = append('<crossOutButton></crossOutButton>');
    crossOutButton = $('<crossOutButton>X</crossOutButton>');
    // crossOutButton.appendChild(document.createTextNode('X'));
    crossOutButton.addClass('grey');
    // li.appendChild(crossOutButton);
    li.append(crossOutButton);    
    // crossOutButton.on('click', deleteListItem());
    crossOutButton.on('click', function (event){
        deleteListItem();
    });
//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem(){
        
    //     listItem.addClass('delete');
    li.addClass('delete');
        }
// 4. Reordering the items: 
    $('#list').sortable();
     $('#input').val('');

};