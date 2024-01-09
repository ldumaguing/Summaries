const STRs = [0, 1, 2, 3, 4, 5, 8, 10, 13, 15,
	18, 20, 23, 25, 28, 30, 35, 40, 45, 50,
	55, 60, 65, 70, 75, 80, 85, 90, 95, 100
];
const lifts = [0, 8, 16, 25, 38, 50, 75, 100, 150, 200,
	300, 400, 600, 800, 1200, 1600, 3200, 6400, 12500, 25000,
	50000, 100000, 200000, 400000, 800000, 1600000, 3200000, 6400000, 12500000, 25000000
];

let str = 11;

let i = 29;
while(i >= 0) {
	if(str >= STRs[i]) {
		foo(str, i);
		return;
	}
	i--;
};

function foo(str, i) {
	console.log(str);
	console.log(i);
	if(str == STRs[i]) {
		console.log(":" + lifts[i]);
		return;
	}
	let high = STRs[i+1];
	let low = STRs[i];
	let delta = high - low;
	console.log(low + "," + high + " " + delta);
};



