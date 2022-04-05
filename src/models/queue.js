class Queue {
  constructor(data) {
    this.position = data.position || 0;
    this.status = data.status || false;
    this.connection = data.connection || {
      api: null,
      token: null,
      sessionId: null,
    };
    this.doctor = data.doctor || {
      full_name: null,
      university: null,
      speciality: null,
      graduation_year: null,
      sex: null,
    };
  }
}

export default Queue;
