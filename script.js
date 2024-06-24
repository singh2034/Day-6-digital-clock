setInterval(function () {
  let currentDateTime = new Date();
  // Date
  let currentDate = currentDateTime.getDate();
  let currentMonth = currentDateTime.getMonth() + 1; //in JS January is indexed at 0 and Feb at 1 hence, + 1.
  let currentYear = currentDateTime.getFullYear();
  if (currentDate < 10) {
    currentDate = "0" + currentDate;
  }
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }

  document.getElementById("date").innerHTML =
    currentDate + "/" + currentMonth + "/" + currentYear;
  // Time
  let currentHour = currentDateTime.getHours();
  let currentMinute = currentDateTime.getMinutes();
  let currentSecond = currentDateTime.getSeconds();
  let period = "AM";
  //   condition for AM or PM
  if (currentHour >= 12) {
    period = "PM";
  }
  //   conditions for 12 Hours Time
  if (currentHour > 12) {
    currentHour = currentHour - 12;
  }
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }
  if (currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  if (currentSecond < 10) {
    currentSecond = "0" + currentSecond;
  }
  document.getElementById("time").innerHTML =
    currentHour + ":" + currentMinute + ":" + currentSecond + period;
});
