import client from "../client";
import { SignInProps, SignUpProps } from "../../../@types/Auth";

const signUp = ({ name, email, password }: SignUpProps) => {
  return client({
    url: "auth/signup",
    method: "POST",
    data: {
      name,
      email,
      password,
    },
  });
};

const signIn = ({ email, password }: SignInProps) => {
  return client({
    url: "auth/signin",
    method: "POST",
    data: {
      email,
      password,
    },
  });
};

export default {
  signUp,
  signIn,
};
