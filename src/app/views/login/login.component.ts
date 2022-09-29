import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubserviceService } from 'src/app/service/subservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  public showPassword!: boolean 
  // public showPasswordOnPress!: boolean;
  data: any;
  id: any;
  credential! : FormData ;
  
  
  constructor(private router:Router,private subService:SubserviceService,private fb:FormBuilder) { 
  
  }

  ngOnInit(): void {   
    this.loginForm =this.fb.group({
      email:['',Validators.required],
      pwd:['',Validators.required]

    })
  }

  onSubmit(){
    console.log("Success",this.loginForm.value)
    if(this.loginForm.valid ){
      this.credential = new FormData();
      this.credential.append("username",this.loginForm.get('email').value);
      this.credential.append("password",this.loginForm.get('pwd').value);
      this.subService.login(this.credential).subscribe(data =>{
        this.data= data; 
        // if(this.data.access_token != null){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sign in Successfully',
            showConfirmButton: false,
            timer: 1500,
            width: 600    
          });
          localStorage.setItem('token',this.data.access_token);
          localStorage.setItem('token_type',this.data.token_type);
          this.router.navigate(['/home'])
          
        },err =>
        // else
        {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Invalid Username or Password',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      );
      

    }
    else{
      alert("Credentials cannot be empty")
    }
    
    
  }

}
