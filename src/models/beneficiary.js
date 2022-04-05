class Beneficiary {
  constructor(data) {
    this.patient_id = data._id;
    this.full_name = data.full_name;
    this.email = data.email;
    this.birth_date = data.birth_date;
    this.identifier = data.identifier;
    this.sex = data.sex;
    this.cell_phone = data.cell_phone;
  }
}

export default Beneficiary;
