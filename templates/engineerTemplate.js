

function generateEngineer() {
    return `
    <div class="card text-white bg-primary mb-3 shadow" style="max-width: 18rem;">
    <div class="card-header">${engineer.employeeName}<br>Engineer</div>
        <div class="card-body p-3 mb-2 bg-light text-dark">
            <h5 class="card-title">ID: ${engineer.employeeId}</h5>
            <h5 class="card-title">Email: ${engineer.employeeEmail}</h5>
            <h5 class="card-title">GitHub: ${engineer.github}</h5>
        </div>
    </div>
</div>
    `
}

module.exports = generateEngineer;