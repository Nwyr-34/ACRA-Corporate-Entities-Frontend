import { Component } from '@angular/core';
import { CorporateEntity } from 'src/app/interfaces/corporate-entity';



const ELEMENT_DATA: CorporateEntity[] = [
  { uen: '00031800X', issuanceAgencyId: 'ACRA', entityName: 'A M ABDULLAH SAHIB & CO', entityTypeDescription: 'Business', businessConstitutionDescription: 'Partnership', companyTypeDescription: 'na', entityStatusDescription: 'na', registrationIncorporationDate: '1974-10-12T00:00:00', uenIssueDate: '2008-09-09T00:00:00', addressType: 'LOCAL', block: 93, streetName: 'MARKET STREET', level: '10', unit: '01', buildingName: 'CYS BLDG', postalCode: '0104', accountDueDate: 'na', annualReturnDate: 'na', noOfCharges: 0, primarySsicCode: 46301, primarySsicDescription: 'WHOLESALE OF FRUITS AND VEGETABLES (INCLUDING FRESH AND FROZEN)', primaryUserDescribedActivity: 'na', secondarySsicCode: "32909", secondarySsicDescription: 'OTHER MANUFACTURING INDUSTRIES N.E.C.', secondaryUserDescribedActivity: 'na', noOfOfficers: 7, formerEntityName: 'na', paidUpCapitalCurrency: 'na', paidUpCapitalOrdinary: 'na', paidUpCapitalPreference: 'na', paidUpCapitalOthers: 'na', uenOfAuditFirm: 'na', nameOfAuditFirm: 'na' },

];


@Component({
  selector: 'app-entitites',
  templateUrl: './entitites.component.html',
  styleUrls: ['./entitites.component.css']
})
export class EntititesComponent {
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
  dataSource = ELEMENT_DATA;
}
