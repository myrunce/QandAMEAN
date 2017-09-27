import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._mainService.newUser(this.user);
    this._router.navigateByUrl('/questions');
  }
}
