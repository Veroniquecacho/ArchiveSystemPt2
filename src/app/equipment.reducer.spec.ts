import { EquipmentActions } from "./equipment.actions";
import { equipmentReducer } from './equipment.reducer';

var deepFreeze = require('deep-freeze');

describe('equipment reducer tests', () =>{
    it('should set state to true when logging in',() =>{
        let startState = {isLoggedIn: undefined, equipment: [], isLoading: undefined};
        deepFreeze(startState);
        let actionObj = { 
          type: EquipmentActions.LOG_IN, payload: true};
        let newStateObj = equipmentReducer(startState, actionObj);
        expect(newStateObj).toEqual({isLoggedIn: true, equipment:[]});
    });

});