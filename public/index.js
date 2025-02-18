// import express from "express";
// const app = express();
// const port = 3000;
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('image_fade-animation');
            }
        });
    });

    const viewbox = document.querySelectorAll('.image_fade');
    viewbox.forEach(image => {
        observer.observe(image);
    });
});

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Your Text";
});

// app.use(express.static("public"));

// app.get("/", (req,res) => {
//     res.sendFile("index.html", { root: "./public" });
//   });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });


