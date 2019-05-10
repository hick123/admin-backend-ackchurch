import { Component, OnInit, OnDestroy } from '@angular/core';
import { MemberService} from '../../_services/member.service'
import { map,tap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members=[];
 newMembers="";
 

  constructor(  private memberService: MemberService) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    this.getMembers();
    this.getNewMembers();
  }
  
  getMembers(){
    this.memberService.getMembers().subscribe((data:any)=>{
      this.members=[];
      this.members=data;
      console.log(data);
    })
      
  }
  getNewMembers(){
    this.memberService.getNewMembers().subscribe((data:any)=>{
      this.newMembers = data;
        console.log(data);
    })
      
  }


    OnDestroy(): void {
        document.body.className = '';
}

}
