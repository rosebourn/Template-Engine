function buildHTML(engineerCards, mangagerCards, internCards) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>My Team!</title>
  </head>
  <body>
    <div id="team-cards">
      <div class="engi-cards">${engineerCards}</div>

      <div id="mangi-cards">${mangagerCards}</div>
      
      <div id="inti-cards">${internCards}</div>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="../app.js"></script>
  </body>
</html>`;
}

module.exports = buildHTML;
