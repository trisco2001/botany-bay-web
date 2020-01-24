import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }

  roles = {
    mdps: {
      name: "Melee DPS",
      description: "Shanky-danks!",
      icon: "fa-hammer"
    },
    rdps: {
      name: "Ranged DPS",
      description: "Afraid of knives",
      icon: "fa-fire"
    },
    tank: {
      name: "Tank",
      description: "The punching bags",
      icon: "fa-shield-alt"
    },
    healer: {
      name: "Healer",
      description: "Mistake insurance",
      icon: "fa-plus-square"
    },
    unset: {
      name: "No Role",
      description: "The indecisive",
      icon: "fa-question-circle"
    }
  }
}
