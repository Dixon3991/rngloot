import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';
import { INDEXITEMS } from '../shared/equipmentIndex';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor() { }

  getIndexItems(): Equipment[] {
    return INDEXITEMS;
  }
}
