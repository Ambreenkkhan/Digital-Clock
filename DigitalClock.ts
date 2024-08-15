function clock(): void {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today: Date = new Date();

  const dateElement = document.getElementById("Date");
  if (dateElement) {
    dateElement.innerHTML = `${dayNames[today.getDay()]} ${today.getDate()} ${
      monthNames[today.getMonth()]
    } ${today.getFullYear()}`;
  }
  let h: number | string = today.getHours();
  const m: number | string = today.getMinutes();
  const s: number | string = today.getSeconds();
  const day: string = h < 12 ? "AM" : "PM";

  h = h < 10 ? `0${h}` : h;
  const formattedM: string = m < 10 ? `0${m}` : `${m}`;
  const formattedS: string = s < 10 ? `0${s}` :`${s}`;
  const hoursElement = document.getElementById("hours");
  const minElement = document.getElementById("min");
  const secElement = document.getElementById("sec");

  if (hoursElement) {
    hoursElement.innerHTML = `${h}`;
  }
  if (minElement) {
    minElement.innerHTML = `${formattedM}`;
  }
  if (secElement) {
    secElement.innerHTML = `${formattedS}`;
  }
}

// Set the interval for updating the clock
const inter: NodeJS.Timeout = setInterval(clock, 400);
