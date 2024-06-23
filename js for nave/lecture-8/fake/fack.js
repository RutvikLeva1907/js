document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const jobRole = document.getElementById('jobRole').value;
    const department = document.getElementById('department').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);

    if (name && jobRole && department && salary && email && experience) {
        const roleType = experience > 5 ? 'Senior' : 'Junior';

        const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${jobRole}</td>
            <td>${department}</td>
            <td>${salary}</td>
            <td>${email}</td>
            <td>${experience}</td>
            <td>${roleType}</td>
            <td><button class="fire-button">Delete</button></td>
        `;

        updateTotals();

        document.getElementById('employeeForm').reset();
    }
});

document.getElementById('employeeTable').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('fire-button')) {
        const row = event.target.closest('tr');
        row.parentNode.removeChild(row);
        updateTotals();
    }
});

function updateTotals() {
    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const totalEmployees = rows.length;
    let totalSalary = 0;

    for (let i = 0; i < rows.length; i++) {
        const salary = parseFloat(rows[i].getElementsByTagName('td')[3].innerText);
        totalSalary += salary;
    }

    document.getElementById('totalEmployees').innerText = totalEmployees;
    document.getElementById('totalSalary').innerText = totalSalary.toFixed(2);
}
