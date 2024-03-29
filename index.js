function render(page = "home") {
    // const params = new URL(window.location).searchParams;
    // const page = params.get("page") || "home";

    document.querySelectorAll("button.nav-link").forEach(a => a.classList.remove("active"));
    document.querySelector(`button.nav-link[data-target='${page}'`).classList.add("active");
    document.querySelectorAll("main").forEach(el => el.classList.add("hidden"));
    document.querySelector(`main[data-page='${page}']`).classList.remove("hidden");
}

window.onload = () => {
    document.querySelectorAll("button.nav-link").forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();

            const targetPage = e.target.dataset.target || "home";
            render(targetPage);
        });
    });

    render();
};