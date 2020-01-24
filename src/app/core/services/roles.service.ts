import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  roles = {
    mdps: {
      name: "Melee DPS"
    },
    rdps: {
      name: "Ranged DPS"
    },
    tank: {
      name: "Tank"
    },
    healer: {
      name: "Healer"
    }
  }
}
