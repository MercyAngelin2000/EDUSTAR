import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.scss']
})
export class SchoolProfileComponent implements OnInit {

  generalForm : FormGroup | any
  steps: any  = 1;
  msg : any ="General Information";
  data: any;
  id: any;
  state:any = ['Andaman and Nicobar Islands',' Andhra Pradesh','Arunachal Pradesh',' Assam','  Bihar','Chandigarh',' Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu',' Delhi',
  'Goa','Gujarat','Haryana',' Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka',' Kenmore','Kerala',' Lakshadweep','Maharashtra','Manipur','Meghalaya',' Mizoram','Nagaland',
  'Narora','Natwar','Odisha','Paschim Medinipur','Pondicherry','Punjab','Rajasthan','Sikkim','Tamil Nadu',' Telangana',' Tripura',' Uttar Pradesh',' Uttarakhand',' Vaishali','West Bengal'];
  constructor(private fb:FormBuilder, private subservice:SubserviceService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')==null)
    {
      Swal.fire('You have been Loggedout');
      this.route.navigate(['/']);
      
    }
    this.generalForm=this.fb.group({
      inst_name:['',Validators.required],
      postal:['',Validators.required],
      dis:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pin:['',[Validators.required,Validators.min(100000), Validators.max(999999)]],
      url:['',Validators.required],
      off_email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      off_phone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      scl_loc:['',Validators.required],
      est_year:['',Validators.required],
      medium:['',Validators.required],
      nat_affiliation:['',Validators.required],
      scl_level:['',Validators.required],
      gen:['',Validators.required],
      girls:['',Validators.required],
      boys:['',Validators.required],
      total_stu:['',Validators.required],
      teaching_staff:['',Validators.required],
      non_teaching:['',Validators.required],
      cors_name:['',Validators.required],
      cors_mobile:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      cors_email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      prin_name:['',Validators.required],
      prin_phone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      prin_email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      prin_mobile:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      reg_govt:['',Validators.required],
      board_name:['',Validators.required],
      affli_no:['',Validators.required],
      affili_year:['',Validators.required],
      per_temp:['',Validators.required],
      cond:['',Validators.required],
      minor_sta_cer:['',Validators.required],
      christian:['',Validators.required],
      hindu:['',Validators.required],
      muslim:['',Validators.required],
      others:['',Validators.required],
      non_believe:['',Validators.required],
      fire:['',Validators.required],
      sanitation:['',Validators.required],
      building:['',Validators.required],
      scl_owned:['',Validators.required],
      trust_name:['',Validators.required],
      registered:['',Validators.required],
      act:['',Validators.required],
      reg_year:['',Validators.required],
      reg_no:['',Validators.required],
      reg_validity:['',Validators.required],
      president_name:['',Validators.required],
      designation:['',Validators.required],
      address:['',Validators.required],
      president_phone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      president_email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      governing:['',Validators.required],
      members:['',Validators.required],
      mem_tenure:['',Validators.required],
      EPCC:['',Validators.required],
      EPCC_mem:['',Validators.required],
      EPCC_tenure:['',Validators.required],
      par_techer:['',Validators.required],
      par_teacher_mem:['',Validators.required],
      par_techer_tenure:['',Validators.required],
      stud:['',Validators.required],
      stud_mem:['',Validators.required],
      stud_tenure:['',Validators.required],
      general:['',Validators.required],
      scl_manage_commi:['',Validators.required],
      constitute_commi:['',Validators.required],
      constitute_mem:['',Validators.required],
      constitute_tenure:['',Validators.required],
      scl_location:['',Validators.required],
      area:['',Validators.required],
      built_area:['',Validators.required],
      play_area:['',Validators.required],
      no_building:['',Validators.required],
      provision:['',Validators.required],
      no_staircase:['',Validators.required],
      no_lifts:['',Validators.required],
      class_room:['',Validators.required],
      staff_room:['',Validators.required],
      physics_lab:['',Validators.required],
      chemistry_lab:['',Validators.required],
      bio_lab:['',Validators.required],
      math_lab:['',Validators.required],
      comp_lab:['',Validators.required],
      lang_lab:['',Validators.required],
      home_lab:['',Validators.required],
      library:['',Validators.required],
      auditorium:['',Validators.required],
      counselor_room:['',Validators.required],
      visitor_parlor:['',Validators.required],
      prayer_room:['',Validators.required],
      sick_room:['',Validators.required],
      canteen:['',Validators.required],
      security_room:['',Validators.required],
      other_room:['',Validators.required],
      staff_toilet:['',Validators.required],
      stu_toilet:['',Validators.required],
      room:['',Validators.required],
      spl_need:['',Validators.required],
      staff_spl_need:['',Validators.required],
      boundary_wall:['',Validators.required],
      wall_status:['',Validators.required],
      cctv:['',Validators.required],
      data_saved:['',Validators.required],
      no_camera:['',Validators.required],
      male_guard:['',Validators.required],
      no_male_guard:['',Validators.required],
      female_guard:['',Validators.required],
      no_female_guard:['',Validators.required],
      water_facility:['',Validators.required],
      drainage_facility:['',Validators.required],
      midday:['',Validators.required],
      no_bus:['',Validators.required],
      gps_camera:['',Validators.required],
      lady_attendantor:['',Validators.required],
      first_aid:['',Validators.required],
      drinking_water:['',Validators.required],
      bus_sub_contract:['',Validators.required],
      bus_pass:['',Validators.required],
      free_transport:['',Validators.required],
      lib_open:['',Validators.required],
      lib_close:['',Validators.required],
      no_book:['',Validators.required],
      no_magazine:['',Validators.required],
      no_newspaper:['',Validators.required],
      no_ebook:['',Validators.required],
      online_access:['',Validators.required],
      sep_lib:['',Validators.required],
      remedial_teaching:['',Validators.required],
      multimedia1:[false],
      multimedia2:[false],
      multimedia3:[false],
      multimedia4:[false],
      multimedia5:[false],
      prin_per_male:['',Validators.required],
      prin_per_female:['',Validators.required],
      prin_tem_male:['',Validators.required],
      prin_tem_female:['',Validators.required],
      vp_per_male:['',Validators.required],
      vp_per_female:['',Validators.required],
      vp_tem_male:['',Validators.required],
      vp_tem_female:['',Validators.required],
      pgt_per_male:['',Validators.required],
      pgt_per_female:['',Validators.required],
      pgt_tem_male:['',Validators.required],
      pgt_tem_female:['',Validators.required],
      tgt_per_male:['',Validators.required],
      tgt_per_female:['',Validators.required],
      tgt_tem_male:['',Validators.required],
      tgt_tem_female:['',Validators.required],
      prt_per_male:['',Validators.required],
      prt_per_female:['',Validators.required],
      prt_tem_male:['',Validators.required],
      prt_tem_female:['',Validators.required],
      ntt_per_male:['',Validators.required],
      ntt_per_female:['',Validators.required],
      ntt_tem_male:['',Validators.required],
      ntt_tem_female:['',Validators.required],
      untrained_per_male:['',Validators.required],
      untrained_per_female:['',Validators.required],
      untrained_tem_male:['',Validators.required],
      untrained_tem_female:['',Validators.required],
      lib_per_male:['',Validators.required],
      lib_per_female:['',Validators.required],
      lib_tem_male:['',Validators.required],
      lib_tem_female:['',Validators.required],
      art_per_male:['',Validators.required],
      art_per_female:['',Validators.required],
      art_tem_male:['',Validators.required],
      art_tem_female:['',Validators.required],
      counsellor_per_male:['',Validators.required],
      counsellor_per_female:['',Validators.required],
      counsellor_tem_male:['',Validators.required],
      counsellor_tem_female:['',Validators.required],
      lit_per_male:['',Validators.required],
      lit_per_female:['',Validators.required],
      lit_tem_male:['',Validators.required],
      lit_tem_female:['',Validators.required],
      faith_per_male:['',Validators.required],
      faith_per_female:['',Validators.required],
      faith_tem_male:['',Validators.required],
      faith_tem_female:['',Validators.required],
      nurse_per_male:['',Validators.required],
      nurse_per_female:['',Validators.required],
      nurse_tem_male:['',Validators.required],
      nurse_tem_female:['',Validators.required],
      pt_per_male:['',Validators.required],
      pt_per_female:['',Validators.required],
      pt_tem_male:['',Validators.required],
      pt_tem_female:['',Validators.required],
      off_manager_per:['',Validators.required],
      off_manager_tem:['',Validators.required],
      off_manager_part:['',Validators.required],
      off_asst_per:['',Validators.required],
      off_asst_tem:['',Validators.required],
      off_asst_part:['',Validators.required],
      clerk_per:['',Validators.required],
      clerk_tem:['',Validators.required],
      clerk_part:['',Validators.required],
      lab_per:['',Validators.required],
      lab_tem:['',Validators.required],
      lab_part:['',Validators.required],
      accountant_per:['',Validators.required],
      accountant_tem:['',Validators.required],
      accountant_part:['',Validators.required],
      peon_per:['',Validators.required],
      peon_tem:['',Validators.required],
      peon_part:['',Validators.required],
      other_per:['',Validators.required],
      other_tem:['',Validators.required],
      other_part:['',Validators.required],
      no_curri_act:['',Validators.required],
      no_grp:['',Validators.required],
      no_community:['',Validators.required],
      scl:['',Validators.required],
      zonal:['',Validators.required],
      dist:['',Validators.required],
      stat:['',Validators.required],
      national:['',Validators.required],
      international:['',Validators.required],
      c_scl:['',Validators.required],
      c_zonal:['',Validators.required],
      c_dist:['',Validators.required],
      c_stat:['',Validators.required],
      c_national:['',Validators.required],
      c_international:['',Validators.required],
      inter_scl:['',Validators.required],
      inter_zonal:['',Validators.required],
      inter_dist:['',Validators.required],
      inter_stat:['',Validators.required],
      inter_national:['',Validators.required],
      inter_international:['',Validators.required],
      ac_begin_mon:['',Validators.required],
      ac_end_mon:['',Validators.required],
      working_day_21:['',Validators.required],
      working_day_20:['',Validators.required],
      working_day_19:['',Validators.required],
      hrs_21:['',Validators.required],
      hrs_20:['',Validators.required],
      hrs_19:['',Validators.required],
      instruct_hrs_21:['',Validators.required],
      instruct_hrs_20:['',Validators.required],
      instruct_hrs_19:['',Validators.required],
      non_instruct_hrs_21:['',Validators.required],
      non_instruct_hrs_20:['',Validators.required],
      non_instruct_hrs_19:['',Validators.required],
      holiday_21:['',Validators.required],
      holiday_20:['',Validators.required],
      holiday_19:['',Validators.required],
      sub_teaching_week:['',Validators.required],
      moral_week:['',Validators.required],
      teaching_duration:['',Validators.required],
      hrs_club:['',Validators.required],
      scl_tim_sum_from:['',Validators.required],
      scl_tim_sum_to:['',Validators.required],
      scl_tim_win_from:['',Validators.required],
      scl_tim_win_to:['',Validators.required],
      shift:['',Validators.required],
      // scholarship_name0:[''],
      // boy0:[''],
      // girl0:[''],
      // by_govt0:[''],
      // by_private0:[''],
      // scholarship:this.fb.array([])

    });
    this.subservice.sclprofile().subscribe((arg: any) =>{
      this.data=arg;
      if(this.data!=null)
        this.generalForm.patchValue(this.data)

  })
  }
  onPrevious(){
    this.steps=this.steps-1;
    this.Message();
  }
  onNext(){
    this.steps=this.steps+1;
    this.Message();
  }

