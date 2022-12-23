import React, { useState, useEffect } from "react";
import axios from "axios";
// import getAllUsers from "server2/usecase.js";


function EmployeeContainer() {
  const [message, setMessage] = useState();

  console.log();

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  // const getTableData = React.useCallback(() => {
  //   process.env.UseCase({
  //     observer: {
  //       getSuccess: (response) => {
  //         setMessage(response);
  //         console.log("Response", response);
  //       },
  //       getFailure: (err) => {
  //         console.log(err);
  //       },
  //     },
  //   });
  // }, []);

  // React.useEffect(() => {
  //   getTableData();
  // }, [getTableData]);

  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}

export default EmployeeContainer;
