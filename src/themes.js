window.addEventListener("DOMContentLoaded", () =>
{
    const savedTheme = localStorage.getItem("tsd-theme");
    const themes = ["dark-plus", "black", "midnight-blue"];

    if (themes.includes(savedTheme))
        document.body.classList.add(savedTheme);

    document.getElementById("theme").addEventListener("change", (ev) =>
    {
        if (themes.includes(ev.target.value))
        {
            document.body.classList.remove("light", "dark", ...themes);
            document.body.classList.add(ev.target.value);
        }
        else
        {
            document.body.classList.remove(...themes);
        }
    });
});