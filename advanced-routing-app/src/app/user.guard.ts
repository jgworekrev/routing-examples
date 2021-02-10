import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserServiceService } from "./user-service.service";

@Injectable({
	providedIn: "root",
})
export class UserGuard implements CanActivate {
	constructor(private userService: UserServiceService, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!this.userService.userId) {
			console.log("NOT LOGGED IN");
			return this.router.parseUrl("/componentOne");
		}
		return true;
	}
}
