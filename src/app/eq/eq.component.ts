import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipment } from '../entities/equipment';

@Component({
  selector: 'app-eq',
  templateUrl: './eq.component.html',
  styleUrls: ['./eq.component.scss']
})
export class EqComponent implements OnInit {
  @Input() equipmentInput: Equipment;
 // @Input() equipmentInput: Equipment;
  @Output() equipmentClicked: EventEmitter<Equipment> = new EventEmitter<Equipment>(); 

  constructor() { }

  ngOnInit() {
  }

  emitEquipmentClicked() {
    this.equipmentClicked.emit(this.equipmentInput);
  }

}
