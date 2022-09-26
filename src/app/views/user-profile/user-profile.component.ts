import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userprofile! : FormGroup
  // id: any;
  data: any;
  constructor(private router:Router, private fb:FormBuilder,private subservice:SubserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null)
    {
      Swal.fire('You have been Loggedout')
      this.router.navigate(['/']);
    }
    this.userprofile=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      email:[''],
      dob:['',Validators.required],
      gender:['',Validators.required]
    })
    this.subservice.userprofile().subscribe((arg: any) =>{
      this.data=arg;
      console.log(this.data);
      if(this.data!=null)
      this.userprofile.patchValue(this.data)
    })
  }

  onSubmit(){
    if(this.userprofile.valid){
      console.log(this.userprofile.value)
      this.subservice.up_userprofile(this.userprofile.value).subscribe((arg:any) =>{
        // this.router.navigate(['/userprofile'])

      })
    }

  }
  onDelete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'logout'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subservice.del_userprofile().subscribe((arg:any) =>{
          this.router.navigate(['/'])
          return false
        })
       
      }
      
    });

  }


}
