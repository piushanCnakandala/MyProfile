function ItemDTO(id,name,qty,price){
    var id=id;
    var name=name;
    var qty=qty;
    var price=price;

    this.setItemId= function (id){
        id=id;
    }
    this.getItemId= function (){
        return id;
    }
    this.setItemName= function (name){
        name=name;
    }
    this.getItemName= function (){
        return name;
    }
    this.setItemQty= function (qty){
        qty=qty;
    }
    this.getItemQty= function (){
        return qty;
    }
    this.setItemPrice= function (price){
        price=price;
    }
    this.getItemPrice= function (){
        return price;
    }
}