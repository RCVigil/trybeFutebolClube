interface IUsersAdd {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
}

export default IUsersAdd;
export { IUser };
