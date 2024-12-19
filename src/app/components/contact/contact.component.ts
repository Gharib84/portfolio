import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { validatePhoneNumber } from './validators/custom.validator';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  information:FormGroup;
  constructor(private fb:FormBuilder){
    this.information = this.fb.group({
      companyName: [" ",[Validators.required,Validators.name]],
      phone: [" ",[Validators.required, validatePhoneNumber()]],
      message: [" ", Validators.required]
    });
  }
}
