import { Component } from "@angular/core";

@Component({
	selector: "app-vote-taker",
	template: `
    <h2>Make your vote</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let voter of voters"
      [name]="voter"
      (onVoted)="onVoted($event)">
    </app-voter>
  `
})
export class HeroesComponent {
	agreed = 0;
	disagreed = 0;
	voters = ['Borad', 'Citilight', 'custom'];

	onVoted(agreed: boolean) {
		agreed ? this.agreed++ : this.disagreed++;
	}
}