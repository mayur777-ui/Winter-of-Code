document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const interest = document.getElementById('interest').value;

    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');
    
    const interestError = document.getElementById('interestError');


    nameError.style.display = 'none';
    ageError.style.display = 'none';
  
    interestError.style.display = 'none';

    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    }
    if (age === '' || isNaN(age) || age <= 0) {
        ageError.textContent = 'Valid age is required';
        ageError.style.display = 'block';
        valid = false;
    }

    // Validate interest
    if (interest === '') {
        interestError.textContent = 'Interest is required';
        interestError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        const queryString = `?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&gender=${encodeURIComponent(gender)}&interest=${encodeURIComponent(interest)}`;
        window.location.href = `http://localhost:3000/details${queryString}`;
    }
});
