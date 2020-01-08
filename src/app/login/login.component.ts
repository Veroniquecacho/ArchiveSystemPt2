import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { EquipmentActions } from '../equipment.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar : MatSnackBar, private equipmentActions: EquipmentActions) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required]
    }

    )
  }

  onSubmit(): void{
    this.snackBar.open('Loggin in..', 'Close', { duration: 2000,});
    if(this.loginForm.invalid){
     return;
    }
    else{
      if(this.loginForm.value.username == 'admin'){
        this.authService.login().subscribe( redualt => {
          this.router.navigate(['/home/admin/equipment'])
          this.equipmentActions.setLoggedIn(true);
          this.snackBar.open('Logged in succesfully', 'Close', { duration: 2000,});
      }
    
      
      )
     
    }else if(this.loginForm.value.username == 'user'){
      this.snackBar.open('Logged in succesfully', 'Close', { duration: 2000,});

    }
    else{
     this.loginForm.invalid
     this.snackBar.open('Wrong username or password', 'Close', { duration: 2000,});
    }

  }

}
}