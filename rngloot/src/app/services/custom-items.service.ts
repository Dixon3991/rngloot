import { Injectable } from '@angular/core';
import { LootItem } from '../models/lootItem';
import { LOOTITEMS } from '../shared/lootItems';

@Injectable({
  providedIn: 'root'
})
export class CustomItemsService {

  constructor() { }

  getLootItems(): LootItem[] {
    return LOOTITEMS;
  }
}
