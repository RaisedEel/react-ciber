import getDate from './getDate';
import getTimeInMinutes from './getTimeInMinutes';

// Converts the data received to a valid format to show on DeviceRentResult and store it
function getFinalResults(rentResult) {
  const timeNow = getTimeInMinutes();
  const duration = Math.floor(timeNow - rentResult.initialTime);

  const startTime = {
    hours: Math.floor((rentResult.initialTime / 60) % 24),
    minutes: Math.floor(rentResult.initialTime % 60),
  };

  const endTime = {
    hours: Math.floor((timeNow / 60) % 24),
    minutes: Math.floor(timeNow % 60),
  };

  let total = rentResult.price * Math.floor(duration / 60);
  if (duration % 60 >= 30) {
    total += rentResult.price * 1;
  } else {
    total += rentResult.price * 0.5;
  }

  return {
    id: rentResult.name + rentResult.initialTime + Math.random(),
    date: getDate(new Date()),
    name: rentResult.name,
    rentedHours: rentResult.rentedHours,
    price: rentResult.price,
    startTime: `${startTime.hours}:${
      startTime.minutes < 10 ? '0' + startTime.minutes : startTime.minutes
    }`,
    endTime: `${endTime.hours}:${
      endTime.minutes < 10 ? '0' + endTime.minutes : endTime.minutes
    }`,
    duration: duration,
    total: total,
  };
}

export default getFinalResults;
