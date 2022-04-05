import {toArray} from '../lib/utils/common';

class Info {
  constructor(data) {
    this._id = data._id;
    this.email = data.email;
    this.full_name = data.full_name;
    this.identifier = data.identifier;
    this.cell_phone = data.cell_phone;
    this.birth_date = data.birth_date;
    this.sex = data.sex === true ? 'true' : 'false';
    this.status = data.status;
    this.services = toArray(data.services);
    this.listOfServices = data.services;
  }
}

class User {
  constructor(data) {
    this.token = data.token;
    this.info = new Info(data.info || {});
    this.authenticated = data.authenticated || false;
  }
}

export default User;
