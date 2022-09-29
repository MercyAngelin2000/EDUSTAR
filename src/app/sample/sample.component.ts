import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  steps:any
  generalForm!: FormGroup;
  state:any = ['Andaman and Nicobar Islands',' Andhra Pradesh','Arunachal Pradesh',' Assam','  Bihar','Chandigarh',' Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu',' Delhi',
  'Goa','Gujarat','Haryana',' Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka',' Kenmore','Kerala',' Lakshadweep','Maharashtra','Manipur','Meghalaya',' Mizoram','Nagaland',
  'Narora','Natwar','Odisha','Paschim Medinipur','Pondicherry','Punjab','Rajasthan','Sikkim','Tamil Nadu',' Telangana',' Tripura',' Uttar Pradesh',' Uttarakhand',' Vaishali','West Bengal'];
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.generalForm=this.fb.group({
      form1:this.fb.group({
      instituteName:['',Validators.required],
      postal:['',Validators.required],
      district:['',Validators.required],
      }),
      form2:this.fb.group({
        // state:['',Validators.required],
        city:['',Validators.required],
        pincode:['',[Validators.required,Validators.min(100000), Validators.max(999999)]],
      }),
      
     
  });
  

}
submit(){
  if(this.generalForm.controls['form1'].valid)
    console.log(this.generalForm.controls['form1'].value);
  
}
}
