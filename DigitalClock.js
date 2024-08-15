function clock() {
    const monthNames = [
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
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date();
    const dateElement = document.getElementById("Date");
    if (dateElement) {
        dateElement.innerHTML = `${dayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
    }
    let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const day = h < 12 ? "AM" : "PM";
    h = h < 10 ? `0${h}` : h;
    const formattedM = m < 10 ? `0${m}` : `${m}`;
    const formattedS = s < 10 ? `0${s}` : `${s}`;
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
const inter = setInterval(clock, 400);
