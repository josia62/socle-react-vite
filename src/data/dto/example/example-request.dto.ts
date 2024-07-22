export type ExampleRequestDTO = {
  id:string
  email: string;
  password: string;
};

export const defaultExampleRequest  = {
  username: "",
  email: "",
  sex: 'male',
  dob: new Date()
}

export const EXAMPLE_FIELD  = {
  USER_NAME: 'username',
  EMAIL: 'email',
  SEX: 'sex',
  DATE_OF_BIRTH: 'dob'
}


