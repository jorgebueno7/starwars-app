import { Injectable } from '@angular/core';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly usersMock:string = "../assets/data/users.json";
  users: Users[] = []

  constructor() {
    fetch(this.usersMock).then(res => res.json())
    .then(json => {
      this.users = json;
    });
  }
  public login(email:string, password:string): Users | null {
    let aux = null;
    for(let u of this.users) {
      if(u.email === email && u.password === password){
        aux = u;
        break;
      }
    }
    return aux;
  }
}
