import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {
  @Input() backgroundImageUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
