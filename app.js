const express = require ('express');
const app = express();
const path = require ('path');

const PORT = proces.env.PORT || 3000;

app.listen(PORT, () => {
     console.log("servidor corriendo" + PORT);
    });

    app.use(express.static(path.join(__dirname, "public")));

    // camino, path, ruta
    app.get('/', (req, res) => {
        //función controladora o handler.
        res.sendFile(path.join(__dirname,"views/home.html"));
    });

    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname,"views/login.html"));
    });

    app.get("/register", (req, res) => {
        res.sendFile(path.join(__dirname,"views/register.html"));
    });