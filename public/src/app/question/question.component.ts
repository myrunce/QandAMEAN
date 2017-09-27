import { MainService } from './../main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question;
  id;
  answer;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this._mainService.setId(this.id);
      this.getQuestion();
    });

   }

  ngOnInit() {
  }

  getQuestion() {
    this._mainService.getOne(this.id, (question) => {
      this.question = question;
    });
  }

  like(id) {
    this._mainService.findAnswer(id, (theAnswer) => {
      this.answer = theAnswer[0];
      this.answer.likes++;
      console.log(this.answer);
      this._mainService.updateAnswer(id, this.answer, (answer) => {
        console.log('SENT ANSWER');
      });
      this.getQuestion();
    });
  }
}
