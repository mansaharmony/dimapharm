function addPrescription() {
    const patientName = document.getElementById('patient-name').value;
    const medication = document.getElementById('medication').value;
    const dosage = document.getElementById('dosage').value;
    const instructions = document.getElementById('instructions').value;

    if (patientName && medication && dosage && instructions) {
        const table = document.getElementById('prescriptions-list');
        const row = table.insertRow();
        row.insertCell(0).textContent = patientName;
        row.insertCell(1).textContent = medication;
        row.insertCell(2).textContent = dosage;
        row.insertCell(3).textContent = instructions;
        document.getElementById('patient-name').value = '';
        document.getElementById('medication').value = '';
        document.getElementById('dosage').value = '';
        document.getElementById('instructions').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}
