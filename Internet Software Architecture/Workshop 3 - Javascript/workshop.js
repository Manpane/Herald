//1. Area of triangle
triArea = (b,h) => (b*h)/2;

//2. Return something to me!
giveMeSomething = (string) => "something"+string;

//3. Basketball points
points = (twos,threes) => twos*2+threes*3;

//4. Less than 100?
lessThan100 = (a,b) => (a+b)<100;

//5. Add up numbers from a single number (sum of first n natural numbers)
addUp = num => (num*(num+1))/2;

//6. Oddish vs. Evenish
oddishOrEvenish = (num) => {
	let sum = 0;
	for(let c of num.toString()){
		sum+=parseInt(c);
	}
	return (sum%2==0 ? 'Evenish' : 'Oddish');
}


//7. Any Prime Number in Range
isPrime = (number) => {
	for(let i = 2;i<number/2;i++){
		if (number%i==0){
			return false;
		}
	}
	return true;
}
primeInRange = (a,b) => {
	for(let num = a;num<=b;num++){
		if (isPrime(num)){
			return true;
		}
	}
	return false;
}


//8. Left shift by powers of two
shiftToLeft = (a,b) => a*Math.pow(2,b);

//9. Convert a number to base-2
binary = (num) => {
	if (num==0){return num;}
	bits = "";
	while(num!=0){
		bits = (num%2) + bits;
		num=Math.floor(num/2);
	}
	return bits
}
