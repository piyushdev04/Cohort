/*
    a clock that displays the current machine time in both 24-hour and 12-hour (AM/PM) formats.
*/

function showTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const time24 = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const time12 = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

    console.log(`24-hours format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

setInterval(showTime, 1000);