const fs = require("fs");

// reading files

// fs.readFile("./blog.tst", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("last line");

// writing files
// fs.writeFile("./blog.tst", "hello, world", () => {
//   console.log("file was written");
// });
// fs.writeFile("./blog.tstw", "hello, world", () => {
//   console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console, log(err);
//     }
//     console.log("folder is deleted");
//   });
// }

// deleting files
// if (fs.existsSync("./deleteme.txt")) {
//   fs.unlink("./deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
