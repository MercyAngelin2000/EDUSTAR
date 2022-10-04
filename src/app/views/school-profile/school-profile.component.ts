import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  dataToSubmit:any = "sclprofile";
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
      sclprofile1:this.fb.group({
      instituteName:['',Validators.required],
      postal:['',Validators.required],
      district:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      pincode:['',[Validators.required,Validators.min(100000), Validators.max(999999)]],
      url:['',Validators.required],
      officialEmail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      officialPhone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      schoolLocation:['',Validators.required],
      establishmentYear:['',Validators.required],
      medium:['',Validators.required],
      }),
      sclprofile2:this.fb.group({
      natureOfAffiliation:['',Validators.required],
      schoolLevel:['',Validators.required],
      gender:['',Validators.required],
      currentGirls:['',Validators.required],
      CurrentBoys:['',Validators.required],
      totalStudents:['',Validators.required],
      teachingStaff:['',Validators.required],
      nonTeachingStaff:['',Validators.required],
      correspondentName:['',Validators.required],
      correspondentMobile:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      correspondentEmail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      }),
      sclprofile3:this.fb.group({
        principalName:['',Validators.required],
        principalPhone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
        principalEmail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        principalMobile:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      }),
      sclprofile4:this.fb.group({
        instituteRecognizedByGovt:['',Validators.required],
        boardName:['',Validators.required],
        affiliationNo:['',Validators.required],
        affiliationYear:['',Validators.required],
        affiliationType:['',Validators.required],
        affiliationCondition:['',Validators.required],
        minorityStatusCertificate:['',Validators.required],
        christian:['',Validators.required],
        hindu:['',Validators.required],
        muslim:['',Validators.required],
        others:['',Validators.required],
        nonBeliever:['',Validators.required],
        fireSaftyCertificate:['',Validators.required],
        sanitationCertificate:['',Validators.required],
        buildingSaftyCertificate:['',Validators.required],
      }),
      sclprofile5:this.fb.group({
      schoolOwnedBy:['',Validators.required],
      trustName:['',Validators.required],
      isTrustRegistered:['',Validators.required],
      act:['',Validators.required],
      registrationYear:['',Validators.required],
      registrationNo:['',Validators.required],
      registrationValidity:['',Validators.required],
      presidentName:['',Validators.required],
      presidentDesignation:['',Validators.required],
      presidentAddress:['',Validators.required],
      presidentPhone:['',[Validators.required,Validators.min(1000000000), Validators.max(9999999999)]],
      presidentEmail:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      }),
      sclprofile6:this.fb.group({
        governingBodyOfTrust:['',Validators.required],
        members:['',Validators.required],
        tenureMember:['',Validators.required],
        epcc:['',Validators.required],
        epccMember:['',Validators.required],
        epccTenure:['',Validators.required],
        parentTeacherAssociation:['',Validators.required],
        parentTeacherAssociationMember:['',Validators.required],
        parentTeacherAssociationTenure:['',Validators.required],
      }),
      sclprofile7:this.fb.group({
      studentAssociation:['',Validators.required],
      studentAssociationMember:['',Validators.required],
      studentAssociationTenure:['',Validators.required],
      generalComplaintCell:['',Validators.required],
      schoolManagementCommittee:['',Validators.required],
      constitutionCommittee:['',Validators.required],
      constitutionMember:['',Validators.required],
      constitutionTenure:['',Validators.required],
      }),
      sclprofile8:this.fb.group({
      schoolBuildingType:['',Validators.required],
      schoolCampusArea:['',Validators.required],
      builtupArea:['',Validators.required],
      playGroundArea:['',Validators.required],
      noOfBuilding:['',Validators.required],
      provision:['',Validators.required],
      noOfStaircase:['',Validators.required],
      noOfLifts:['',Validators.required],
      }),
      sclprofile9:this.fb.group({
      classRoom:['',Validators.required],
      staffRoom:['',Validators.required],
      physicsLab:['',Validators.required],
      chemistryLab:['',Validators.required],
      biologyLab:['',Validators.required],
      mathsLab:['',Validators.required],
      computerLab:['',Validators.required],
      languageLab:['',Validators.required],
      homeScienceLab:['',Validators.required],
      library:['',Validators.required],
      auditorium:['',Validators.required],
      counselorRoom:['',Validators.required],
      visitorParlor:['',Validators.required],
      prayerRoom:['',Validators.required],
      sickRoom:['',Validators.required],
      canteen:['',Validators.required],
      securityRoom:['',Validators.required],
      otherRoom:['',Validators.required],
      staffToilet:['',Validators.required],
      studentToilet:['',Validators.required],
      room:['',Validators.required],
      splNeeds:['',Validators.required],
      staffSpeciallNeed:['',Validators.required],
      }),
      sclprofile10:this.fb.group({
      boundaryWall:['',Validators.required],
      wallStatus:['',Validators.required],
      cctv:['',Validators.required],
      dataSaved:['',Validators.required],
      noOfCamera:['',Validators.required],
      maleGuard:['',Validators.required],
      noOfMaleGuard:['',Validators.required],
      femaleGuard:['',Validators.required],
      noOfFemaleGuard:['',Validators.required],
      waterFacility:['',Validators.required],
      drainageFacility:['',Validators.required],
      }),
      sclprofile11:this.fb.group({
      midday:['',Validators.required],
      noOfOwnedBus:['',Validators.required],
      gpsCamera:['',Validators.required],
      ladyAttendantor:['',Validators.required],
      firstAid:['',Validators.required],
      drinkingWater:['',Validators.required],
      subContractedBus:['',Validators.required],
      busPass:['',Validators.required],
      freeTransport:['',Validators.required],
      }),
      sclprofile12:this.fb.group({
      libraryOpen:['',Validators.required],
      libraryClose:['',Validators.required],
      noOfLibraryBook:['',Validators.required],
      noOfLibraryMagazine:['',Validators.required],
      noOfDailies:['',Validators.required],
      noOfeBook:['',Validators.required],
      onlineAccess:['',Validators.required],
      separateLibrary:['',Validators.required],
      remedialTeaching:['',Validators.required],
      multimedia1:[false],
      multimedia2:[false],
      multimedia3:[false],
      multimedia4:[false],
      multimedia5:[false],
      }),
      sclprofile13:this.fb.group({
      permanentMalePrincipal:['',Validators.required],
      permanentFemalePrincipal:['',Validators.required],
      temporaryMalePrincipal:['',Validators.required],
      temporaryFemalePrincipal:['',Validators.required],
      permanentMaleVP:['',Validators.required],
      permanentFemaleVP:['',Validators.required],
      temporaryMaleVP:['',Validators.required],
      temporaryFemaleVP:['',Validators.required],
      permanentMalePGT:['',Validators.required],
      permanentFemalePGT:['',Validators.required],
      temporaryMalePGT:['',Validators.required],
      temporaryFemalePGT:['',Validators.required],
      permanentMaleTGT:['',Validators.required],
      permanentFemaleTGT:['',Validators.required],
      temporaryMaleTGT:['',Validators.required],
      temporaryFemaleTGT:['',Validators.required],
      permanentMalePRT:['',Validators.required],
      permanentFemalePRT:['',Validators.required],
      temporaryMalePRT:['',Validators.required],
      temporaryFemalePRT:['',Validators.required],
      permanentMaleNTT:['',Validators.required],
      permanentFemaleNTT:['',Validators.required],
      temporaryMaleNTT:['',Validators.required],
      temporaryFemaleNTT:['',Validators.required],
      permanentUntrainedMale:['',Validators.required],
      permanentUntrainedFemale:['',Validators.required],
      temporaryUntrainedMale:['',Validators.required],
      temporaryUntrainedFemale:['',Validators.required],
      permanentMaleLibrarian:['',Validators.required],
      permanentFemaleLibrarian:['',Validators.required],
      temporaryMaleLibrarian:['',Validators.required],
      temporaryFemaleLibrarian:['',Validators.required],
      permanentMaleArts:['',Validators.required],
      permanentFemaleArts:['',Validators.required],
      temporaryMaleArts:['',Validators.required],
      temporaryFemaleArts:['',Validators.required],
      permanentMaleCounsellor:['',Validators.required],
      permanentFemaleCounsellor:['',Validators.required],
      temporaryMaleCounsellor:['',Validators.required],
      temporaryFemaleCounsellor:['',Validators.required],
      permanentMaleLiteracy:['',Validators.required],
      permanentFemaleLiteracy:['',Validators.required],
      temporaryMaleliteracy:['',Validators.required],
      temporaryFemaleliteracy:['',Validators.required],
      permanentMaleMinister:['',Validators.required],
      permanentFemaleMinister:['',Validators.required],
      temporaryMaleMinister:['',Validators.required],
      temporaryFemaleMinister:['',Validators.required],
      permanentMaleNurse:['',Validators.required],
      permanentFemaleNurse:['',Validators.required],
      temporaryMaleNurse:['',Validators.required],
      temporaryFemaleNurse:['',Validators.required],
      permanentMalePT:['',Validators.required],
      permanentFemalePT:['',Validators.required],
      temporaryMalePT:['',Validators.required],
      temporaryFemalePT:['',Validators.required],
      }),
      sclprofile14:this.fb.group({
      permanentOfficeManager:['',Validators.required],
      temporaryOfficeManager:['',Validators.required],
      partTimeOfficeManager:['',Validators.required],
      permanentOfficeAsst:['',Validators.required],
      temporaryOfficeAsst:['',Validators.required],
      partTimeOfficeAsst:['',Validators.required],
      permanentClerk:['',Validators.required],
      temporaryClerk:['',Validators.required],
      partTimeClerk:['',Validators.required],
      permanentLabAttendant:['',Validators.required],
      temporaryLabAttendant:['',Validators.required],
      partTimeLabAttendant:['',Validators.required],
      permanentAccountant:['',Validators.required],
      temporaryAccountant:['',Validators.required],
      partTimeAccountant:['',Validators.required],
      permanentPeon:['',Validators.required],
      temporaryPeon:['',Validators.required],
      partTimePeon:['',Validators.required],
      permanentOthers:['',Validators.required],
      temporaryOthers:['',Validators.required],
      partTimeOthers:['',Validators.required],
      }),
      sclprofile15:this.fb.group({
      noOfCarricularActivity:['',Validators.required],
      noOfGrps:['',Validators.required],
      noOfCommunity:['',Validators.required],
      noOfSportsAtSchool:['',Validators.required],
      noOfSportsAtZonal:['',Validators.required],
      noOfSportsAtDist:['',Validators.required],
      noOfSportsAtState:['',Validators.required],
      noOfSportsAtNational:['',Validators.required],
      noOfSportsAtInternational:['',Validators.required],
      noOfCompetitionAtSchool:['',Validators.required],
      noOfCompetitionAtZonal:['',Validators.required],
      noOfCompetitionAtDist:['',Validators.required],
      noOfCompetitionAtState:['',Validators.required],
      noOfCompetitionAtNational:['',Validators.required],
      noOfCompetitionAtInternational:['',Validators.required],
      noOfSclProgramsAtSchool:['',Validators.required],
      noOfSclProgramsAtZonal:['',Validators.required],
      noOfSclProgramsAtDist:['',Validators.required],
      noOfSclProgramsAtState:['',Validators.required],
      noOfSclProgramsAtNational:['',Validators.required],
      noOfSclProgramsAtInternational:['',Validators.required],
      }),
      sclprofile16:this.fb.group({
      academicYearBeginingMonth:['',Validators.required],
      academicYearEndingMonth:['',Validators.required],
      workingDay2021:['',Validators.required],
      workingDay2020:['',Validators.required],
      workingDay2019:['',Validators.required],
      hrsOfAcademic2021:['',Validators.required],
      hrsOfAcademic2020:['',Validators.required],
      hrsOfAcademic2019:['',Validators.required],
      instructionalHrs2021:['',Validators.required],
      instructionalHrs2020:['',Validators.required],
      instructionalHrs2019:['',Validators.required],
      nonInstructuionalWorkingday2021:['',Validators.required],
      nonInstructuionalWorkingday2020:['',Validators.required],
      nonInstructuionalWorkingday2019:['',Validators.required],
      holiday2021:['',Validators.required],
      holiday2020:['',Validators.required],
      holiday2019:['',Validators.required],}),
      sclprofile17:this.fb.group({
      noOfSubTeachingPeriod:['',Validators.required],
      noOfMoralTeachingPeriod:['',Validators.required],
      teachingDuration:['',Validators.required],
      noOfClubHrs:['',Validators.required],
      fromTimeInSummer:['',Validators.required],
      toTimeInSummer:['',Validators.required],
      fromTimeInWinter:['',Validators.required],
      toTimeInWinter:['',Validators.required],
      shift:['',Validators.required],
      
      }) ,
      sclprofile18:this.fb.group({
      scholarship:this.fb.array([])
    }),
      

    });
    this.subservice.sclprofile().subscribe((arg: any) =>{
      this.data=arg;
      
      if(this.data!=null){
        this.generalForm.patchValue(this.data);
        
        this.data.sclprofile18.scholarship.forEach((element:any) => {
          this.scholarship_detail().push(this.loadRow(element));
          
        });
      }
      else{

      }

    

  })
  }

  loadRow(data:any):FormGroup{
    return this.fb.group({
      scholarshipName:[data[0]],
      boy:[data[1]],
      girl:[data[2]],
      byGovt:[data[3]],
      byPrivate:[data[4]]
      
    });
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
    var dataToSubmit=this.dataToSubmit+this.steps

    console.log(dataToSubmit);
    
    if(this.generalForm.controls[dataToSubmit].valid){
      console.log(this.generalForm.controls[dataToSubmit].value)
      this.subservice.gen_info(this.generalForm.controls[dataToSubmit].value).subscribe((arg:any) => {
        this.id = arg;
        console.log()
      })
    }
    else{
      alert("all the fields are mandatory")
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
  scholarship_detail():FormArray{
    return this.generalForm.get('sclprofile18.scholarship') as FormArray;
  }

  newrow():FormGroup{
    return this.fb.group({
      scholarshipName:['',Validators.required],
      boy:['',Validators.required],
      girl:['',Validators.required],
      byGovt:['',Validators.required],
      byPrivate:['',Validators.required]
      
    });
  }

  addrow(){
    return this.scholarship_detail().push(this.newrow())

  }

  removerow(i:any){
    return this.scholarship_detail().removeAt(i)
  }

}


