const hello = require('../src/handler').hello;

describe('hello', () => {
    it('should call hello function with success', async () => {
        const response = await hello({});
        expect(response.statusCode).toBe(200);
    });
});
