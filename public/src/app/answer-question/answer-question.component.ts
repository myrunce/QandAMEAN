import { MainService } from '../main.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  question;
  id;
  answer = {
    response: '',
    support: '',
  };

  constructor(private _mainService: MainService, private _router: Router, private _location: Location, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log(params.get('id'));
      this.getQuestion(params.get('id'));
    });
   }

  ngOnInit() {
  }

  getQuestion(id) {
    this._mainService.getOne(id, (question) => {
      this.question = question;
    });
  }

  onSubmit() {
    this._mainService.addAnswer(this.id, this.answer);
    this.answer = {
      response: '',
      support: '',
    };
    this._location.back();
  }

  cancel() {
    this._location.back();
  }
}
