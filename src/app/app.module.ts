import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { HomeComponent } from "./home/home.component";
import { HomeChildComponent } from "./home/home-child.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroesChildComponent } from "./heroes/heroes-child.component";


@NgModule({
	imports: [BrowserModule,
	 					FormsModule,
	 					RouterModule.forRoot(routes)
	 ],
	declarations: [AppComponent, 
								HomeComponent, 
								HomeChildComponent,
								HeroesComponent,
								HeroesChildComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule{}
