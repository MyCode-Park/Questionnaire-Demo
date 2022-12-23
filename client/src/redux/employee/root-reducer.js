import { combineReducers } from "redux";
import employeeReducer from "./EmployeeReducer";

 const rootReducer = combineReducers({
 emp: employeeReducer
});
export default rootReducer