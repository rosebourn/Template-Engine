function generateManager() {
    return `
    <div class="card text-white bg-primary mb-3 shadow" style="max-width: 18rem;">
    <div class="card-header">${manager.employeeName}<br>Manager</div>
        <div class="card-body p-3 mb-2 bg-light text-dark">
            <h5 class="card-title">ID: ${manager.employeeId}</h5>
            <h5 class="card-title">Email: ${manager.employeeEmail}</h5>
            <h5 class="card-title">Office Number: ${manager.officeNumber}</h5>
        </div>
    </div>
</div>
    `
}

module.exports = generateManager;