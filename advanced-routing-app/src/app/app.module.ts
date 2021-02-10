import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentOneComponent } from "./component-one/component-one.component";
import { ComponentTwoComponent } from "./component-two/component-two.component";
import { ComponentThreeComponent } from "./component-three/component-three.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ComponentTwoChildOneComponent } from "./component-two-child-one/component-two-child-one.component";
import { ComponentTwoChildTwoComponent } from "./component-two-child-two/component-two-child-two.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [AppComponent, ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent, NavbarComponent, ComponentTwoChildOneComponent, ComponentTwoChildTwoComponent, NotFoundComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
