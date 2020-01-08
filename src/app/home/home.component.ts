import { Component, OnInit } from '@angular/core';
import { EquipmentActions } from '../equipment.actions';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AppState } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean;
  constructor(private equipmentActions: EquipmentActions, private ngRedux: NgRedux<AppState>, private router: Router,private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.ngRedux.select(state => state.equipment).subscribe(res => {
      // When notified
      this.loggedIn = res.isLoggedIn; 
    });
  }
  onLogoutClick() {
    this.equipmentActions.setLoggedIn(false);
    this.router.navigate(['/home/login']);
    this.snackBar.open('Logged out succesfully', 'Close', { duration: 2000,});
      

  }

}