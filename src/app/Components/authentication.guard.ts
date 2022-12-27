import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice:AuthService,private router:Router ) { }
  canActivate():boolean{
    if (!this.Authguardservice.gettoken()) {
      this.router.navigateByUrl("/login");
    }
    return this.Authguardservice.gettoken();
  }

  
}
