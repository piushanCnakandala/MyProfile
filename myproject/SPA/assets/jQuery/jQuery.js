
             /*customer*/

//input data to text fields
$("#addCust").click(function (){
    let customerName =$("#inputCname").val();
    let customerAge =$("#inputCage").val();
    let customerTp =$("#inputTp").val();
    let customerSalary =$("#inputSalary").val();

    //console.log(customerName, customerAge, customerTp ,customerSalary);
  //  console.log(typeof customerName,typeof customerAge,typeof customerTp ,typeof customerSalary);

//input data to table
    let raw=`<tr><td>${customerName}</td><td>${customerAge}</td><td>${customerTp}</td><td>${customerSalary}</td></tr>`
  //  console.log(raw);
    $("#customerTable").append(raw);
//return data to the text fields
    $("#customerTable>tr").click(function(){

        $("#customerTable>tr").off("click"); //of click events

         let customerName= $(this).children(":eq(0)").text();
        let customerAge= $(this).children(":eq(1)").text();
        let customerTp= $(this).children(":eq(2)").text();
        let customerSalary= $(this).children(":eq(3)").text();

        console.log(customerName,customerAge,customerTp,customerSalary);

        //set vales for the input fields
        $("#inputCname").val(customerName);
        $("#inputCage").val(customerAge);
        $("#inputTp").val(customerTp);
        $("#inputSalary").val(customerSalary);

    });


});
  //text fields focusing
$("#inputCname").keydown(function (event){
    if (event.key=="Enter"){
        $("#inputCage").focus();
    }
});

$("#inputCage").keydown(function (event){
    if (event.key=="Enter"){
        $("#inputTp").focus();
    }
});

$("#inputTp").keydown(function (event){
    if (event.key=="Enter"){
        $("#inputSalary").focus();
    }
})


/*item*/

