const Lodash = require("./sync");
const _ = new Lodash;

describe('Lodash: compact', () => {
	let arr;

	/*Этот блок кода будет запускаться перед началом каждого теста.
	Таким образом тесты будут независимы друг от друга*/
	beforeEach(() => {
		arr = [false, 42, 0, "", true, null, "hello"];
	});

	test('should be defined', () => {
		//Значение определено
		expect(_.compact).toBeDefined();
		expect(_.compact).not.toBeUndefined();
	});

	test('should remove falsy value from array', () => {

		const result = [42, true, "hello"];

		//Переданный массив должен быть похож на ожидаемый результат
		expect(_.compact(arr)).toEqual(result);
	});

	test('should NOT contain falsy values', () => {

		/*Переданный массив не должен содержать перечисленные значения*/
		expect(_.compact(arr)).not.toContain(false);
		expect(_.compact(arr)).not.toContain("");
		expect(_.compact(arr)).not.toContain(0);
		expect(_.compact(arr)).not.toContain(null);
	});
});

describe('Lodash: groupBy', () => {

	test('should be defined', () => {
		//Значение определено
		expect(_.groupBy).toBeDefined();
		expect(_.groupBy).not.toBeUndefined();
	});

	test('should group array items by Math.floor', () => {
		const arr = [2.2, 2.4, 4.2, 3.1];
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1],
		};

		expect(_.groupBy(arr, Math.floor)).toEqual(result);
	});

	test('should group array items by length', () => {
		const arr = ["one", "two", "three"];
		const result = {
			5: ["three"],
			3: ["one", "two"],
		};

		expect(_.groupBy(arr, "length")).toEqual(result);
	});

	test('should NOT return array', () => {
		/*Ожидаем , что результат не является инстансом массива*/
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
	});

});
