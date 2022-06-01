import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs'

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
      name: ['demo', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });

    this.myForm.get('name').valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(value => {
      console.log('name value changed: ', value);
    });
  }

  onSubmit(myForm: FormGroup) {
    console.log('form valid: ', myForm.valid);
    console.log('name value: ', myForm.value.name);
    console.log('email value: ', myForm.value.email);
    console.log('message value: ', myForm.value.message);
  }

  emailDomainValidator(control: FormControl) {
    const emailValue = control.value;
    if (emailValue && emailValue.indexOf('@') !== -1) {
      const domain = emailValue.split('@')[1];
      if (domain !== 'avl.com') {
        return {
          domainName: {
            value: domain
          }
        }
      }
    }
    return null;
  }
}
