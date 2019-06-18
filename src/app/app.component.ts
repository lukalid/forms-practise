import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', { static: false }) form: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'male';

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: this.defaultQuestion,
    //   questionAnswer: this.answer,
    //   gender: this.defaultGender
    // });

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
