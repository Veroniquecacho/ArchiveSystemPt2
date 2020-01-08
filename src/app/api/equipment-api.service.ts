import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../entities/equipment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentApiService {

  private baseUrl: string = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }
  
  createEQ(equipment: Equipment) : Observable<any> {
    equipment.apiId = 'vero';
    return this.http.post(this.baseUrl, equipment);
  }

  getAllEQ(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.baseUrl);
  }

  updateEQ(equipment: Equipment) : Observable<any> {
    return undefined;
  }

  deleteEQ(id: string) : Observable<any> {
    return undefined;
  }
}