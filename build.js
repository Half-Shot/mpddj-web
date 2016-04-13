// build.js
const bro  = require('browserify');
const fs   = require("fs");
const sass = require('node-sass');
const ROOT = "./src/main.js";
const OUT  = "./out";

console.log("Building mpddj-web");

console.log("Bundling JS");
bro(ROOT)
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(fs.createWriteStream(OUT+"/bundle.js"))

console.log("Mixing up some sweet sweet styles");
sass.render({
  file: "style/main.scss"
}, function(err, result) {
  if(err){
    console.error("An error occured during stylesheet compiling")
    console.log(err);
  }
  else {
    fs.writeFile("out/style.css", result.css, function(err){
      if(err){
        console.error("An error occured during writing the stylesheet to disk.")
        console.log(err);
      }
    });
  }
});
