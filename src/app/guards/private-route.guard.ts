import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateRouteGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  return localStorage['students'] ? true : (router.navigate(['/login']))
};
