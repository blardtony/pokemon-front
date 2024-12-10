export type LoginInputsType = {
  login: string;
  password: string;
};

export type SignInInputsType = {
  login: string;
  password: string;
  lastName: string;
  firstName: string;
  birthDate: Date | null;
};

export type SubscribeRequestData = {
  lastName: string;
  firstName: string;
  login: string;
  password: string;
  birthDate: string;
};
