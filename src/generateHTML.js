const fs = require("fs");

function writeHTML(arrayOfInstance) {
  let htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Team</title>
            <!-- CSS only -->
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
            />
        </head>
        <body>
            <nav class="navbar navbar-expand-sm navbar-light text-light bg-primary mb-5">
            <div class="container-fluid justify-content-center">
                <h2>My Team</h2>
            </div>
            </nav>
            <div class="container-lg px-3">
            <div class="row">`;

    for(let employee of arrayOfInstance){
        htmlTemplate += buildCard(employee);
    }


  htmlTemplate += `
        </div>
        </div>
        <!-- JavaScript Bundle with Popper -->
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
        ></script>
    </body>
    </html>
    `;
  return htmlTemplate;
}

function generateHTML(data) {
  // input confirmation
  const newArray = data.map((employee) => {
    const newEmployee = { role: employee.getRole(), ...employee };
    return newEmployee;
  });
  console.table(newArray);
  fs.writeFileSync("./dist/index.html", writeHTML(data));
}

function buildCard(employee){
    return `
    <div class="card col-md-4 px-0 mb-3 shadow" style="max-width: 18rem">
        <div class="card-header text-bg-primary">
            <h3>${employee.getName()}</h3>
            <h4>${employee.getRole()}</h4>
        </div>
        <div class="card-body">
            <p><strong>ID:</strong> ${employee.getId()}</p>
            <hr>
            <p><strong>Email:</strong> <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></p>
            ${!!employee.officeNum? '<hr><p><strong>Office Number:</strong>'+employee.officeNum+'</p>':''}
            ${!!employee.school? '<hr><p><strong>Office Number:</strong>'+employee.getSchool()+'</p>':''}
            ${!!employee.gitHub?'<hr><p><strong>GitHub:</strong> <a href="https://github.com/'+employee.getGithub()+'">'+employee.getGithub()+'</a></p>':''}
        </div>
    </div>
    `
}


module.exports = generateHTML;
