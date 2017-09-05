var params = {
  FunctionName: "myFunction", 
  Publish: true, 
  S3Bucket: "myBucket", 
  S3Key: "myKey", 
  S3ObjectVersion: "1", 
  ZipFile: <Binary String>
 };
 lambda.updateFunctionCode(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    CodeSha256: "LQT+0DHxxxxcfwLyQjzoEFKZtdqQjHXanlSdfXBlEW0VA=", 
    CodeSize: 123, 
    Description: "", 
    FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:myFunction", 
    FunctionName: "myFunction", 
    Handler: "index.handler", 
    LastModified: "2016-11-21T19:49:20.006+0000", 
    MemorySize: 128, 
    Role: "arn:aws:iam::123456789012:role/lambda_basic_execution", 
    Runtime: "python2.7", 
    Timeout: 123, 
    Version: "1", 
    VpcConfig: {
    }
   }
   */
 });