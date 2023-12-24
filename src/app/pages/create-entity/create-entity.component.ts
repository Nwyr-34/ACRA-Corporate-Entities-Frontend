import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, 
              private corporateEntityService: CorporateEntityService, 
              private router: Router,
              private _snackBar: MatSnackBar ){
    this.form = this.fb.group({
      uen: ['', Validators.required],
      issuanceAgencyId: [''],
      entityName: ['',Validators.required],
      entityTypeDescription: [''],
      businessConstitutionDescription: [''],
      companyTypeDescription: [''],
      companyStatusDescription: [''],
      registrationIncorporationDate: [''],
      uenIssueDate: [''],
      addressType: [''],
      block: [''],
      streetName: [''],
      level: [''],
      unit: [''],
      buildingName: [''],
      postalCode: [''],
      accountDueDate: [''],
      annualReturnDate: [''],
      noOfCharges: [''],
      primarySsicCode: [''],
      primarySsicDescription: [''],
      primaryUserDescribedActivity: [''],
      secondarySsicCode: [''],
      secondarySsicDescription: [''],
      secondaryUserDescribedActivity: [''],
      noOfOfficers: [''],
      formerEntityName: [''],
      paidUpCapitalCurrency: [''],
      paidUpCapitalOrdinary: [''],
      paidUpCapitalPreference: [''],
      paidUpCapitalOthers: [''],
      uenOfAuditFirm: [''],
      nameOfAuditFirm: [''],
    })
  }

  addEntity(){
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

    this.corporateEntityService.createEntity(this.form.value).subscribe(data => {
      console.log(data);
    })

    this.router.navigate(['/home']);
    
    this._snackBar.open('Entity created successfully', 'Close', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  
  }
}
