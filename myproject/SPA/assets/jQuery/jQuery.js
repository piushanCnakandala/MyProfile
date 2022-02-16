/*customer*/

//input data to text fields
$("#addCust").click(function () {
    $("#customerTable>tr").off("click"); //of click events

    let customerName = $("#inputCname").val();
    let customerAge = $("#inputCage").val();
    let customerTp = $("#inputTp").val();
    let customerSalary = $("#inputSalary").val();

//input data to table
    let raw = `<tr><td>${customerName}</td><td>${customerAge}</td><td>${customerTp}</td><td>${customerSalary}</td></tr>`
    $("#customerTable").append(raw);

//clear input text fiels
$("#inputCname,#inputCage,#inputTp,#inputSalary").val("");


//return data to the text fields
    $("#customerTable>tr").click(function () {
        let customerName = $(this).children(":eq(0)").text();
        let customerAge = $(this).children(":eq(1)").text();
        let customerTp = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        //set vales for the input fields
        $("#inputCname").val(customerName);
        $("#inputCage").val(customerAge);
        $("#inputTp").val(customerTp);
        $("#inputSalary").val(customerSalary);
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


/*item*/
//input data to text fields
$("#addItem").click(function () {

    $("#itemTable>tr").off("click"); //of click events

    let itemName = $("#inputItemName").val();
    let itemPrice = $("#inputPrice").val();
    let itemQuantity = $("#inputQuantity").val();
    let price = $("#inputData").val();

//input data to table
    let raw = `<tr><td>${itemName}</td><td>${itemPrice}</td><td>${itemQuantity}</td><td>${price}</td></tr>`
    $("#itemTable").append(raw);

//clear input text fiels
    $("#inputItemName,#inputPrice,#inputQuantity,#inputData").val("");

//return data to the text fields
    $("#itemTable>tr").click(function () {

        let itemName = $(this).children(":eq(0)").text();
        let itemPrice = $(this).children(":eq(1)").text();
        let itemQuantity = $(this).children(":eq(2)").text();
        let price = $(this).children(":eq(3)").text();


        //set vales for the input fields
        $("#inputItemName").val(itemName);
        $("#inputPrice").val(itemPrice);
        $("#inputQuantity").val(itemQuantity);
        $("#inputData").val(price);

    });


});
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
