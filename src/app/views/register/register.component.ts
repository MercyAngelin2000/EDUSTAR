import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';
import { PasswordStrengthValidator } from './password-strength';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup | any 
  id: any;
  
  submitted = false;
  errors: any = null;

  constructor(private router:Router,private subService:SubserviceService) { 
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      // pwd : new FormControl('',[Validators.required, Validators.minLength(6)])
      pwd : new FormControl('',Validators.compose([
        Validators.required, PasswordStrengthValidator]))
      
    }); 
  }

  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }
  login(){
    this.router.navigate(['/'])
  }
  onSubmit(){
    this.submitted = true;
    console.log("Success",this.registerForm.value)
   
    if(this.registerForm.valid){
      this.subService.register(this.registerForm.value).subscribe( data =>{

        // if(this.arg.email!=null){
          alert("Register Successfully...Email ID is your Username and Password will be what you entered ")
          this.router.navigate(['/'])
        },
        err => {
          this.errors = err
          alert("Email ID already exist")
          
        }
    // }
    
  );}
  


  }
  
}
