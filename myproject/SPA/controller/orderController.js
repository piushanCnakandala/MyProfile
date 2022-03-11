

$("#idCustCmb").change(function (e){
    let selectedCustomerId =$('#idCustCmb').find(":selected").text();
    selectedCustomer(selectedCustomerId);
})

             /* load customer ids to cmb (customer)*/
function loadAllCustomerIds() {
    $("#idCustCmb").empty();

     let cusHint=`<option disabled selected> Select Customer ID</option>`;

    $("#idCustCmb").append(cusHint);

    for (let i in customerDB) {
        let option = `<option value="${customerDB[i].getCustomerId()}">${customerDB[i].getCustomerId()}</option>`
        $("#idCustCmb").append(option);
    }
}
             /*load customer data to text fields*/
function selectedCustomer(CustomerId){
    for (const i in customerDB){
        if (customerDB[i].getCustomerId()==CustomerId) {
            let element = customerDB[i];
            $("#txtcusName").val(element.getCustomerName());
            $("#txtAge").val(element.getCustomerAge());
            $("#txtTp").val(element.getCustomerTp());
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////





/*function generateOrderId() {

    let index = orderDb.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = orderDb[orderDb.length - 1].getItemId();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#inputItemId").val("I00-001");
    } else if (temp <= 9) {
        $("#inputItemId").val("I00-00" + temp);
    } else if (temp <= 99) {
        $("#inputItemId").val("I00-0" + temp);
    } else {
        $("#inputItemId").val("I00-" + temp);
    }

}*/
