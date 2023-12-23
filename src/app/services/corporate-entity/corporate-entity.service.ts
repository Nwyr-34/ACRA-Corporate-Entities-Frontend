import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorporateEntityService {

  private API_SERVER = "http://localhost:8080/entities";
  constructor() { }

}
