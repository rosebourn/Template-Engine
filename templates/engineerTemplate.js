

function generateEngineer(name, id, email, github) {
    return `
    <div class="card text-white bg-primary mb-3 shadow" style="max-width: 18rem;">
    <div class="card-header">${name}<br>Engineer</div>
        <div class="card-body p-3 mb-2 bg-light text-dark">
            <h5 class="card-title">ID: ${id}</h5>
            <h5 class="card-title">Email: ${email}</h5>
            <h5 class="card-title">GitHub: ${github}</h5>
        </div>
    </div>
</div>
    `
}

module.exports = generateEngineer;