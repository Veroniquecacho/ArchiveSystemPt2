import { Injectable } from '@angular/core';
import { Equipment } from '../entities/equipment';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
 
  equipment: Equipment[];

  constructor() { 
    this.equipment = this.getEquipment();
  }

  getEquipment(): Equipment[] {
    return[{
      _id: '1',
      name: 'iPhone XR',
      type: 'phone',
      serialNo: '09hfydge7623h'
    },
    {
      _id: '2',
      name: 'MacBook Pro',
      type: 'Laptop',
      serialNo: '2937451823'
    }
  ]
  }
}
