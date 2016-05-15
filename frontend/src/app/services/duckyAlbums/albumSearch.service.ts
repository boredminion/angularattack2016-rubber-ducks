import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Album} from "../../models/AlbumModel";
import { Http, Response} from '@angular/http';


@Injectable()
export class AlbumSearchService{

    constructor(private http:  Http) {}
    album: Album;


    getAlbumSearchResults(tagName:string):Observable<Album[]>{
        var searchResult = 'https://ducky-albums.herokuapp.com/albums/search?q='+tagName;

        return this.http.get(searchResult)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getAlbumDetail(userId:string):Observable<Album>{
        var searchAlbumResult = 'https://ducky-albums.herokuapp.com/albums/'+userId;
        return this.http.get(searchAlbumResult)
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