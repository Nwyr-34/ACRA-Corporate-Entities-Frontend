import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorporateEntity } from 'src/app/interfaces/corporate-entity';

@Injectable({
  providedIn: 'root'
})
export class CorporateEntityService {

  private API_SERVER = "http://localhost:8080/api/v1/entities";
  constructor(private http: HttpClient) { }

  public getAllEntities(): Observable<any>{
    return this.http.get<any>(this.API_SERVER);
  }

  public deleteEntity(id: string): Observable<any>{
    return this.http.delete<any>(this.API_SERVER + "/" + id);
  }

  public createEntity(entity: CorporateEntity): Observable<any>{
    return this.http.post<CorporateEntity>(this.API_SERVER + "/create-entities", entity);
  }


}
