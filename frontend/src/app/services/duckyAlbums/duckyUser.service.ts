/**
 * Created by pratishshr on 5/14/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {DuckyUser} from  '../../models/DuckyUserModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DuckyUserService {
    constructor(private http:Http) {
    }

    private userUrl = 'http://ducky-albums.herokuapp.com/users';

    fetchById(id: string):Observable<DuckyUser> {
        var url = this.userUrl + '/1';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response:Response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Response status: ' + response.status);
        }
        let body = response.json();
        return body || [];
    }

    private handleError(error:any) {
        let errorMessage = error.message;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}