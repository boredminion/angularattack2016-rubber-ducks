/**
 * Created by pratishshr on 5/14/16.
 */

export class Album {
    id:string;
    name:string;
    description:string;
    user_id:string;
    albumCover:string;
    photos:any;
    tags:any;

    constructor(album:Album) {
        this.id = album.id;
        this.name = album.name;
        this.description = album.description;
        this.user_id = album.user_id;
        this.albumCover = album.photos[0] && album.photos[0]['url'];
        this.photos = album.photos;
    }
}