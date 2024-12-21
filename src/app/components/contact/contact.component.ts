import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { validatePhoneNumber } from './validators/custom.validator';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  information:FormGroup;
  constructor(private fb:FormBuilder){
    this.information = this.fb.group({
      companyName: [" ",[Validators.required]],
      phone: [" ",[Validators.required,validatePhoneNumber()]],
      message: [" ", Validators.required]
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit():void
  {
    if(this.information.valid){
      console.log(this.information.value);
      this.information.reset();
    }
  }
}
