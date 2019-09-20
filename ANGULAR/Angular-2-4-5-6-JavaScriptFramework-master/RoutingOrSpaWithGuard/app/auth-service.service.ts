import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {

  loggedIn = true;
  isAuthenticated(): Promise<boolean> {
    console.log('Auth Guard Is Calling....');
    const promise: Promise<boolean> = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 2000);
      }
    );
    return promise;
  }
}
