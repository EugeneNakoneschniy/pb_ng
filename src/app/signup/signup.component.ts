import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { NgForm } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,  private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    this.spinnerService.show();
    this.authService.signup(form.value)
      .subscribe(
        response => this.spinnerService.hide(),
        error => console.log(error)
      );
  }
}
