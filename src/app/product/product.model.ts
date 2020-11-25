export class Product {
  id?: string;
  name: string;
  desc: string;
  price: number;

  constructor(id: string, name: string, desc: string, price: number) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}
