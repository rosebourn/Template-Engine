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
  <style>
    h1 {
      font-size: 56px;
      background: red;
      color: white;
      text-align: center;
      padding: 18px;
    }

    .card-header {
      font-size: 28px;
      text-align: center;
    }

    h5 {
      font-size: 18px;
    }

    .column-left {
      float: left;
      width: 33.333%;
    }

    .column-center {
      display: inline-block;
      width: 33.333%;
    }

    .column-right {
      float: right;
      width: 33.333%;
    }

    .team-card {
      padding: 20px;
    }
  </style>
  <body>
  <h1>My Team</h1>

    <div id="team-card>
        <div id="mangi-cards" class="column-left">${mangagerCards}</div>
        <div id="engi-cards" class="column-center">${engineerCards}</div>
        <div id="inti-cards" class="column-right">${internCards}</div>
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
