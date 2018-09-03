import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {
  }

  // builds the start of canActivate method
  canActivate(
              // current route info
              next: ActivatedRouteSnapshot,
              // router state info
              state: RouterStateSnapshot)
              // returns either types
              : Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path;
    if (isNaN(id) || id<1) {
      alert("Invalid product id " + id);
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
