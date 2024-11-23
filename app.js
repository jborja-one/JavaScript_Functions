console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');
function printOdds(count) {
	if (count <= 0) console.log('Invalid number');

	for (let i = 0; i <= count; i++) {
		if (i % 2 != 0) console.log(i);
	}
}
printOdds(32);

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');
function checkAge(name, age) {
	let aboveSixteen = `Congrats ${name}, you can drive`;
	let belowSixteen = `Sorry ${name}, buy you have to wait until you're 16`;

	if (name === '' || name === undefined) {
		console.log('Please enter your name.');
	} else if (age < 1) {
		console.log(`${name} Please enter your correct age.`);
	} else if (age >= 16) {
		return console.log(aboveSixteen);
	} else {
		return console.log(belowSixteen);
	}
}
checkAge('John', 25);

// Exercise 3 Section
console.log('EXERCISE 3:\n==========\n');
function checkPointLocation(x, y) {
	if (x === 0 && y === 0) {
		console.log('The point (0, 0) is at the origin.');
	} else if (x === 0) {
		console.log(`The point (${x}, ${y}) is on the y-axis.`);
	} else if (y === 0) {
		console.log(`The point (${x}, ${y}) is on the x-axis.`);
	} else if (x > 0 && y > 0) {
		console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
	} else if (x < 0 && y > 0) {
		console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
	} else if (x < 0 && y < 0) {
		console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
	} else if (x > 0 && y < 0) {
		console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
	}
}
checkPointLocation(0, 2); //! this is on the Y axis, example says x-axis. please check.
checkPointLocation(1, 2);
checkPointLocation(-6, 18);

// Exercise 4 Section
console.log('EXERCISE 4:\n==========\n');
function triangleType(a, b, c) {
	// Check if the sides form a valid triangle
	if (a + b <= c || a + c <= b || b + c <= a) {
		return console.log('Invalid triangle');
	}

	// Determine the type of triangle
	if (a === b && b === c) {
		return console.log('Equilateral triangle');
	} else if (a === b || a === c || b === c) {
		return console.log('Isosceles triangle');
	} else {
		return console.log('Scalene triangle');
	}
}

// Example usage:
triangleType(1, 2, 2);
triangleType(1, 1, 2);
triangleType(3, 3, 3);
triangleType(3, 4, 5);

// Exercise 5 Section
console.log('EXERCISE 4:\n==========\n');
function dataPlanStatus(planLimit, day, usage) {
	const daysInCycle = 30;
	const daysRemaining = daysInCycle - day;

	const averageDailyUse = planLimit / daysInCycle;
	const currentDailyUse = usage / day;
	const projectedUsage = (currentDailyUse * daysInCycle).toFixed(2);
	const remainingData = planLimit - usage;
	const suggestedDailyUse = (remainingData / daysRemaining).toFixed(2);

	console.log(`${day} days used, ${daysRemaining} days remaining`);
	console.log(`Average daily use: ${averageDailyUse.toFixed(2)} GB/day`);

	if (usage > planLimit) {
		console.log('You have RUN OUT of data!');
	} else if (currentDailyUse > averageDailyUse) {
		const overage = (projectedUsage - planLimit).toFixed(2);
		console.log(
			`You are EXCEEDING your average daily use (${currentDailyUse.toFixed(
				2
			)} GB/day),`
		);
		console.log(
			`continuing this high usage, you'll exceed your data plan by ${overage} GB.`
		);
		console.log(
			`To stay below your data plan, use no more than ${suggestedDailyUse} GB/day.`
		);
	} else {
		console.log(
			`You are within your average daily use (${currentDailyUse.toFixed(
				2
			)} GB/day).`
		);
		console.log(
			`You can use up to ${suggestedDailyUse} GB/day for the rest of the cycle.`
		);
	}
}
dataPlanStatus(100, 15, 56);
