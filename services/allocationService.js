const Token = require("../models/token");

const PRIORITY = {
  emergency: 100,
  paid: 80,
  followup: 60,
  online: 40,
  walkin: 20
};

let tokenCounter = 1;

function allocateToken(slot, patientName, type) {
  const token = new Token(tokenCounter++, patientName, type, PRIORITY[type]);

  if (slot.tokens.length < slot.capacity) {
    slot.tokens.push(token);
    return `${patientName} added to slot`;
  }

  // find lowest priority token
  let lowestIndex = 0;
  for (let i = 1; i < slot.tokens.length; i++) {
    if (slot.tokens[i].priority < slot.tokens[lowestIndex].priority) {
      lowestIndex = i;
    }
  }

  if (token.priority > slot.tokens[lowestIndex].priority) {
    const removed = slot.tokens.splice(lowestIndex, 1)[0];
    slot.waitingQueue.push(removed);
    slot.tokens.push(token);
    return `${removed.patientName} removed, ${patientName} inserted`;
  } else {
    slot.waitingQueue.push(token);
    return `${patientName} added to waiting queue`;
  }
}

function cancelToken(slot, patientName) {
  slot.tokens = slot.tokens.filter(t => t.patientName !== patientName);

  if (slot.waitingQueue.length > 0) {
    const next = slot.waitingQueue.shift();
    slot.tokens.push(next);
    return `${patientName} cancelled, ${next.patientName} moved from waiting`;
  }

  return `${patientName} cancelled`;
}

function noShow(slot, patientName) {
  return cancelToken(slot, patientName);
}

module.exports = {
  allocateToken,
  cancelToken,
  noShow
};
