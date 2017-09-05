fs.readFile('del.txt', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var params = {Bucket: 'bucket', Key: 'key', Body: base64data};
  s3.upload(params, function(err, data) {
    console.log(err, data);
  });
});

