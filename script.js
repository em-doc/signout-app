const signoutForm = document.getElementById("signoutForm");

signoutForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const patientContainers = document.querySelectorAll(".patient-container");

    const patientData = []; // Array to store patient data

    patientContainers.forEach((container) => {
        const patientRoom = container.querySelector('input[name^="patientRoom"]').value;
        const patientName = container.querySelector('input[name^="patientName"]').value;
        const patientAge = container.querySelector('input[name^="patientAge"]').value;
        const patientGender = container.querySelector('select[name^="patientGender"]').value;
        const patientPMH = container.querySelector('input[name^="patientPMH"]').value;
        const patientHPI = container.querySelector('textarea[name^="patientHPI"]').value;
        const toDo = container.querySelector('textarea[name^="toDo"]').value;

        const data = {
            room: patientRoom,
            name: patientName,
            age: patientAge,
            gender: patientGender,
            pmh: patientPMH,
            hpi: patientHPI,
            toDo: toDo
        };

        patientData.push(data);
    });

    console.log(patientData); // Replace with how you want to use the data (e.g., send to server)
});

//Function to add a new patient field
function addPatient() {
    const newPatientContainer = document.createElement('div');
    newPatientContainer.classList.add('patient-container');
    newPatientContainer.innerHTML = `
        <input type="number" name="patientRoom${signoutForm.children.length + 1}" placeholder="#">
        <input type="text" name="patientName${signoutForm.children.length + 1}" placeholder="Patient Name" size="26">
        <input type="text" name="patientAge${signoutForm.children.length + 1}" placeholder="Age" size="26">
        <select name="patientGender${signoutForm.children.length + 1}">
            <option>Male</option>
            <option>Female</option>
        </select>
        <input type="text" name="patientPMH${signoutForm.children.length + 1}" placeholder="PMH" size="26">
        <br><br>
        <textarea name="patientHPI${signoutForm.children.length + 1}" placeholder="HPI"></textarea>
        <textarea name="toDo${signoutForm.children.length + 1}" placeholder="To Do"></textarea>
        <button type="submit">Submit</button>
    `;
    signoutForm.appendChild(newPatientContainer);
}


addPatient(); // Add the first patient on page load

// Add a button to add more patients in your HTML
// <button type="button" onclick="addPatient()">Add Patient</button>