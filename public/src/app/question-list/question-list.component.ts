import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  user;
  questions;
  id;
  constructor(private _mainService: MainService, private _router: Router) {
    this.user = this._mainService.getUser();
    this.getQuestions();
  }

  ngOnInit() {
  }

  getQuestions() {
    this._mainService.retrieveQuestions((questions) => {
      this.questions = questions;
    });
  }

  setId(id) {
    this._mainService.setId(id);
    console.log(id);
  }
}
