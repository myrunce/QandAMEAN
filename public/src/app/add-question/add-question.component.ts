import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question = {
    question: '',
    description: ''
  };

  constructor(private _mainService: MainService, private _router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this._router.navigateByUrl('/questions');
  }

  onSubmit() {
    this._mainService.addQuestion(this.question);
    this.question = {
      question: '',
      description: ''
    };
    this._router.navigateByUrl('/questions');
  }
}
