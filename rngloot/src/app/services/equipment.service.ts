import { Injectable } from '@angular/core';
import { Equipment } from '../models/equipment';
import { EquipmentItem } from '../models/equipmentItem';
import { INDEXITEMS } from '../shared/equipmentIndex';
import { EQUIPMENTITEMS } from '../shared/equipmentItems';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor() { }

  getIndexItems(): Equipment[] {
    return INDEXITEMS;
  }

  getIndexItem(name: string): Equipment {
    return INDEXITEMS.filter((indexitem) => (indexitem.name === name))[0];
  }

  getEquipmentItems(): EquipmentItem[] {
    return EQUIPMENTITEMS;
  }

  getEquipmentItem(index: string): EquipmentItem {
    return EQUIPMENTITEMS.filter((equpimentitem) => (equpimentitem.index === index))[0];
  }
  
}
