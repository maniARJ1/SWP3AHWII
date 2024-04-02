function toggleVisibility(e) {
    const parent = e.target.parentElement;
    const children = Array.from(parent.children);
    const header = children[0];
    header.clicked = !header.clicked;

    if (header.clicked) {
        children.slice(1).forEach(child => {
            child.style.visibility = "visible";
            child.style.position = "static";
        });
        parent.style.backgroundColor = "white";
        parent.style.color = "black";
    } else {
        children.slice(1).forEach(child => {
            child.style.visibility = "hidden";
            child.style.position = "absolute";
        });
        parent.style.backgroundColor = "";
        parent.style.color = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("div.news-articles > article > h2");

    articles.forEach((a) => a.addEventListener("click", toggleVisibility));

    const footer = document.createElement("footer");
    footer.innerHTML = "<p>Footer-Inhalt hier...</p>";
    document.body.appendChild(footer);

    const container = document.getElementById("container");
    const paragraphs = Array.from(container.getElementsByTagName("p"));
    paragraphs.reverse().forEach(paragraph => {
        container.appendChild(paragraph);
    });

});
