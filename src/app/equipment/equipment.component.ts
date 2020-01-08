import { Component, OnInit } from '@angular/core';
import { EquipmentActions } from '../equipment.actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Equipment } from '../entities/equipment';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment[];
  isLoading: boolean;
  

  constructor(private ngRedux: NgRedux<AppState>,private equipmenActions: EquipmentActions) { }

  ngOnInit() {
    //Subscribe to the redux store (equipment).

    this.ngRedux.select(state => state.equipment).subscribe(result =>{
      this.equipment = result.equipment;
      this.isLoading = result.isLoading;
    });

    this.equipmenActions.getEquipment();
  }

  handleEquipmentClicked(equipment: Equipment) : void {
    // Do whatever I want to handle the event.
    //console.log(this.userSearch);
    // this.userSearch = 'Hi there'
    console.log(equipment);
  }

}
