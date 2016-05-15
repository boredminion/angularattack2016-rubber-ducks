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

    private _albumsUrl = 'https://ducky-albums.herokuapp.com/'+'albums';
    // private _albumsUrl = 'http://localhost:3000/albums';

    addAlbum(name:string, description:string, user_id:string, albumCover: string, photos:any, tags:any):Observable<Album> {

        let body = JSON.stringify({name: name, description:description, user_id:user_id, albumCover:albumCover, photos: photos, tags: tags});

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this._albumsUrl, body, options)
            .map(this._extractData)
            .catch(this._handleError)
    }
    
    private _extractData(response:Response){
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Response status: ' + response.status);
        }
        let body = response.json();
        return body;
    }

    private _handleError(error:any) {
        let errorMessage = error.message;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}