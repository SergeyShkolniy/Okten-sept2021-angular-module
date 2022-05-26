import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {IComment, ICommentDetails} from '../interfaces';
import {urls} from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }

  getId(id: string): Observable<ICommentDetails> {
    return this.httpClient.get<ICommentDetails>(`${urls.comments}/${id}`)
  }
}
