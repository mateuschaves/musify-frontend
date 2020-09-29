export type SignUpProps = {
  name: string;
  email: string;
  password: string;
  history?: History<any>;
};

export type SignInProps = {
  email: string;
  password: string;
  history?: History<any>;
};
