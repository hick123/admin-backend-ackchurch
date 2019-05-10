import { Injectable } from '@angular/core';
import {Member} from '../models/member';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private serverUrl = 'http://locahost:3000/signup';  // URL to web api
  private ngrokurl='http://bdd8484f.ngrok.io/signup';
  private ngrokurlget='http://bdd8484f.ngrok.io/';
  private lo=`http://locahost:3000/signup`;
  private ngrokurlNewMembers='http://bdd8484f.ngrok.io/newmembers';

  constructor(private http: HttpClient) { }
  register(member: Member) {
    return this.http.post(this.ngrokurl, member);
}

  getMembers(){
    return this.http.get(this.ngrokurlget);    
  }
  getNewMembers(){
    return this.http.get(this.ngrokurlNewMembers);    
  }
// register(member: Member): Observable<any> {
//   return this.http.post<Member>(this.serverUrl, member, httpOptions).pipe(map((res: any) => {
//     console.log('post actvitymood',member);
//   }))
// }

}
