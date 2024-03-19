const vaccineService=require("../services/vaccine.services")
const scheduleService=require("../services/schedule.services")
const childservice=require("../services/child.services");


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
    const nextScheduleDate = new Date(birthday);
    nextScheduleDate.setMonth(nextScheduleDate.getMonth() + monthsToAdd);
  
    return nextScheduleDate;
  } 
   async function getChildVaccinationHistory(req, res) {
    try {
   
  const mother_id=req.mother_id;


    const  mother_Id  = req.params;
    const childidbymother=await childservice.getchildbymother(mother_id)
   
      // Retrieve the child's information including their birthday
      const child = await childservice.getchildbyid(childId);
  
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