import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource = new MatTableDataSource<CorporateEntity>(this.listEntity);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private entityService: CorporateEntityService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadEntities();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item: any, property) => {
      if (typeof item[property] === 'string') {
        const numericValue = parseFloat(item[property]);
        return isNaN(numericValue) ? item[property] : numericValue;
      }
      return item[property];
    };

    // Sort the numbers first and then the strings alphabetically
    this.dataSource.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction === '') {
        return data;
      }

      return data.sort((a, b) => {
        const valueA = this.dataSource.sortingDataAccessor(a, active);
        const valueB = this.dataSource.sortingDataAccessor(b, active);

        let comparatorResult = 0;

        // Ordena los números primero y luego las letras alfabéticamente
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          comparatorResult = valueA - valueB;
        } else if (typeof valueA === 'number') {
          comparatorResult = -1;
        } else if (typeof valueB === 'number') {
          comparatorResult = 1;
        } else if (valueA < valueB) {
          comparatorResult = -1;
        } else if (valueA > valueB) {
          comparatorResult = 1;
        }

        return comparatorResult * (direction === 'asc' ? 1 : -1);
      });
    };

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  loadEntities(){
    this.entityService.getAllEntities().subscribe((data: CorporateEntity[])=>{
      this.dataSource.data = data;
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
