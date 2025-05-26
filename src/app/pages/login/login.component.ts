import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginView: boolean = true;
  
  userRegistrationObj: any ={
    userName: '',
    password: '',
    emailId:''
  }

  userLoginObj:any = {
    userName: '',
    password: ''
  }

  router = inject(Router);

  onRegister(){
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegistrationObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));

    } else{
      const localArray = [];
      localArray.push(this.userRegistrationObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }
    alert('Registration Successful.');
  }

  onLogin(){
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const users = JSON.parse(isLocalData);
      const isUserFound = users.find((u:any) => u.userName == this.userLoginObj.userName && u.password == this.userLoginObj.password);
      if(isUserFound != undefined){
        this.router.navigateByUrl('dashboard')
      }else{
        alert('Invalid username or password');
      }
    }else{
        alert('Invalid username or password');
    }
  }
}
