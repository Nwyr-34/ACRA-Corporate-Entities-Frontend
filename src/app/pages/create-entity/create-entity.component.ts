import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CorporateEntity } from 'src/app/interfaces/corporate-entity';
import { CorporateEntityService } from 'src/app/services/corporate-entity/corporate-entity.service';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css']
})
export class CreateEntityComponent {

  typeDescription: any[] = ["Business",
    "LocalCompany",
    "ForeignCompany",
    "na"];
    businessConstitutionDescription: any[] = ["Sole Proprietor","Partnership", "na"];

    companyTypeDescription: any[] = [
      "EXEMPT_PRIVATE_COMPANY_LIMITED_BY_SHARES", "PRIVATE_COMPANY_LIMITED_BY_SHARES", "PUBLIC_COMPANY_LIMITED_BY_SHARES","na"
    ];

    companyStatusDescription: any[] = ["Cancelled", "NonRenewal", "Live", "CeasedRegistration",
  "LiveCompany", "StruckOff","DissolvedMembers","DissolvedCompulsory","InLiquidation","na"];


  form: FormGroup;
  uen: string = '';

  operation: string = 'Create';


  constructor(private fb: FormBuilder, 
              private corporateEntityService: CorporateEntityService, 
              private router: Router,
              private _snackBar: MatSnackBar,
              private aRoute: ActivatedRoute ){
      this.form = this.fb.group({
      uen: ['', Validators.required],
      issuanceAgencyId: ['ACRA'],
      entityName: ['',Validators.required],
      entityTypeDescription: ['na'],
      businessConstitutionDescription: ['na'],
      companyTypeDescription: ['na'],
      companyStatusDescription: ['na'],
      registrationIncorporationDate: [''],
      uenIssueDate: [''],
      addressType: ['LOCAL'],
      block: [''],
      streetName: ['na'],
      level: ['na'],
      unit: ['na'],
      buildingName: ['na'],
      postalCode: [''],
      accountDueDate: [''],
      annualReturnDate: [''],
      noOfCharges: ['0'],
      primarySsicCode: ['', Validators.required],
      primarySsicDescription: ['', Validators.required],
      primaryUserDescribedActivity: ['na'],
      secondarySsicCode: [''],
      secondarySsicDescription: ['na'],
      secondaryUserDescribedActivity: ['na'],
      noOfOfficers: ['0'],
      formerEntityName: ['na'],
      paidUpCapitalCurrency: ['na'],
      paidUpCapitalOrdinary: ['na'],
      paidUpCapitalPreference: ['na'],
      paidUpCapitalOthers: ['na'],
      uenOfAuditFirm: ['na'],
      nameOfAuditFirm: ['na'],
    })
    
    

    this.aRoute.url.subscribe(data => { 
      if(data.length <=1 ){
        return;
      }
      this.uen = data[data.length - 1].path
    })
    
  }

  ngOnInit(): void {
    if(this.uen != ''){ 
      this.operation = 'Edit';
      this.getEntity(this.uen);
    }
  }

