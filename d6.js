class product {
    constructor(product_code, product_name, stock, price) {
        this.product_code = product_code;
        this.product_name = product_name;
        this.stock = stock;
        this.price = price;

    }
    get stockvalue() {
        return `Available stock is + ${this.stock}`;
    }

    display() {
        console.log("product code:" + e.product_code +"  "+ "product name:" +"  "+ e.product_name + "  "+"stock : " + e.stock +"  "+ "price : " + e.price);
    }


}
class activity extends product {

    constructor(product_code, product_name, stock, price, customername, productcode, product_sold, total_amt) {
        super(product_code, product_name, stock, price);
        this.customername = customername;
        this.productcode = productcode;
        this.product_sold = product_sold;
        this.total_amt = total_amt;
    }
    sales(productcode, product_sold, stock, total_amnt, price) {
        var temp = 0;
        temp = this.stock - this.product_sold;
        if (this.stock == 0) {
            console.log(" product out of stock");
        }
        else if (temp <= 0) {
            console.log("oops no stock , available stock is:" + this.stock)
            this.stock = 0;
        }
        else {
            console.log("thanks for purchasing , visit again");
            this.total_amt = this.price * this.product_sold;
            console.log("the  total amount is:" + this.total_amt);
        }

    }
    print() {
        super.display();
        console.log(("Activity details:customer name:" + "  " + e.customername +"  "+ "productcode" + " " + e.productcode +"  "+ "product sold" + "  " + e.product_sold +"  "));
    }
}
var e = new activity(1, "maaza", 10, 10, "Harishmitha", 1, 10, 0);
e.print();
e.sales(this.productcode, this.product_sold, this.stock);
