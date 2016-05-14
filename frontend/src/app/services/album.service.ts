/**
 * Created by pratishshr on 5/14/16.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, URLSearchParams} from '@angular/http';

import {Album} from  '../models/AlbumModel';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(private http:  Http) {}
    album: Album;

    private albumUrl = `http://localhost:7000/albums`;

    listAll(): Observable<Album> {
        // var url = this.albumUrl;
        // return  this.jsonp.get(url)
        //     .map(this.extractData)
        //     .catch(this.handleError);
        // debugger;
        // return this.http.get(this.albumUrl)
        //     .map(this.extractData)
        //     .catch(this.handleError);
        var response =  this.http.get(this.albumUrl)
            .map(res => <Album[]> res.json())
            .catch(this.handleError);
        console.log(response)
        return response;
    }

    createAlbum(){

    }

    private extractData(response: Response) {
        if(response.status < 200 || response.status >= 300) {
            throw new Error('Response status: ' + response.status);
        }
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: any) {
        let errorMessage = error.message;
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}