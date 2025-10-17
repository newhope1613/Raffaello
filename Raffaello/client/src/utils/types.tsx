export type CardType = {
  onClose: () => void;
};

export type AuthType = {
  phone: string;
  password: string;
};

export type RegistrType = {
  fullname: string;
  phone: string;
  password: string;
  checkbox: boolean;
}