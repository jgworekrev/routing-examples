import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
	selector: "app-component-one",
	templateUrl: "./component-one.component.html",
	styleUrls: ["./component-one.component.css"],
})
export class ComponentOneComponent implements OnInit {
	constructor(public userService: UserServiceService) {}
	onBeforeUnload() {
		console.log("hey the unload ran");
	}

	ngOnInit(): void {}
}
