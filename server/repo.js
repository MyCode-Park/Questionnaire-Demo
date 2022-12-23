import HttpRequest from "./http_request";

function GetUsersRepo() {
  this.getAllUsers = ({ success, failure }) => {
    const httpRequest = HttpRequest();
    httpRequest.get({
      url: `http://localhost:8080/users`,
      success: (response) => {
        success(response);
      },
      failure: (error) => {
        failure(error);
      },
    });
  };
}

export default GetUsersRepo;
