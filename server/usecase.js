import getAllUsersConverter from "./converter";
import GetUsersRepo from "./repo";

const getAllUsers = ({ observer }) => {
  const usersRepo = new GetUsersRepo();
  usersRepo.getAllUsers({
    success: (response) => {
      observer.getSuccess(getAllUsersConverter(response));
    },
    failure: (error) => {
      observer.getFailure(error);
    },
  });
};

export default getAllUsers;
