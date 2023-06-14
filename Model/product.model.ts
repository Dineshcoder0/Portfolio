export class Product {
  productId: any;
  productName : any;
  description:any;
  price:any;
  imgUrl:any;

 

  Product(prodId:number,productName : string,description:string,price:number,imgUrl:string)
  {
    this.productId = prodId;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }



}

