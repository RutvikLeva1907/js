document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employee-form');
    const employeeTableBody = document.getElementById('employee-table-body');
    const employeeCountSpan = document.getElementById('employee-count');
    let employeeCount = 0;

    form.addEventListener('submit', (event) => { 
        event.preventDefault();

        const name = form.name.value.trim();
        const jobRole = form['job-role'].value.trim();
        const department = form.department.value.trim();
        const salary = form.salary.value.trim();
        const email = form.email.value.trim();
        const experience = form.experience.value.trim();

        if (!name || !jobRole || !department || !salary || !email || !experience) {
            alert('Please fill in all fields');
            return;
        }

        const roleType = experience > 5 ? 'Senior' : 'Junior';

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${jobRole}</td>
            <td>${department}</td>
            <td>${salary}</td>
            <td>${email}</td>
            <td>${experience}</td>
            <td>${roleType}</td>
            <td><button class="delete-button">Delete</button></td>
            
        `;

        newRow.querySelector('.delete-button').addEventListener('click', () => {
            newRow.remove();
            updateEmployeeCount(-1);
        });

        employeeTableBody.appendChild(newRow);
        updateEmployeeCount(1);
        form.reset();

       


    });

    function updateEmployeeCount(change) {
        employeeCount += change;
        employeeCountSpan.textContent = employeeCount;
    }
});
