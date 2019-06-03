const currentDay = new Date();
const currentYear = currentDay.getYear() + 1900;
const newYearsDay = new Date(currentYear, 0, 1);
const dayCount = Math.ceil((currentDay - newYearsDay) / 86400000)
let count = 0;
let goalPercentage;

const pennyCalc = (dayCount) => {
  if (dayCount === 0) {
    goalPercentage = ((count / 667.95) * 100).toFixed(1);
    return count;
  }
  const pennies = (dayCount / 100)
  count = count + pennies;
  return pennyCalc(dayCount - 1);
};

const currentSavings = (pennyCalc(dayCount));

export {
  dayCount,
  currentDay,
  currentYear,
  currentSavings,
  goalPercentage
}
