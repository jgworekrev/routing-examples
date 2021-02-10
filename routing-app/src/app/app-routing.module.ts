import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { ComponentThreeComponent } from "./component-three/component-three.component";
import { ComponentTwoComponent } from "./component-two/component-two.component";

const routes: Routes = [
	{ path: "", component: ComponentOneComponent },
	{ path: "two", component: ComponentTwoComponent },
	{ path: "three", component: ComponentThreeComponent },

	//Should probably show a 404 page here
	//don't need pathmatch on empty string
	{ path: "**", redirectTo: "three" },
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
