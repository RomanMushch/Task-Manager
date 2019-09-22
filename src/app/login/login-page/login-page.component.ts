import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/security/user.service";
import {BaseService} from "../../services/tools/base.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginModel = {
    email: null,
    password: null,
    login: true
  };
  constructor(private userSrv: UserService, private baseSrv: BaseService, private router: Router) { }

  ngOnInit() {
    this.baseSrv.setHandleStorageData('token', null);
  }

  onSubmit() {
    if (this.loginModel.email != null && this.loginModel.email != '' && this.loginModel.password != null && this.loginModel.password != '') {
      // console.log(JSON.stringify(this.loginModel))
      this.userSrv.signIn(this.loginModel)
        .subscribe(response => {
          this.baseSrv.setHandleStorageData('token',response['token']);
          this.router.navigate(['/tasks'])
          // console.log(JSON.stringify(response))
      }, error => {
          alert(error.error.message)
        });
    }
  }

}
