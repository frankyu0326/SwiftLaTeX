"use strict";
exports.__esModule = true;
var fs = require("fs");
var src_1 = require("./src");
var bufContent = fs.readFileSync("test.xdv");
var html = "";
html = html + "<!doctype html>\n";
html = html + "<html lang=en>\n";
html = html + "<head>\n";
html = html + "</head>\n";
html = html + '<body>\n';
html = html + '<div style="position: absolute;">\n';
html = html + src_1.dvi2html(bufContent);
html = html + '</div>\n';
html = html + '</body>\n';
html = html + "</html>\n";
fs.writeFileSync("index.html", html);
console.log("DONE");