const http = require("http")
const PORT = 8000 || process.env.PORT;
const fs = require("fs")
const path = require("path")
 
 
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, "pages", "home.html"), "utf8", (err, data) => {
            if (err) {
                res.end();
                throw err;
                
            }
            res.write(data)
            res.end()
          });
    }
    else if(req.url === "/about"){
        res.write("Hello to the about")
        res.end()
    }
    else if(req.url === "/contact"){
        res.write("Hello to the contact")
        res.end()
    }
    else if (req.url === "/login"){
        if(req.method === "POST") {
            res.end("GOT THE DATA")
        }
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    <main>
        <h1>Login</h1>
        <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
 
 
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
 
 
            <input type="submit" value="Login">
        </form>
        <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
    </main>
</body>
</html>
`)
        res.end()
    }
    else {
        res.write("Page not found")
        res.end()
    }
  });
 
 
  server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
  })