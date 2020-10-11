 var fs = require('fs')
// var pdf = require('html-pdf')
 var html = fs.readFileSync('./resume.html', 'utf8')
// var options = {
//     type: "pdf",
//     border: {
//         top: "1in",
//         right: "1in",
//         bottom: "1in",
//         left: "1in"
//     },
//     height: "10.5in",
//     width: "8in",
// }

// pdf.create(html, options).toFile('./resume.pdf', function(err, res){
//     if(err) return console.log(err)
//     console.log(res)
// })

var conversion = require("phantom-html-to-pdf")();
conversion({ html: html }, function(err, pdf) {
  var output = fs.createWriteStream('./wes-white-resume-10-10.pdf')
  console.log(pdf.logs);
  console.log(pdf.numberOfPages);
    // since pdf.stream is a node.js stream you can use it
    // to save the pdf to a file (like in this example) or to
    // respond an http request.
  pdf.stream.pipe(output);
});