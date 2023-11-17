function checkValidInput(fname, lname, eventName, numTickets) {
    return fname.length > 0 && lname.length > 0 && isNaN(Number(numTickets)) && Number(numTickets) > 0 && eventName != "";
}

form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    alert('Form submitted successfully');
    
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const eventName = document.getElementById('eventName').value;
    const numTickets = document.getElementById('numTickets').value;

    if (!validateForm(fname, lname, eventName, numTickets)) {
        event.preventDefault(); // Prevent form submission if validation fails
        alert('First name and last name must be at least one character long, Number of Tickets must be greater than 0 and an event must be selected')
    }
    else {
    alert('Form submitted successfully')
    }
}) ;