const fs = require("fs");

const args = process.argv.slice(2);
if (args.includes("ls") && args.includes("templates")) {
  const content = fs.readdirSync("./templates");
  console.log(content);
}
