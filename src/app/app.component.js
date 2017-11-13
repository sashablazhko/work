var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var Item = /** @class */ (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
export { Item };
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Bord", done: false, price: 15.9 },
            { purchase: "Prism", done: false, price: 60 },
            { purchase: "Citylight", done: true, price: 22.6 },
            { purchase: "custom", done: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    };
    AppComponent = __decorate([
        Component({
            selector: "purchase-app",
            templateUrl: "./app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map