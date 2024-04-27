function fadeIn(element) {
    let opacity = 0;
    element.style.display = "block";
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1;
            element.style.opacity = opacity;
        } else {
            element.style.display = "none";
            clearInterval(interval);
        }
    }, 50);
}

function filter(category) {
    const works = document.querySelectorAll("#works-list li");
    console.log(works);

    works.forEach((work) => {
        if (
            category === "all" ||
            work.getAttribute("data-category") === category
        ) {
            fadeIn(work);
        } else {
            fadeOut(work);
        }
    });
}
