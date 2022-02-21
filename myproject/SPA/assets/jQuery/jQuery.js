/*customer*/

//input data to text fields
$("#addCust").click(function () {
    $("#customerTable>tr").off("click"); //of click events

    let customerId = $("#inputCname").val();
    let customerName = $("#inputCage").val();
    let customerAge = $("#inputTp").val();
    let customerTp = $("#inputSalary").val();

   //input data to array
    var customerOB={
        id:customerId,
        name:customerName,
        age:customerAge,
        tp:customerTp

    };
    customerDB.push(customerOB);
    loadAllCustomer();
    clearFields();

//return data to the text fields
    $("#customerTable>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAge = $(this).children(":eq(2)").text();
        let customerTp = $(this).children(":eq(3)").text();

        //set vales for the input fields
        $("#inputCname").val(customerId);
        $("#inputCage").val(customerName);
        $("#inputTp").val(customerAge);
        $("#inputSalary").val(customerTp);
    });

    //remove row
    $("#customerTable>tr").dblclick(function () {
        $(this).remove();
    });

});

//text fields focusing
$("#inputCname").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputCage").focus();
    }
});

$("#inputCage").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputTp").focus();
    }
});

$("#inputTp").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputSalary").focus();
    }
});

//input data to table
function loadAllCustomer(){
    $("#customerTable").empty();
for(var i of customerDB){
    let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.age}</td><td>${i.tp}</td></tr>`
    $("#customerTable").append(raw);
}
}

//search customer

$("#btnCustomerSearch").click(function (){
var searchId=$("#txtCustomerSearch").val();
var response=searchCustomer(searchId);
if(response){
    $("#inputCname").val(response.id);
    $("#inputCage").val(response.name);
    $("#inputTp").val(response.age);
    $("#inputSalary").val(response.tp);

}else {
    clearFields();
    alert("no such a customer");

}
});

function searchCustomer(id){
    for(let i =0;i<customerDB.length;i++){
        if(customerDB[i].id==id){
            return customerDB[i];

        }

    }
}

//clear input text fiels
function clearFields(){
    $("#inputCname,#inputCage,#inputTp,#inputSalary").val("");
}





/*item*/

//input data to text fields
$("#addItem").click(function () {

    $("#itemTable>tr").off("click"); //of click events

    let itemId = $("#inputItemName").val();
    let itemName = $("#inputPrice").val();
    let itemQuantity = $("#inputQuantity").val();
    let itemPrice= $("#inputData").val();

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
        $("#inputItemName").val(itemId);
        $("#inputPrice").val(itemName);
        $("#inputQuantity").val(itemQuantity);
        $("#inputData").val(itemPrice);

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
$("#inputItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputPrice").focus();
    }
});

$("#inputPrice").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputQuantity").focus();
    }
});

$("#inputQuantity").keydown(function (event) {
    if (event.key == "Enter") {
        $("#inputData").focus();
    }
});

function clearInputItemFields(){
    $("#inputItemName,#inputPrice,#inputQuantity,#inputData").val("");
}