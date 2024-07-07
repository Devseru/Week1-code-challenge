function Speedmonitor() {
    let speed = prompt("Enter car speed (km/h):");
    speed = Number(speed);

    if (isNaN(speed) || speed < 0) {
        console.log("Not a valid input.");
        return;
    }

    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

Speedmonitor();

