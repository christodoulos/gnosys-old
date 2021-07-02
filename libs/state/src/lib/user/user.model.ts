export interface User {
  uid: string;
  family_name: string;
  given_name: string;
  email: string;
  photoURL: string;
  displayName: string;
  emailVerified: boolean;
  loading: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}
