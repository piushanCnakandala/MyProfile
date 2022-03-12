
generateOrderId();
setDate();

var  selectedCustomerId;
var  selectedItemId;

$("#btnAddToCart").click(function (){
addCart();
});

//////////////-load customer and item ids /////////////////////////////////////



$("#idCustCmb").change(function (e){
     selectedCustomerId =$('#idCustCmb').find(":selected").text();
    selectedCustomer(selectedCustomerId);
});


$("#idItemCmb").change(function (e){
     selectedItemId =$('#idItemCmb').find(":selected").text();
    selectedItem(selectedItemId);
});

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


/* load item ids to cmb (item)*/
function loadAllItemIds() {
    $("#idItemCmb").empty();

    let itemHint=`<option disabled selected> Select Item ID</option>`;

    $("#idItemCmb").append(itemHint);

    for (let i in itemDB) {
        let option = `<option value="${itemDB[i].getItemId()}">${itemDB[i].getItemId()}</option>`
        $("#idItemCmb").append(option);
    }
}
/*load item data to text fields*/
function selectedItem(ItemId){
    for (const i in itemDB){
        if (itemDB[i].getItemId()==ItemId) {
            let element = itemDB[i];
            $("#txtitemName").val(element.getItemName());
            $("#txtqtyOnHand").val(element.getItemQty());
            $("#txtprice").val(element.getItemPrice());
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////

//generate order Id

function generateOrderId() {

    let index = orderDb.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = orderDb[orderDb.length - 1].getOrderId();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#oIdItxt").val("O00-001");
    } else if (temp <= 9) {
        $("#oIdItxt").val("O00-00" + temp);
    } else if (temp <= 99) {
        $("#oIdItxt").val("O00-0" + temp);
    } else {
        $("#oIdItxt").val("O00-" + temp);
    }

}

//set date

function setDate() {
    let d = new Date();
    let dd = d.toISOString().split("T")[0].split("-");
    $("#txtDate").val(dd[0]+"-"+dd[1]+"-"+dd[2]);
    $("#txtDate").text(dd[0]+"-"+dd[1]+"-"+dd[2]);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// add to cart

var fullTotal =0;

function addCart(){
    let itemCode =selectedItemId;
    let itemName=$("#txtitemName").val();
    let qtyOnHand=$("#txtqtyOnHand").val();
    let price=$("#txtprice").val();
    let orderQty=$("#oQty").val();
    let total= 0;

    if (qtyOnHand >= orderQty) {
        qtyOnHand = qtyOnHand - orderQty;
    }else{
        alert("Enter Valid QTY");
        $("#oQty").val("");
        return;
    }

    //updateing qty

    for (let i = 0; i < itemDB.length; i++) {
        if (id == itemDB[i].getItemId()) {
            itemDB[i].setItemQty(qtyOnHand);
        }
    }

    let newQty = 0;
    let newTotal= 0;

    if (checkDuplicates(id)==-1) {
        total = orderQty * price;
        fullTotal = fullTotal + total;
        let row =
            `<tr><td>${itemCode}</td><td>${itemName}</td><td>${price}</td><td>${orderQty}<td>${total}</td></tr>`;
        $("#orderTbody").append(row);
        $("#lblTotal").text(fullTotal+" LKR");
        alert("23445");
        clearInputItems();

    }else{

        let rowNo = checkDuplicates(id);
        newQty = orderQty;
        let oldQty = parseInt($($('#orderTbody>tr').eq(rowNo).children(":eq(3)")).text());
        let oldTotal = parseInt($($('#orderTbody>tr').eq(rowNo).children(":eq(4)")).text());

        fullTotal = fullTotal-oldTotal;
        newQty = parseInt(oldQty) + parseInt(newQty) ;
        newTotal = newQty * price;
        fullTotal = fullTotal + newTotal;

        //Update row
        $('#orderTbody tr').eq(rowNo).children(":eq(3)").text(newQty);
        $('#orderTbody tr').eq(rowNo).children(":eq(4)").text(newTotal);

        $("#lblFullTotal").text(fullTotal+" LKR");
        alert("test");
        clearInputItems();
    }


}


/* Check Duplicate Item */
function checkDuplicates(itemId) {
    for (let i = 0; i < $("#orderTbody> tr").length; i++) {
        if (itemId == $('#orderTbody').children().eq(i).children().eq(0).text()) {
            alert(i);
            return i;
        }

    }
    return -1;
}

/* Clear Input Field on Selected Item Area */
function clearInputItems() {
    $("#itemIdCmb").val("");
    $("#itemNameO").val("");
    $("#qtyOnHandO").val("");
    $("#priceO").val("");
    $("#oQty").val("");
}