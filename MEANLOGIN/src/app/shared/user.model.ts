export class UserModel{
    public username:string;
    public password:string;
    public firstName:string;
    public lastName:string;
    constructor(name: string, password: string, firstName: string, lastName:string) {
    this.username= name;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}