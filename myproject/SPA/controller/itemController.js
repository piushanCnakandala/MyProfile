// CRUD Operations


//input data to text fields
$("#addItem").click(function () {

    $("#itemTable>tr").off("click"); //of click events

    let itemId = $("#inputItemId").val();
    let itemName = $("#inputItemName").val();
    let itemQuantity = $("#inputQuantity").val();
    let itemPrice= $("#inputItemPrice").val();

    //input data to array
    var itemOB={
        id:itemId,
        name:itemName,
        qty:itemQuantity,
        price:itemPrice

    };
    itemDB.push(itemOB);
    loadAllItems();
    clearInputItemFields()

//return data to the text fields
    $("#itemTable>tr").click(function () {

        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let itemQuantity = $(this).children(":eq(2)").text();
        let itemPrice = $(this).children(":eq(3)").text();


        //set vales for the input fields
        $("#inputItemId").val(itemId);
        $("#inputItemName").val(itemName);
        $("#inputQuantity").val(itemQuantity);
        $("#inputItemPrice").val(itemPrice);

    });


});

//input data to table
function loadAllItems(){
    $("#itemTable").empty();
    for(var i of itemDB){
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.qty}</td><td>${i.price}</td></tr>`
        $("#itemTable").append(raw);
    }
}

//text fields focusing
$("#inputItemId").keydown(function (event) {
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



function clearInputItemFields(){
    $("#inputItemName,#inputItemId,#inputQuantity,#inputItemPrice").val("");
}



// Validations