import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  name = 'Shineness'

  users: UserProfile[] = []

  getName(userId:number) { return this.name; }

  getUsers(userId:number):UserProfile {
    const usersLs = JSON.parse(localStorage['users']);
    const user = usersLs.find((user:UserProfile) => user.id == userId);
    return user;
  }
}
