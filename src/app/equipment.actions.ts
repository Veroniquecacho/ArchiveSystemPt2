import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Equipment } from './entities/equipment';
import { EquipmentApiService } from './api/equipment-api.service';

@Injectable({providedIn: 'root'})
export class EquipmentActions{
 
  constructor(private ngRedux: NgRedux<AppState>, private api: EquipmentApiService){}

  static LOG_IN: string= 'LOG_IN';

  static CREATE_EQ: string = 'CREATE_EQ'; 

  static GET_EQ_LOADING: string = 'GET_EQLOADING';
  static GET_EQ_SUCCESS: string = 'GET_EQ_SUCCESS';
  static GET_EQ_FAILED: string = 'GET_EQ_FAILED';

  setLoggedIn(isLoggedIn: boolean): void{
      console.log(isLoggedIn);

      this.ngRedux.dispatch({
          type: EquipmentActions.LOG_IN,
          payload: isLoggedIn
      });
  }

  createEQ(equipment: Equipment) :void {
    this.ngRedux.dispatch({
      type: EquipmentActions.CREATE_EQ,
      payload: equipment
    }); 
  }

  getEquipment() : void {
    this.ngRedux.dispatch({ type: EquipmentActions.GET_EQ_LOADING }); // start a "spinner"

    // call the ws
    this.api.getAllEQ().subscribe(equipment => {
      console.log(equipment);
      console.log(equipment.filter(quiz => quiz.apiId === 'vero'));
      this.ngRedux.dispatch({
        type: EquipmentActions.GET_EQ_SUCCESS,
        payload: equipment.filter(quiz => quiz.apiId === 'vero')
      })
    }, error => {
      this.ngRedux.dispatch({
        type: EquipmentActions.GET_EQ_FAILED,
        payload: error
      })
    });

    // this.ngRedux.dispatch({type: QuizActions.GET_QUIZZES_SUCCESS}) // We do not wait for the reponse
  }



}