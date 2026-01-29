class Token {
  constructor(id, patientName, type, priority) {
    this.id = id;
    this.patientName = patientName;
    this.type = type;
    this.priority = priority;
    this.status = "active";
  }
}

module.exports = Token;
