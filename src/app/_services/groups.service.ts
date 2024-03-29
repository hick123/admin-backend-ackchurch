import { Injectable } from '@angular/core';
import { ChurchGroups } from '../models/churchgroups';
import { MemberChurchGroups } from '../models/memberchurchgroup';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { from } from 'rxjs';
export interface Person {
  id: string;
  isActive: boolean;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  disabled?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private serverUrl = 'http://locahost:3000/signup';  // URL to local api
  private ngrokurlcreate='http://bdd8484f.ngrok.io/groups/createchurchgroups';
  private ngrokurlAddGroup='http://bdd8484f.ngrok.io/groups/addtochurchgroup';
  private ngrokurlgetGroups='http://bdd8484f.ngrok.io/groups/getchurchgroups';
  private lo=`http://locahost:3000/signup`;

  constructor(private http: HttpClient) { }

  createChurchGroup(churchGroups: ChurchGroups) {
    return this.http.post(this.ngrokurlcreate, churchGroups);
}
// enrolling members to churchgroups
addMembersToGroup(memberChurchGroup: MemberChurchGroups) {
  return this.http.post(this.ngrokurlAddGroup, memberChurchGroup);
}

  getChurchGroups(){
    return this.http.get(this.ngrokurlgetGroups);    
  }
  getPeople(){
    return [
       {
           'id': '5a15b13c36e7a7f00cf0d7cb',
           'index': 2,
           'isActive': true,
           'picture': 'http://placehold.it/32x32',
           'age': 23,
           'name': 'Karyn Wright',
           'gender': 'female',
           'company': 'ZOLAR',
           'email': 'karynwright@zolar.com',
           'phone': '+1 (851) 583-2547'
       },
       {
           'id': '5a15b13c2340978ec3d2c0ea',
           'index': 3,
           'isActive': false,
           'picture': 'http://placehold.it/32x32',
           'age': 35,
           'name': 'Rochelle Estes',
           'disabled': true,
           'gender': 'female',
           'company': 'EXTRAWEAR',
           'email': 'rochelleestes@extrawear.com',
           'phone': '+1 (849) 408-2029'
       },
       {
           'id': '5a15b13c663ea0af9ad0dae8',
           'index': 4,
           'isActive': false,
           'picture': 'http://placehold.it/32x32',
           'age': 25,
           'name': 'Mendoza Ruiz',
           'gender': 'male',
           'company': 'ZYTRAX',
           'email': 'mendozaruiz@zytrax.com',
           'phone': '+1 (904) 536-2020'
       },
       {
           'id': '5a15b13cc9eeb36511d65acf',
           'index': 5,
           'isActive': false,
           'picture': 'http://placehold.it/32x32',
           'age': 39,
           'name': 'Rosales Russell',
           'gender': 'male',
           'company': 'ELEMANTRA',
           'email': 'rosalesrussell@elemantra.com',
           'phone': '+1 (868) 473-3073'
       },
       {
           'id': '5a15b13c728cd3f43cc0fe8a',
           'index': 6,
           'isActive': true,
           'picture': 'http://placehold.it/32x32',
           'age': 32,
           'name': 'Marquez Nolan',
           'gender': 'male',
           'company': 'MIRACLIS',
           'disabled': true,
           'email': 'marqueznolan@miraclis.com',
           'phone': '+1 (853) 571-3921'
       },
       {
           'id': '5a15b13ca51b0aaf8a99c05a',
           'index': 7,
           'isActive': false,
           'picture': 'http://placehold.it/32x32',
           'age': 28,
           'name': 'Franklin James',
           'gender': 'male',
           'company': 'CAXT',
           'email': 'franklinjames@caxt.com',
           'phone': '+1 (868) 539-2984'
       },
       {
           'id': '5a15b13cc3b9381ffcb1d6f7',
           'index': 8,
           'isActive': false,
           'picture': 'http://placehold.it/32x32',
           'age': 24,
           'name': 'Elsa Bradley',
           'gender': 'female',
           'company': 'MATRIXITY',
           'email': 'elsabradley@matrixity.com',
           'phone': '+1 (994) 583-3850'
       },
       {
           'id': '5a15b13ce58cb6ff62c65164',
           'index': 9,
           'isActive': true,
           'picture': 'http://placehold.it/32x32',
           'age': 40,
           'name': 'Pearson Thompson',
           'gender': 'male',
           'company': 'EZENT',
           'email': 'pearsonthompson@ezent.com',
           'phone': '+1 (917) 537-2178'
       },
       {
           'id': '5a15b13c90b95eb68010c86e',
           'index': 10,
           'isActive': true,
           'picture': 'http://placehold.it/32x32',
           'age': 32,
           'name': 'Ina Pugh',
           'gender': 'female',
           'company': 'MANTRIX',
           'email': 'inapugh@mantrix.com',
           'phone': '+1 (917) 450-2372'
       }]
 }
}
