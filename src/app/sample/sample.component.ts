import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  steps:any
  generalForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    //   scholarship:this.fb.array([ ])

}
// scholarship_detail():FormArray{
//   return this.generalForm.get('scholarship') as FormArray;
// }

// newrow():FormGroup{
//   return this.fb.group({
//     scholarship_name:['',,Validators.required],
//     boy:['',,Validators.required],
//     girl:['',,Validators.required],
//     by_govt:['',Validators.required],
//     by_private:['',Validators.required]
    
//   });
// }

// addrow(){
//   return this.scholarship_detail().push(this.newrow())

// }

// removerow(i:any){
//   return this.scholarship_detail().removeAt(i)
// }



}
