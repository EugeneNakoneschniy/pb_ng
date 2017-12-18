import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  constructor(private authService: AuthService,  private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }
  logOut(e): void {
    e.preventDefault();
    this.spinnerService.show();
    this.authService.logOut();
    this.spinnerService.hide();
  }
}
