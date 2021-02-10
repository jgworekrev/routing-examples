import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { ComponentThreeComponent } from "./component-three/component-three.component";
import { ComponentTwoChildOneComponent } from "./component-two-child-one/component-two-child-one.component";
import { ComponentTwoChildTwoComponent } from "./component-two-child-two/component-two-child-two.component";
import { ComponentTwoComponent } from "./component-two/component-two.component";
import { ConfirmationGuard } from "./confirmation.guard";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserGuard } from "./user.guard";

//https://www.techiediaries.com/routing-angular-router/

const routes: Routes = [
	//empty path redirect
	{ path: "", redirectTo: "componentOne", pathMatch: "full" },
	// { path: "componentOne", component: ComponentOneComponent },
	//guard that prevents route change until confirm
	{ path: "componentOne/something/something", component: ComponentOneComponent, canDeactivate: [ConfirmationGuard] },
	//child routes
	{
		path: "componentTwo",
		component: ComponentTwoComponent,
		children: [
			{ path: "componentTwoChildOne", component: ComponentTwoChildOneComponent },
			{ path: "componentTwoChildTwo", component: ComponentTwoChildTwoComponent },
		],
	},
	//guard that prevents
	{ path: "componentThree", component: ComponentThreeComponent, canActivate: [UserGuard] },
	//named router outlets
	{ path: "routerTwoComponentOne", component: ComponentOneComponent, outlet: "secondary" },
	{ path: "routerTwoComponentTwo", component: ComponentTwoComponent, outlet: "secondary" },
	//wildcard route
	{ path: "**", component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
