import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  user;
  id;
  constructor(private _http: Http) { }

  newUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  addQuestion(question) {
    return this._http.post(`/api/questions`, question)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        return response.json();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  retrieveQuestions(callback) {
    this._http.get('/api/questions').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getOne(id, callback) {
    this._http.get('/api/questions/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  addAnswer(id, answer) {
    return this._http.put('/api/questions/' + id, answer)
    .subscribe(
      (response) => {
        console.log('Successful response from the server');
        return response.json();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findAnswer(id, callback) {
    this._http.get('/api/answers/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateAnswer(id, answer, callback) {
    this._http.put('/api/answers/' + id, answer)
    .subscribe (
      (response) => {
        console.log('Successful response from the server');
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
