var gm = require('gm').subClass({ imageMagick: true });
require('gm-base64');

exports.handler = (event, context, callback) => {
  gm(200, 30, '#fff')
    .drawText(10, 20, "Hello, World!")
    .border(2, 2).borderColor('#ff0000')
    .toBase64('png', function(err, base64) {
      callback(null, base64);
    });
}

const PDFDocument = require('pdfkit');
const base64 = require('base64-stream');

exports.handler = (event, context, callback) => {
  var doc = new PDFDocument();

  // write to PDF
  doc.y = 300
  doc.text(event.text, 50, 50)

  var finalString = ''; // contains the base64 string
  var stream = doc.pipe(base64.encode());

  doc.end(); // will trigger the stream to end

  stream.on('data', function(chunk) {
      finalString += chunk;
  });

  stream.on('end', function() {
    // the stream is at its end, so push the resulting base64 string to the response
    callback(null, finalString);
  });
}
