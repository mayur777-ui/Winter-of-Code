document.addEventListener('DOMContentLoaded', () => {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        urlParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }

    const params = getQueryParams();
    const match = params.gender === 'Male' ? 'Aman gupta' : 'chery del';
    const matchGender = params.gender === 'Male' ? 'Female' : 'Male';
    const matchPic = params.gender === 'Male' ? 'https://randomuser.me/api/portraits/women/44.jpg' : 'https://randomuser.me/api/portraits/men/44.jpg';
    const matchDetails = `Name: ${match}, Gender: ${matchGender}, i want to date someone who is worthy`;

    document.getElementById('userDetails').textContent = `Name: ${params.name}, Age: ${params.age}, Gender: ${params.gender}, Interest: ${params.interest}`;

    document.getElementById('matchPic').src = matchPic;
    document.getElementById('matchDetails').textContent = matchDetails;

    document.getElementById('confirmBtn').addEventListener('click', () => {
        alert(`${params.name}, you are not worthy!`);
    });
});
