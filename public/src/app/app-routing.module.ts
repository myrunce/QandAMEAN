import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'questions', component: QuestionListComponent},
  {path: 'newQuestion', component: AddQuestionComponent},
  {path: 'question/:id', component: QuestionComponent},
  {path: 'question/:id/newAnswer', component: AnswerQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
