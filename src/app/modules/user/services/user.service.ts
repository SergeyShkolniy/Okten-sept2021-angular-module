import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {urls} from '../../../constants';
import {HttpClient} from '@angular/common/http';
import {IUser, IUserDetails} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getId(id: string): Observable<IUserDetails> {
    return this.httpClient.get<IUserDetails>(`${urls.users}/${id}`)
  }
}
