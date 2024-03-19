// 
const Child = require('../models/Child');
const Schedule = require('../models/Schedule');
const Vaccine = require('../models/Vaccine');

// Calculate the next schedule date based on the child's birthday and the round number
function calculateNextScheduleDate(birthday, round) {
  // Calculate the number of months based on the round
  let monthsToAdd;
  switch (round) {
    case 1:
      monthsToAdd = 0;
      break;
    case 2:
      monthsToAdd = 1;
      break;
    case 3:
      monthsToAdd = 3;
      break;
    case 4:
      monthsToAdd = 6;
      break;
    case 5:
      monthsToAdd = 12;
      break;
    case 6:
      monthsToAdd = 36;
      break;
    default:
      monthsToAdd = 0;
  }

  // Calculate the next schedule date by adding the months to the child's birthday
  const nextScheduleDate = new Date(birthday);
  nextScheduleDate.setMonth(nextScheduleDate.getMonth() + monthsToAdd);

  return nextScheduleDate;
}

// Controller function to get the child's vaccination history
async function getChildVaccinationHistory(req, res) {
  const { childId } = req.params;

  try {
    // Retrieve the child's information including their birthday
    const child = await Child.findById(childId);

    if (!child) {
      return res.status(404).json({ message: 'Child not found' });
    }

    // Retrieve the schedules associated with the child
    const schedules = await Schedule.find({ child_id: childId }).populate('vaccine_id');

    // Prepare the vaccination history object
    const vaccinationHistory = {
      child: child,
      history: [],
    };

    // Iterate through the schedules and build the vaccination history
    for (const schedule of schedules) {
      const vaccine = schedule.vaccine_id;
      const historyItem = {
        date: schedule.date,
        vaccine: {
          name: vaccine.name,
          description: vaccine.description,
        },
      };
      vaccinationHistory.history.push(historyItem);
    }

    return res.status(200).json(vaccinationHistory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to schedule the next vaccination
async function scheduleNextVaccination(req, res) {
  const { childId } = req.params;

  try {
    // Retrieve the child's information including their birthday
    const child = await Child.findById(childId);

    if (!child) {
      return res.status(404).json({ message: 'Child not found' });
    }

    // Retrieve the next round of vaccination based on the child's previous schedules
    const previousSchedules = await Schedule.find({ child_id: childId }).sort('-round').limit(1);
    const nextRound = previousSchedules.length === 0 ? 1 : previousSchedules[0].round + 1;

    // Retrieve the corresponding vaccine for the next round
    const vaccine = await Vaccine.findOne({ round: nextRound });

    if (!vaccine) {
      return res.status(404).json({ message: 'Vaccine not found' });
    }

    // Calculate the next schedule date based on the child's birthday and the round number
    const nextScheduleDate = calculateNextScheduleDate(child.birthday, nextRound);

    // Create a new schedule entry
    const newSchedule = new Schedule({
      mother_id: child.mother_id,
      child_id: childId,
      date: nextScheduleDate,
      vaccine_id: vaccine._id,
      round: nextRound,
    });

    await newSchedule.save();

    return res.status(201).json({ message: 'Vaccination scheduled successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getChildVaccinationHistory,
  scheduleNextVaccination,
};