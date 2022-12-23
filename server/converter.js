import GetAllUsersPresentationModel from "./model";

const getAllUsersConverter = (response) => {
  const AllUsers = response
    ? response.map(
        (item, index) =>
          new GetAllUsersPresentationModel({
            userName: item.userName,
            index: index + 1,
          })
      )
    : new GetAllUsersPresentationModel({});

  return AllUsers;
};

export default getAllUsersConverter;
