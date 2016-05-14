/**
 * Created by Prakash on 5/14/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Album} from  '../../models/AlbumModel';

@Injectable()
export class AlbumCreateService {
    constructor(private http:Http) {
    }

    private _albumsUrl = 'http://bf9d428a.ngrok.io/albums';

    addAlbum(name:string, description:string, user_id:string):Observable<Album> {
        
        let body = JSON.stringify({name: name});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this._albumsUrl, body, options)
            .map(res => <Album> res.json())
            .catch(this._handleError)
    }

    private _handleError(error:any) {
        let errorMessage = error.message;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}