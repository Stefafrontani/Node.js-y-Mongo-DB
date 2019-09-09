const index = (string) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title> ${string} </title>
        </head>
        <body>
            <h1> ${string} </h1>
        </body>
    </html>
`
module.exports = index;