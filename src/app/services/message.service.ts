import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Message} from "../models/message";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiUrl = 'http://localhost:3000/charlene-message';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Message> {
    return this.http.get<Message>(this.apiUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  add(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  removeById(id: number): Observable<Message> {
    return this.http.delete<Message>(this.apiUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(messageToEdit: Message):Observable<Message> {
    return this.http.put<Message>(this.apiUrl + '/' + messageToEdit.id, messageToEdit, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
