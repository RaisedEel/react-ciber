function getDate(date) {
  const timezoneDiff = new Date().getTimezoneOffset() * 60000;
  const localeDate = new Date(date - timezoneDiff).toISOString().slice(0, 10);

  return localeDate;
}

export default getDate;
