import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private endPoint = 'https://jsonplaceholder.typicode.com/users'

    constructor(private http: HttpClient) {}

    getUsersFromApi(): Observable<User[]> {
        return this.http.get<User[]>(this.endPoint)
    }
}