  onSubmit(){
    if(this.generalForm.valid){
      console.log(this.generalForm.value)
      this.subservice.gen_info(this.generalForm.value).subscribe((arg:any) => {
        console.log()
      })
    }
  
  }

  Message(){
    if(this.steps>3 && this.steps < 8){
       this.msg ="- Recognition, Affiliation and School Governance";
    }
    else if(this.steps>8 && this.steps <13 ){
      this.msg = "- Infrastructural & Academic Facilities";
    }
    else if(this.steps==13 ){
      this.msg = "- Teaching Staff";
    }
    else if(this.steps==14){
      this.msg = "- Non - Teaching Staff"
    }
    else if(this.steps==15){
      this.msg = " - Curricular & Extracurricular Activities"
    }
    else if(this.steps>15 && this.steps<18){
      this.msg = " - School Timing"
    }
    else if(this.steps==18){
      this.msg = "- Scholarship Offered to the Students"
    }



    
  }
  // scholarship_detail():FormArray{
  //   return this.generalForm.get('scholarship') as FormArray;
  // }

  // newrow():FormGroup{
  //   return this.fb.group({
  //     scholarship_name:[''],
  //     boy:[''],
  //     girl:[''],
  //     by_govt:[''],
  //     by_private:['']
      
  //   });
  // }

  // addrow(){
  //   return this.scholarship_detail().push(this.newrow())

  // }

  // removerow(i:any){
  //   return this.scholarship_detail().removeAt(i)
  // }



}
