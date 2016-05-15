/**
 * Created by pratishshr on 5/14/16.
 */

export class User {

  id: string;
  fullName: string;
  bio: string;
  profilePicture: string;
  username: string;
  counts: Object;

  constructor(user: any){
    this.id = user && user['id'];
    this.fullName = user && user['full_name'];
    this.bio = user && user['bio'];
    this.profilePicture = user && user['profile_picture'];
    this.username = user && user['username'];
    this.counts = user && user['counts'];
  }
}