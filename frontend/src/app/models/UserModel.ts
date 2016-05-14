/**
 * Created by pratishshr on 5/14/16.
 */

export class User {
  fullName: string;

  constructor(user: any){
    this.fullName = user && user.full_name;
  }
}