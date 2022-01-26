
  /*hide order part  and item part*/
document.getElementById("ItemPage").style.setProperty("Display","none","important");
document.getElementById("Order Page").style.setProperty("Display","none","important");

 /*click event*/
document.getElementById("click-Home").addEventListener("click",function (){
    document.getElementById("HomePage").style.setProperty("Display","flex","important");
    document.getElementById("ItemPage").style.setProperty("Display","none","important");
    document.getElementById("Order Page").style.setProperty("Display","none","important");
});