function generateIntern() {
    return `
    <div class="card text-white bg-primary mb-3 shadow" style="max-width: 18rem;">
    <div class="card-header">${intern.employeeName}<br>Intern</div>
        <div class="card-body p-3 mb-2 bg-light text-dark">
            <h5 class="card-title">ID: ${intern.employeeId}</h5>
            <h5 class="card-title">Email: ${intern.employeeEmail}</h5>
            <h5 class="card-title">School: ${intern.school}</h5>
        </div>
    </div>
</div>
    `
}

module.exports = generateIntern;