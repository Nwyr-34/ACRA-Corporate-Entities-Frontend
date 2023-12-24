import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder){
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
    console.log(this.form);
  }




}
