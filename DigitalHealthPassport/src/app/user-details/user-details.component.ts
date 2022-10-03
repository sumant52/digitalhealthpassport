import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user/search-user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdata: any;

  constructor(private searchuserservice: SearchUserService) { }

  logout(){
    localStorage.clear();
  }

  ngOnInit() {
    this.searchuserservice.approvalStageMessage.subscribe((data: any) => {
      this.userdata = data;
  console.log('userdata1',JSON.stringify(data));
      })
  }

}
