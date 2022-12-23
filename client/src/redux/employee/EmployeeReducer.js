import { GET_EMPLOYEE } from "./EmployeeTypes"
import { GET_EMPLOYEE_SUCCESS } from "./EmployeeTypes"
import { GET_EMPLOYEE_FAILURE,ADD_EMPLOYEE ,GET_EMPLOYEE_BY_ID,EDIT_EMPLOYEE,DELETE_EMPLOYEE} from "./EmployeeTypes"
const initialState = {
    data : [],
    error : null,
    employee:null
}

const employeeReducer = (state = initialState,action) => {
    switch(action.type) {
        case GET_EMPLOYEE: return{
            ...state,
            
        };
        case GET_EMPLOYEE_SUCCESS : return{
            ...state,
            data: action.payload
        };
        case GET_EMPLOYEE_FAILURE: return{
            ...state,
            error:action.payload
        };
        case ADD_EMPLOYEE: return{
            ...state,
        };
        case GET_EMPLOYEE_BY_ID: return{
            ...state,
            employee:action.payload
        };
        case EDIT_EMPLOYEE: return{
            ...state,
        };
        case DELETE_EMPLOYEE: return{
            ...state,
        };

        default: return state;
    }
};

export default employeeReducer