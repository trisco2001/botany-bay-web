import { Injectable } from '@angular/core';
import { isNullOrUndefined, isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ItemLevelService {

  constructor() { }

  calculateItemLevel(characterData): number {
    if (isNullOrUndefined(characterData)) {
      return 0;
    }

    const itemsThatCount = [
      'back',
      'chest',
      'feet',
      'finger1',
      'finger2',
      'hands',
      'head',
      'legs',
      'mainHand',
      'offHand',
      'neck',
      'shoulder',
      'trinket1',
      'trinket2',
      'waist',
      'wrist'
    ];

    const itemsPresentOnCharacter = itemsThatCount.filter(item => {
      return item in characterData.items;
    });

    const itemLevelsForItemsPresentOnCharacter = itemsPresentOnCharacter.map(item => {
      return characterData.items[item].itemLevel;
    });

    return itemLevelsForItemsPresentOnCharacter.reduce((a, b) => a + b) / itemsPresentOnCharacter.length;
  }
}
