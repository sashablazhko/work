import { Component } from "@angular/core";

export class Item{
	purchase: string;
	done: boolean;
	price: number;

	constructor(purchase: string, price: number){

		this.purchase = purchase;
		this.price = price;
		this.done = false;
	}
}

@Component({
	selector: "purchase-app",
	templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    name = 'Test';
    age = 25;
	items: Item[] = [
    { purchase: "Bord", done: false, price: 15.9 },
    { purchase: "Prism", done: false, price: 60 },
    { purchase: "Citylight", done: true, price: 22.6 },
    { purchase: "custom", done: false, price:310 }
	];
	addItem(text: string, price: number): void {

		if(text==null || text==undefined || text.trim()=="")
			return;
		if(price==null || price==undefined)
			return;
		this.items.push(new Item(text, price));
	}
}