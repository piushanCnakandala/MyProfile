function CustomerDTO(Id,Name,Age,Tp){
    var customerId=Id;
    var customerName=Name;
    var customerAge=Age;
    var customerTp=Tp;

    this.getCustomerId =function (){
        return customerId;
    }

    this.setCustomerId =function (id){
        customerId=id;
    }

    this.getCustomerName =function (){
        return customerName;
    }
    this.setCustomerName =function (name){
        customerName=name;
    }

    this.getCustomerAge =function (){
        return customerAge;
    }
    this.setCustomerAge =function (age){
        customerAge=age;
    }

    this.getCustomerTp =function (){
        return customerTp;
    }
    this.setCustomerTp =function (tp){
        customerTp=tp;
    }
}