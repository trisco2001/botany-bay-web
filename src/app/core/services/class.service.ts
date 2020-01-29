import { Injectable } from '@angular/core';

export type ClassRole = "tank" | "healer" | "mdps" | "rdps"

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes: Record<number, {
    name: string,
    color: string,
    armor: "plate" | "mail" | "leather" | "cloth",
    supportedRoles: ClassRole[]
  }> = {
    1: {
      name: "Warrior",
      color: "#C79C6E",
      armor: "plate",
      supportedRoles: ["tank", "mdps"]
    },
    2: {
      name: "Paladin",
      color: "#F58CBA",
      armor: "plate",
      supportedRoles: ["tank", "healer", "mdps"]
    },
    3: {
      name: "Hunter",
      color: "#A9D271",
      armor: "mail",
      supportedRoles: ["mdps", "rdps"]
    },
    4: {
      name: "Rogue",
      color: "#FFF569",
      armor: "leather",
      supportedRoles: ["mdps"]
    },
    5: {
      name: "Priest",
      color: "#FFFFFF",
      armor: "cloth",
      supportedRoles: ["healer", "rdps"]
    },
    6: {
      name: "Death Knight",
      color: "#C41F3B",
      armor: "plate",
      supportedRoles: ["tank", "mdps"]
    },
    7: {
      name: "Shaman",
      color: "#0070DE",
      armor: "mail",
      supportedRoles: ["healer", "mdps", "rdps"]
    },
    8: {
      name: "Mage",
      color: "#40C7EB",
      armor: "cloth",
      supportedRoles: ["rdps"]
    },
    9: {
      name: "Warlock",
      color: "#8787ED",
      armor: "cloth",
      supportedRoles: ["rdps"]
    },
    10: {
      name: "Monk",
      color: "#00FF96",
      armor: "leather",
      supportedRoles: ["tank", "healer", "mdps"]
    },
    11: {
      name: "Druid",
      color: "#FF7D0A",
      armor: "leather",
      supportedRoles: ["tank", "healer", "mdps", "rdps"]
    },
    12: {
      name: "Demon Hunter",
      color: "#A330C9",
      armor: "leather",
      supportedRoles: ["tank", "mdps"]
    }
  }

  constructor() { }
}
