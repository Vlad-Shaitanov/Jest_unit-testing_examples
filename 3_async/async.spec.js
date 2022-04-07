const axios = require('axios');
const Ajax = require("./async");

jest.mock("axios");

describe('Ajax: echo', () => {

	/*===== Вариант с async/await =====*/
	test('should return value async', async () => {
		const result = await Ajax.echo("some words");
		expect(result).toBe("some words");
	});

	test('should catch error with async', async () => {
		try {
			await Ajax.echo();
		} catch (error) {
			expect(error.message).toBe("Error");
		}
	});

	/*===== Вариант с промисами =====*/
	test('should return value with promise', () => {
		return Ajax.echo("some words")
			.then(data => {
				expect(data).toBe("some words");
			});
	});

	test('should catch error with promise', () => {
		return Ajax.echo()
			.catch(error => {
				expect(error).toBeInstanceOf(Error);
			});
	});

});

describe('Ajax: GET', () => {

	let response;
	let todos;

	beforeEach(() => {
		todos = [
			{
				id: 1,
				title: "Todo1",
				completed: false,
			}
		];

		response = {
			data: {
				todos
			}
		};
	});

	test('should return data from backend', () => {
		/*Когда axios будет делать запрос на сервер, jest отловит этот момент
		и вместо реального запроса подставит наш прописанный response*/
		axios.get.mockReturnValue(response);

		return Ajax.get().then(data => {
			expect(data.todos).toEqual(todos);
		});
	});

});

