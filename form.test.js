
// form.test.js

const { JSDOM } = require('jsdom');

// Set up a basic DOM environment
const dom = new JSDOM('<!doctype html><html><body><form id="form"></form></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// Your actual test code follows...

const checkValidInput = require('./form');

test('Using invalid input', () => {
    const isInputValid = checkValidInput('Tony', 'Stark', '', 3);
    expect(isInputValid).toBe(false);
});

test('Using valid input', () => {
    const isInputValid = checkValidInput('Tony', 'Stark', 'November 20th in Phoenix, AZ', 3);
    expect(isInputValid).toBe(true);
});

// Clean up after the tests
afterAll(() => {
  global.document = undefined;
  global.window = undefined;
});

