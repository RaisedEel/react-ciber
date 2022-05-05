const getTimeInMinutes = () => {
  const timezoneDiff = new Date().getTimezoneOffset() * 60000;
  const todayDate = new Date().getTime() - timezoneDiff;

  return todayDate / (1000 * 60);
};

export default getTimeInMinutes;
