/**
 * Created by pratishshr on 5/14/16.
 */
import {Album} from './AlbumModel';

export class DuckyUser {

    id:string;
    albums: Album[];

    constructor(duckyUser: any) {
        this.id = duckyUser && duckyUser['id'];
    }
}