const Doctor = require("../models/doctor");
const Slot = require("../models/slots");
const { allocateToken, cancelToken, noShow } = require("../services/allocationService");


const d1 = new Doctor(1, "Dr A");
const d2 = new Doctor(2, "Dr B");
const d3 = new Doctor(3, "Dr C");

const s1 = new Slot(1, d1.id, "9:00", "9:30", 2);
const s2 = new Slot(2, d2.id, "9:00", "9:30", 2);
const s3 = new Slot(3, d3.id, "9:00", "9:30", 2);


console.log(allocateToken(s1, "Rahul", "online"));
console.log(allocateToken(s1, "Sita", "walkin"));

console.log(allocateToken(s2, "Mohan", "followup"));
console.log(allocateToken(s2, "Rina", "online"));

console.log(allocateToken(s3, "Aman", "paid"));

// Emergency
console.log(allocateToken(s1, "Kiran", "emergency"));

// Cancellation
console.log(cancelToken(s1, "Rahul"));

// No-show
console.log(noShow(s2, "Mohan"));

// Final State
console.log("\nFINAL STATE:");
console.log(s1);
console.log(s2);
console.log(s3);
