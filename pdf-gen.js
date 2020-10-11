 var fs = require('fs')
 var html = fs.readFileSync('./resume.html', 'utf8')

var conversion = require("phantom-html-to-pdf")();
conversion({ html: html }, function(err, pdf) {
  var output = fs.createWriteStream('./wes-white-resume-10-10.pdf')
  console.log(pdf.numberOfPages);
  pdf.stream.pipe(output);
});