function CustomerDTO(id,name,age,tp){
    var id=id;
    var name=name;
    var age=age;
    var tp=tp;

    this.setCustometrId =function (id){
        id=id;
    }
    this.getCustomerId =function (){
        return id;
    }
    this.setCustometrName =function (name){
        name=name;
    }
    this.getCustomerName =function (){
        return name;
    }
    this.setCustometrAge =function (age){
        age=age;
    }
    this.getCustomerage =function (){
        return age;
    }
    this.setCustometrTp =function (tp){
        tp=tp;
    }
    this.getCustomerTp =function (){
        return tp;
    }
}