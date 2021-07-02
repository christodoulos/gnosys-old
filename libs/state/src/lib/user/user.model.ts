export interface User {
  uid: string;
  firstName?: string;
  lastName?: string;
  email: string;
  linkedinURL?: string;
  photoURL?: string;
  displayName?: string;
  emailVerified: boolean;
  loading?: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}
