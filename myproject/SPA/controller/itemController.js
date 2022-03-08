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

});


//item Update

$("#btnItemUpdate").click(function (){
    let itemId = $("#inputItemId").val();
    let itemName = $("#inputItemName").val();
    let itemQuantity = $("#inputQuantity").val();
    let itemPrice= $("#inputItemPrice").val();

    for (var i=0;i<itemDB.length;i++) {
        if (itemDB[i].getItemId()== itemId) {

            itemDB[i].setItemName(itemName);
            itemDB[i].setItemQty(itemQuantity);
            itemDB[i].setItemPrice(itemPrice);

            loadAllItems();
            clearFields();
            $("#btnItemUpdate").prop('disabled', true);
        }
    }
});


// End CRUD Operations

//btn clear

$("#btnClear").click(function (){
    clearFields();
})

function loadAllItems(){ //input data to table
    $("#itemTable").empty();
    for(var i of itemDB){
        let raw = `<tr><td>${i.getItemId()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td></tr>`
        $("#itemTable").append(raw);
        bindItemRow();

    }
}


function bindItemRow(){
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
        $("#inputItemId").val(response.getItemId());
        $("#inputItemName").val(response.getItemName());
        $("#inputQuantity").val(response.getItemQty());
        $("#inputItemPrice").val(response.getItemPrice());

    }else {
        clearFields();
        alert("no such a Item");

    }
});

function searchItem(id){
    for(let i =0;i<itemDB.length;i++){
        if(itemDB[i].getItemId()==id){
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