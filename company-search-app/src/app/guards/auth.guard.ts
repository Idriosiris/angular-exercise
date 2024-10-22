import { inject } from '@angular/core';
import { Router, CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const intendedUrl = state.url;

  console.log('AuthGuard - Intended URL:', intendedUrl);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login'], { queryParams: { returnUrl: intendedUrl } });
    return false;
  }
};
