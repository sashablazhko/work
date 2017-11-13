import { Input, Component } from "@angular/core";

@Component({
	selector: "child-comp",
	template: `Child: {{userName}} and Child: {{userAge}}`
})
export class ChildComponent{
	@Input()
	userName: string;
	@Input()
	userAge: number;
}