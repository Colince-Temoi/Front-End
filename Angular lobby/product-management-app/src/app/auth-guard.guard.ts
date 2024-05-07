import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  // return true;
  alert('You are not allowed to view this page');
  return false;
};
