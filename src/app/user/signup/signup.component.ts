import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName : any;
  public lastName : any;
  public mobile:any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(public appService:AppService,public router:Router,public toastr:ToastsManager,vcr:ViewContainerRef) { }

  ngOnInit() {
  }

  public goToSignIn : any = ()=>{

    
  }

}
