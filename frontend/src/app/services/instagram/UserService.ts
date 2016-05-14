/**
 * Created by pratishshr on 5/14/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import {User} from  '../../models/UserModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    private userUrl = `https://api.instagram.com/v1/users/self/?access_token=${localStorage.getItem('ducky_access_token')}`;

    getUserInfo(): Observable<User> {
        return  this.http.get(this.userUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        if(response.status < 200 || response.status >= 300) {
            throw new Error('Response status: ' + response.status);
        }
        debugger;
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errorMessage = error.message;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}