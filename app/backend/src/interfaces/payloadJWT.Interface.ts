interface UserPayload {
  id: string;
}
interface JwtExpPayload {
  expiresIn: string;
  exp: number;
}

export {
  UserPayload,
  JwtExpPayload,
};
