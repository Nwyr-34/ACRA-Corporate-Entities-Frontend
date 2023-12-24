import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CorporateEntity } from 'src/app/interfaces/corporate-entity';
import { CorporateEntityService } from 'src/app/services/corporate-entity/corporate-entity.service';



@Component({
  selector: 'app-entitites',
  templateUrl: './entitites.component.html',
  styleUrls: ['./entitites.component.css']
})
export class EntititesComponent {

  listEntity: CorporateEntity[] = [];
  displayedColumns = [
    'uen',
    'issuanceAgencyId',
    'entityName',
    'entityTypeDescription',
    'businessConstitutionDescription',
    'companyTypeDescription',
    'entityStatusDescription',
    'registrationIncorporationDate',
    'uenIssueDate',
    'addressType',
    'block',
    'streetName',
    'level',
    'unit',
    'buildingName',
    'postalCode',
    'accountDueDate',
    'annualReturnDate',
    'noOfCharges',
    'primarySsicCode',
    'primarySsicDescription',
    'primaryUserDescribedActivity',
    'secondarySsicCode',
    'secondarySsicDescription',
    'secondaryUserDescribedActivity',
    'noOfOfficers',
    'formerEntityName',
    'paidUpCapitalCurrency',
    'paidUpCapitalOrdinary',
    'paidUpCapitalPreference',
    'paidUpCapitalOthers',
    'uenOfAuditFirm',
    'nameOfAuditFirm',    
    'actions',
  ];

  dataSource = this.listEntity;


  constructor(private entityService: CorporateEntityService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(){
    this.entityService.getAllEntities().subscribe((data: CorporateEntity[])=>{
      this.dataSource = data;
    })
  }

  deleteEntity(id: string){
    this.entityService.deleteEntity(id).subscribe(data => {
      this.loadEntities();
    })

    this._snackBar.open('Entity Deleted with exit', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })

  }





  
}
