const { expect } = require("@jest/globals");
const {sum, nativeNull} = require("./intro");

describe("Sum function:", ()=>{
	test("should return sum of two values", ()=>{

	//Результат равен ожидаемомузначению
	expect(sum(10, 5)).toBe(15);

	//Результат эквивалентен ожидаемомузначению
	expect(sum(10, 20)).toEqual(30);
	});

	test("should return correctly value comparing to other values", ()=>{

		//Результат больше ожидаемого значение
		expect(sum(2, 2)).toBeGreaterThan(3);

		//Результат больше или равен ожидаемому значению
		expect(sum(2, 1)).toBeGreaterThanOrEqual(3);

		//Результат меньше ожидаемого значения
		expect(sum(2, 5)).toBeLessThan(10);

		//Результат меньше или равен ожидаемому значению
		expect(sum(2, 5)).toBeLessThanOrEqual(7);
	});

	test("should sum 2 float values correctly", ()=>{

		// Результат должен быть близок к ожиданию
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
		// expect(sum(10, 20)).toEqual(30);
	});
});

describe("Native null function:", ()=>{
	
	test("should return false value null", ()=>{

		//Значение равно null
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();

		//Значение должно быть falsy
		expect(nativeNull()).toBeFalsy();

		//Значение определено
		expect(nativeNull()).toBeDefined();

		//Значение не truthy
		expect(nativeNull()).not.toBeTruthy();

		//Значение не должно быть undefined
		expect(nativeNull()).not.toBeUndefined();
	});
});