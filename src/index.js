const fs = require("fs");
const { PageEvent } = require("typedoc");

/**
 * @param {import("typedoc").Application} app
 */
function load(app)
{
    const themeJs = fs.readFileSync(__dirname + "/themes.js", "utf-8");
    const themeCss = fs.readFileSync(__dirname + "/themes.css", "utf-8");
    const themeOptions = fs.readFileSync(__dirname + "/themes.xml", "utf-8");

    app.renderer.on(PageEvent.END, (/**@type {PageEvent}*/ page) =>
    {
        const html = page.contents.replace(/(<option value="dark">Dark<\/option>)/, "$1" + themeOptions);
        page.contents = html.replace(/(<\/head>)/, `<style>${themeCss}</style><script>${themeJs}</script>$1`);
    });
}

module.exports = { load };