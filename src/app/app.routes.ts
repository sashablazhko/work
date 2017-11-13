import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeroesComponent } from "./heroes/heroes.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "heroes",
        component: HeroesComponent
    }
    // {
    //     path: "phrase/:id",
    //     component: PhraseDetailsComponent
    // }

];