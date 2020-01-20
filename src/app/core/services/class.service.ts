import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes: Record<number, {name: string, color: string}> = {
    1: {
      name: "Warrior",
      color: "#C79C6E"
    },
    2: {
      name: "Paladin",
      color: "#F58CBA"
    },
    3: {
      name: "Hunter",
      color: "#A9D271"
    },
    4: {
      name: "Rogue",
      color: "#FFF569"
    },
    5: {
      name: "Priest",
      color: "#FFFFFF"
    },
    6: {
      name: "Death Knight",
      color: "#C41F3B"
    },
    7: {
      name: "Shaman",
      color: "#0070DE"
    },
    8: {
      name: "Mage",
      color: "#40C7EB"
    },
    9: {
      name: "Warlock",
      color: "#8787ED"
    },
    10: {
      name: "Monk",
      color: "#00FF96"
    },
    11: {
      name: "Druid",
      color: "#FF7D0A"
    },
    12: {
      name: "Demon Hunter",
      color: "#A330C9"
    }
  }

  constructor() { }
}
