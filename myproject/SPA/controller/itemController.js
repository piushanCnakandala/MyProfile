// CRUD Operations


  //item add

$("#addItem").click(function () {

    $("#itemTable>tr").off("click");

    let itemId = $("#inputItemId").val();
    let itemName = $("#inputItemName").val();
    let itemQuantity = $("#inputQuantity").val();
    let itemPrice= $("#inputItemPrice").val();


   /* var itemOB={
        id:itemId,
        name:itemName,
        qty:itemQuantity,
        price:itemPrice

    };*/

    var itemOB=new ItemDTO(itemId,itemName,itemQuantity,itemPrice);

    itemDB.push(itemOB);
    loadAllItems();
    clearInputItemFields()


    $("#itemTable>tr").click(function () {  //return data to the text fields

        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let itemQuantity = $(this).children(":eq(2)").text();
        let itemPrice = $(this).children(":eq(3)").text();


        $("#inputItemId").val(itemId);    //set vales for the input fields
        $("#inputItemName").val(itemName);
        $("#inputQuantity").val(itemQuantity);
        $("#inputItemPrice").val(itemPrice);

    });


});


//item Update

$("#btnUpdate").click(function (){
    let itemId = $("#inputItemId").val();
    let itemName = $("#inputItemName").val();
    let itemQuantity = $("#inputQuantity").val();
    let itemPrice= $("#inputItemPrice").val();

    for (var i=0;i<itemDB.length;i++){
       itemDB[i].setItemId(itemId);
        itemDB[i].setItemName(itemName);
        itemDB[i].setItemQty(itemQuantity);
        itemDB[i].setItemPrice(itemPrice);

        loadAllItems();
    }
});


// End CRUD Operations

function loadAllItems(){ //input data to table
    $("#itemTable").empty();
    for(var i of itemDB){
        let raw = `<tr><td>${i.getItemId()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td></tr>`
        $("#itemTable").append(raw);
    }
}


$("#inputItemId").keydown(function (event) { //text fields focusing
    if (event.key == "Enter") {
        $("#inputItemName").focus();
    }
});

$("#inputItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputQuantity").focus();
    }
});

$("#inputQuantity").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputItemPrice").focus();
    }
});

   //search Item

$("#btnSearchItem").click(function (){
    var searchId=$("#txtItemSearch").val();
    var response=searchItem(searchId);
    if(response){
        $("#inputItemId").val(response.id);
        $("#inputItemName").val(response.name);
        $("#inputQuantity").val(response.qty);
        $("#inputItemPrice").val(response.price);

    }else {
        clearFields();
        alert("no such a Item");

    }
});

function searchItem(id){
    for(let i =0;i<itemDB.length;i++){
        if(itemDB[i].id==id){
            return itemDB[i];

        }

    }
}

$("#btnClear").click(function (){
    clearFields();
});


function clearInputItemFields(){    //clear input text fiels
    $("#inputItemName,#inputItemId,#inputQuantity,#inputItemPrice").val("");
}



// Validations