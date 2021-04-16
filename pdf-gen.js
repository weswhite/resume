var fs = require("fs");
var html = fs.readFileSync("./resume.html", "utf8");

// var conversion = require("phantom-html-to-pdf")();
// conversion({ html: html }, function(err, pdf) {
//   var output = fs.createWriteStream('./wes-white-resume-10-10.pdf')
//   console.log(pdf.numberOfPages);
//   pdf.stream.pipe(output);
// });

var html_to_pdf = require("html-pdf-node");

let options = { format: "A4", margin: { right: 50, left: 50 } };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
const file = { content: html };
html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
  console.log("PDF Buffer:-", pdfBuffer);
  // const output = fs.createWriteStream("wes-white-resume-4-21.pdf");
  // pdfBuffer.pipe(output);
  fs.writeFileSync("wes-white-resume-4-21.pdf", pdfBuffer);
});
