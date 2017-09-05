const PDFDocument = require('pdfkit');
const base64 = require('base64-stream');
var request = require('request');

exports.handler = (event, context, callback) => {
  var doc = new PDFDocument();

  // write to PDF
  doc.y = 300
  doc.text(event.text, 50, 50)

  request({
    url: 'https://farm5.staticflickr.com/4347/36617211440_42d47f237a.jpg',
    encoding: null // Prevents Request from converting response to string
  }, function(err, response, body) {
    
    doc.image(body,260, 50,{height:100,width:100});
    
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
  });
}
