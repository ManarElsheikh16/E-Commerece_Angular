import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as twilio from 'twilio';

@Component({
  selector: 'app-contect-us',
  templateUrl: './contect-us.component.html',
  styleUrls: ['./contect-us.component.scss']
})
export class ContectUsComponent {
msgBody:string="write here";
phoneNumber = '+201028574231';
messageBody = '';

  constructor(private formBuilder: FormBuilder , private _Router:Router,private sanitizer: DomSanitizer) {
  }
  ReportForm=this.formBuilder.group({
    ReportText: ['', [Validators.required]],

  });

  get ReportText()
  {
    return this.ReportForm.get('ReportText');
  }


  sendWhatsAppMessage() {
    const message = encodeURIComponent(this.msgBody);
    const url = `https://wa.me/${this.phoneNumber}?text=${message}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);

  }

  generateEmailLink() {
    const email = 'manarelshick@gmail.com';
    const subject = 'Hello from Angular!';
    const body = this.msgBody;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return this.sanitizer.bypassSecurityTrustUrl(mailtoLink);
  }

  SubmitData(loginForm:FormGroup)
  {
    if(loginForm.valid)
    {
      console.log("Valid");
      console.log(loginForm.value);
      this._Router.navigate(['home']);

    }
    else{
      this._Router.navigate(['contact']);
    }
}
}
