const STRs = [0, 1, 2, 3, 4, 5, 8, 10, 13, 15,
	18, 20, 23, 25, 28, 30, 35, 40, 45, 50,
	55, 60, 65, 70, 75, 80, 85, 90, 95, 100
];
const lifts = [0, 8, 16, 25, 38, 50, 75, 100, 150, 200,
	300, 400, 600, 800, 1200, 1600, 3200, 6400, 12500, 25000,
	50000, 100000, 200000, 400000, 800000, 1600000, 3200000, 6400000, 12500000, 25000000
];

main(); function main() {
	let currSTR = 100;
	console.log("lift: " + getLift(currSTR));
}

function getLift(str) {
	if(str>100) return -1;

	let i = 29;
	while(i>=0) {
		if(str == STRs[i]) return getLift_unit(lifts[i]);   // on target
		if(STRs[i] < str) return getLift_a(str, i);
		i--;
	}
	return -1;
}

function getLift_a(str, i) {
	let deltaS = STRs[i+1] - STRs[i];
	let deltaL = lifts[i+1] - lifts[i];
	let deltaC = str - STRs[i];
	let X = ((deltaC / deltaS) * deltaL) + lifts[i];
	return getLift_unit(X);
}

function getLift_unit(lift) {
	if(lift >= 1000000) return ((lift * 0.000001).toFixed(1) + " ktons");
	if(lift >= 12500) return ((lift * 0.001) + " tons");
	return (lift + " kg");
}


