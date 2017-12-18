import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Auth} from '../auth';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,  private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm): void {
    this.spinnerService.show();
    this.authService.signin(form.value)
      .subscribe(
        (response: Auth ) => this.spinnerService.hide(),
        error => console.log(error)
      );
  }
}
