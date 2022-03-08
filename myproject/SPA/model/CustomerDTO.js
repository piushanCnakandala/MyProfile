function CustomerDTO(id,name,age,tp){
    var id=id;
    var name=name;
    var age=age;
    var tp=tp;

    this.setCustomerId =function (id){
        id=id;
    }
    this.getCustomerId =function (){
        return id;
    }
    this.setCustomerName =function (name){
        name=name;
    }
    this.getCustomerName =function (){
        return name;
    }
    this.setCustomerAge =function (age){
        age=age;
    }
    this.getCustomerAge =function (){
        return age;
    }
    this.setCustomerTp =function (tp){
        tp=tp;
    }
    this.getCustomerTp =function (){
        return tp;
    }
}