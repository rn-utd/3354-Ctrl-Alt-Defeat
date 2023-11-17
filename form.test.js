const checkValidInput = require('./form');

test('Using invalid input', () => {
    const isInputValid = checkInputValid('Tony', 'Stark', '', 3);
    expect(isInputValid).toBe(False);
});

test('Using valid input', () => {
    const isInputValid = checkInputValid('Tony', 'Stark', 'November 20th in Phoenix, AZ', 3);
    expect(isInputValid).toBe(True);
});