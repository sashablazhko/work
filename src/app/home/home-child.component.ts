import { Input, Component } from "@angular/core";

@Component({
	selector: "child-comp",
	template: `Child: {{userName}} and Child: {{userAge}}`
})
export class HomeChildComponent{
	@Input()
	userName: string;
	@Input()
	userAge: number;
}