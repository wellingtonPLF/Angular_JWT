import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageUtil {

    constructor() { }
  
    getToken(token: string): string | null {
        return localStorage.getItem(token);
    }
  
    setToken(token: string, value: string | undefined): void{
        if (value != undefined){
            localStorage.setItem(token, value);
        }
    }
  
    removeToken(token: string| undefined): void {
        if (token != undefined){
            localStorage.removeItem(token);
            localStorage.clear();
        }
    }
}