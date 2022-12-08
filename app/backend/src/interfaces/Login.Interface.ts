interface ILogin {
  email: string;
  password: string;
}

export interface ILogValidateBody {
  password: string;
  email: string;
  role: string;
  username: string;
}

export interface ILogValidateHeader {
  authorization: string;
}

export default ILogin;
