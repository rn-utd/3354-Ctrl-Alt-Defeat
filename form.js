function checkValidInput(fname, lname, eventName, numTickets) {
    const isString = (str) => /^[A-Za-z]+$/.test(str);
    return isString(fname) && isString(lname) && !isNaN(Number(numTickets)) && Number(numTickets) > 0 && eventName != "";
}

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const eventName = document.getElementById('eventName').value;
    const numTickets = document.getElementById('numTickets').value;

    if (!checkValidInput(fname, lname, eventName, numTickets)) {
        e.preventDefault(); // Prevent form submission if validation fails
        alert('Please ensure all fields are filled correctly:\n' +
            'First name and last name must be at least one character long,\n' +
            'Number of Tickets must be greater than 0, and an event must be selected.');
    } else {
        alert('Form submitted successfully');
    }
});
