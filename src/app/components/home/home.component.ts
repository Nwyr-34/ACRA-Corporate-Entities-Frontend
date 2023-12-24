import { Component } from '@angular/core';
import { CorporateEntityService } from 'src/app/services/corporate-entity/corporate-entity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  entity: any[] = [];

  constructor(private entityService: CorporateEntityService) { }

  ngOnInit(): void {
    this.filldata();
  }

  filldata(){
    this.entityService.getAllEntities().subscribe((data: any[])=>{
      this.entity = data;
    })
  }
  
}
