import axios from "axios";
import {
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE,
 EDIT_EMPLOYEE,
 GET_EMPLOYEE_BY_ID,
 DELETE_EMPLOYEE
} from "./EmployeeTypes";

//get Employees
export const getEmployees = () => {
  return {
    type: GET_EMPLOYEE,
  };
};

export const getEmployeesSuccess = (data) => {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    payload: data,
  };
};

export const getEmployeesFailure = (err) => {
  return {
    type: GET_EMPLOYEE_FAILURE,
    payload: err,
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(getEmployees);
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        const data = response.data;
        dispatch(getEmployeesSuccess(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(getEmployeesFailure(errMsg));
      });
  };
};

//Create employees

export const addEmployee = () => {
  return {
    type: ADD_EMPLOYEE,
  };
};

export const pushEmployee = (employee) => {
  return (dispatch) => {
    dispatch(getEmployees);
    axios
      .post("http://localhost:5000/record/add", employee)
      .then((response) => {
        console.log("resp from create", response);
        dispatch(addEmployee());
      })
      .catch((error) => {
        console.log("error from create", error);
      });
  };
};

//get employee by id

const getEmployeeById = (employee) => ({
    type:GET_EMPLOYEE_BY_ID,
    payload:employee
})


export const getEmployeeByIdFunc = (id) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:5000/record/${id}`)
        .then((response) => {
          console.log("resp from get user by id", response);
          dispatch(getEmployeeById(response.data));
        })
        .catch((error) => {
          console.log("error from get user by id", error);
        });
    };
  };

  //edit employee

  const editEmployee = () => ({
    type:EDIT_EMPLOYEE,
})


export const editEmployeeFunc = (employee,id) => {
    return (dispatch) => {
      axios
        .post(`http://localhost:5000/update/${id}`,employee)
        .then((response) => {
          console.log("resp from edit", response);
          dispatch(editEmployee());
        })
        .catch((error) => {
          console.log("error from edit", error);
        });
    };
  };

//DELETE EMPLOYEE

const deleteEmployee = () => ({
    type:DELETE_EMPLOYEE,
   
})


export const deleteEmployeeFunc = (id) => {
    return (dispatch) => {
      axios
        .delete(`http://localhost:5000/${id}`)
        .then((response) => {
          console.log("resp from delete", response);
          dispatch(deleteEmployee());
        })
        .catch((error) => {
          console.log("error from delete", error);
        });
    };
  };