  getEntity(uen: string){
    this.corporateEntityService.getEntity(uen).subscribe(data => {
      
      this.form.setValue({
        uen: data.uen,
        issuanceAgencyId: data.issuanceAgencyId,
        entityName: data.entityName,
        entityTypeDescription: data.entityTypeDescription,
        businessConstitutionDescription: data.businessConstitutionDescription,
        companyTypeDescription: data.companyTypeDescription,
        companyStatusDescription: data.entityStatusDescription,
        registrationIncorporationDate: data.registrationIncorporationDate,
        uenIssueDate: data.uenIssueDate,
        addressType: data.addressType,
        block: data.block,
        streetName: data.streetName,
        level: data.level,
        unit: data.unit,
        buildingName: data.buildingName,
        postalCode: data.postalCode,
        accountDueDate: data.accountDueDate,
        annualReturnDate: data.annualReturnDate,
        noOfCharges: data.noOfCharges,
        primarySsicCode: data.primarySsicCode,
        primarySsicDescription: data.primarySsicDescription,
        primaryUserDescribedActivity: data.primaryUserDescribedActivity,
        secondarySsicCode: data.secondarySsicCode,
        secondarySsicDescription: data.secondarySsicDescription,
        secondaryUserDescribedActivity: data.secondaryUserDescribedActivity,
        noOfOfficers: data.noOfOfficers,
        formerEntityName: data.formerEntityName,
        paidUpCapitalCurrency: data.paidUpCapitalCurrency,
        paidUpCapitalOrdinary: data.paidUpCapitalOrdinary,
        paidUpCapitalPreference: data.paidUpCapitalPreference,
        paidUpCapitalOthers: data.paidUpCapitalOthers,
        uenOfAuditFirm: data.uenOfAuditFirm,
        nameOfAuditFirm: data.nameOfAuditFirm
      })

    })
  }
  

  addEditEntity(){
    //we setup the object to be sent to the backend
    const entity:CorporateEntity = {
      uen: this.form.value.uen,
      issuanceAgencyId: this.form.value.issuanceAgencyId,
      entityName: this.form.value.entityName,
      entityTypeDescription: this.form.value.entityTypeDescription,
      businessConstitutionDescription: this.form.value.businessConstitutionDescription,
      companyTypeDescription: this.form.value.companyTypeDescription,
      entityStatusDescription: this.form.value.companyStatusDescription,
      registrationIncorporationDate: this.form.value.registrationIncorporationDate,
      uenIssueDate: this.form.value.uenIssueDate,
      addressType: this.form.value.addressType,
      block: this.form.value.block,
      streetName: this.form.value.streetName,
      level: this.form.value.level,
      unit: this.form.value.unit,
      buildingName: this.form.value.buildingName,
      postalCode: this.form.value.postalCode,
      accountDueDate: this.form.value.accountDueDate,
      annualReturnDate: this.form.value.annualReturnDate,
      noOfCharges: this.form.value.noOfCharges,
      primarySsicCode: this.form.value.primarySsicCode,
      primarySsicDescription: this.form.value.primarySsicDescription,
      primaryUserDescribedActivity: this.form.value.primaryUserDescribedActivity,
      secondarySsicCode: this.form.value.secondarySsicCode,
      secondarySsicDescription: this.form.value.secondarySsicDescription,
      secondaryUserDescribedActivity: this.form.value.secondaryUserDescribedActivity,
      noOfOfficers: this.form.value.noOfOfficers,
      formerEntityName: this.form.value.formerEntityName,
      paidUpCapitalCurrency: this.form.value.paidUpCapitalCurrency,
      paidUpCapitalOrdinary: this.form.value.paidUpCapitalOrdinary,
      paidUpCapitalPreference: this.form.value.paidUpCapitalPreference,
      paidUpCapitalOthers: this.form.value.paidUpCapitalOthers,
      uenOfAuditFirm: this.form.value.uenOfAuditFirm,
      nameOfAuditFirm: this.form.value.nameOfAuditFirm,
    }

    
    
    if(this.uen!=''){
      entity.uen = this.uen;
      this.editEntity(this.uen, entity);
    } else {
      this.addEntity(entity);
    }  
  }


  editEntity(uen: string, entity: CorporateEntity){

    

    this.corporateEntityService.updateEntity(uen, entity).subscribe(() => {
      this.router.navigate(['/home']);
     
      this._snackBar.open('Entity edited successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
    })
  }

  addEntity(entity: CorporateEntity){

    //we sent the object to the backend
    this.corporateEntityService.createEntity(entity).subscribe(data => {
      
      this.router.navigate(['/home']);
     
      this._snackBar.open('Entity created successfully', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
    })  
  }

  setDefaultValue(event: FocusEvent) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value === '') {
      inputElement.value = 'na';
    }
  }

}
