const fs = require('fs');

const engineer = {
    name: "Jojo",
    id: "4",
    email: "jojo@gmail.com",
    githubUsername: "jogithub"
};

function generateHTML(engineer) { 
   return ` <!DOCTYPE html>
   <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>
        </head>

        <body>
<div class="card text-white bg-primary mb-3 shadow" style="max-width: 18rem;">
<div class="card-header"><br>Engineer</div>
    <div class="card-body p-3 mb-2 bg-light text-dark">
        <h5 class="card-title">ID: ${engineer.id}</h5>
        <h5 class="card-title">Email: ${engineer.email}</h5>
        <h5 class="card-title">GitHub: ${engineer.githubUsername}</h5>
    </div>
</div>
</div>
</body>
</html>
`;

}

generateHTML();
module.exports = generateHTML;

// document.body.innerHTML = markup;




// module.exports = function(myTeam) {
//   // fs.readFileSync("PATH TO TEMPLATE", "utf8") should produce string
 
// }