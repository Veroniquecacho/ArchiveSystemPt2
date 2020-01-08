import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { Equipment } from './entities/equipment';
import { equipmentReducer } from './equipment.reducer';

export class EquipmentState{
    isLoggedIn: boolean;
    equipment: Equipment[];
  isLoading: boolean;
    
}
export class AppState {
    equipment?: EquipmentState;
  }
  export const rootReducer = combineReducers<AppState>({
    equipment: equipmentReducer,
    router: routerReducer
  } as any);
  