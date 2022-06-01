import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms.frontend';
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: 'akhil',
      email: '',
      message: ''
    });
  }

  onSubmit(myForm: FormGroup) {
    console.log('form valid: ', myForm.valid);
    console.log('name value: ', myForm.value.name);
    console.log('email value: ', myForm.value.email);
    console.log('message value: ', myForm.value.message);

  }
}
