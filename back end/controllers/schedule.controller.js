const moment = require('moment');
const childservice = require("../services/child.services");

const schedulecontroller = {
  birthdateFromDatabase: async (req, res) => {
    const result = await childservice.getchildbyid();
    return res.status(200).json({
      success: true,
      data: result
    });
  }
};

// Get the child's birthdate from the database
const birthdate = moment(schedulecontroller.birthdateFromDatabase());

// Calculate the child's age in months
const ageInMonths = moment().diff(birthdate, 'months');

// Define the vaccination schedule rounds and their respective durations in months
const vaccinationSchedule = [
  { round: 'Birth', duration: 0 },
  { round: '1 Month', duration: 1 },
  { round: '3 Months', duration: 3 },
  { round: '6 Months', duration: 6 },
  { round: '1 Year', duration: 12 }
];

// Find the next vaccination round that hasn't passed yet
let nextVaccinationRound = null;
for (const schedule of vaccinationSchedule) {
  if (ageInMonths < schedule.duration) {
    nextVaccinationRound = schedule;
    break;
  }
}

// Calculate the next vaccination date if a round is found
let nextVaccinationDate = null;
if (nextVaccinationRound) {
  nextVaccinationDate = birthdate.clone().add(nextVaccinationRound.duration, 'months');
}

// Check if the next vaccination date has been reached
const currentDate = moment();
if (nextVaccinationDate && nextVaccinationDate.isSameOrBefore(currentDate, 'day')) {
  console.log('Next vaccination date reached. Notify the mother.');
} else {
  console.log('Next vaccination date not yet reached.');
}