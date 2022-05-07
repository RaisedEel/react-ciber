// Get the current time on minutes and without timezone diff
// Used on the rents for calculating the duration of the rent when the component rerender
const getTimeInMinutes = () => {
  const timezoneDiff = new Date().getTimezoneOffset() * 60000;
  const todayDate = new Date().getTime() - timezoneDiff;

  return todayDate / (1000 * 60);
};

export default getTimeInMinutes;
