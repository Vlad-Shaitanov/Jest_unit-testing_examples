const expect = (value)=>{
	return {
		toBe: (exp)=>{
			if(value === exp){
				console.log("Success");
			}else{
				console.log(`Value is ${value}, but expectation is ${exp}`);
			}
		}
	};
};

const sum = (a, b) => a + b;
const nativeNull = () => null;

module.exports={sum, nativeNull};

expect(sum(10, 5)).toBe(15);
expect(sum(10, 5)).toBe(16);