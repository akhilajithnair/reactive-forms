import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms.frontend';
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit(myForm: FormGroup) {
    console.log('form valid: ', myForm.valid);
    console.log('name value: ', myForm.value.name);
    console.log('email value: ', myForm.value.email);
    console.log('message value: ', myForm.value.message);

  }
}
