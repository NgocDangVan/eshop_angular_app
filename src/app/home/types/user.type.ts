export interface user {
  lastName : string;
  firstName : string;
  address : string;
  city : string;
  state : string;
  pin : string;
  email : string;
  password: string;
}

export interface userLogin {
  email: string;
  password: string;
}

export interface loginToken {
  token: string;
  expiresInSeconds: number;
}
