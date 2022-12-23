function GetAllUsersPresentationModel({ userName, index }) {
  this.getUserName = () => userName;

  this.getIndex = () => index;

  this.toObject = () => ({
    userName: this.getUserName(),
    index: this.getIndex(),
  });
}

export default GetAllUsersPresentationModel;
