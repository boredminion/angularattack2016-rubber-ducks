/**
 * Created by pratishshr on 5/14/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';

import {Album} from  '../../models/AlbumModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(private http:Http) {
    }

    private userUrl = 'http://bf9d428a.ngrok.io/albums';

    fetch():Observable<Album[]> {
        var url = this.userUrl;
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