import { tassign } from 'tassign';
import { EquipmentState } from "./store";
import { EquipmentActions } from './equipment.actions';
import { TempDataService } from './service-temp/temp-data.service';

let temp = new TempDataService(); 
const INITIAL_STATE: EquipmentState = {isLoggedIn: false, equipment: [], isLoading: false }
export function equipmentReducer(state: EquipmentState = INITIAL_STATE, action:any){
    switch(action.type){
        case EquipmentActions.LOG_IN: 
        console.log(action);
        return tassign(state,{isLoggedIn: action.payload})
        
        case EquipmentActions.GET_EQ_LOADING:
            return tassign(state, { isLoading: true });
          
        case EquipmentActions.GET_EQ_SUCCESS:
            return tassign(state, {isLoading: false, equipment: action.payload });
        
        
        case EquipmentActions.GET_EQ_FAILED:
            return tassign(state, {isLoading: false});
        
        case EquipmentActions.CREATE_EQ:
        
           return tassign(state, { equipment: [...state.equipment, action.payload] });
        

        default:
            return state;
    }
}
