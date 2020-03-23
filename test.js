
   
   var testComments = [{timeStamp: 1}, {timeStamp: 49}, {timeStamp: 51}]; //testing

   var expectedOutput = {'0': [{timeStamp: 1}, {timeStamp: 49}], '1': [{timeStamp: 51}]}; //testing
   
   function aggregateComments(comments, videoDuration){
       var numBuckets = 50; //declare and initalize buckets
       var bucketWidth = Math.ceil(videoDuration / numBuckets); //width of each bucket is the duration of video divided by total buckets, rounded up
       
       console.log("input ", comments); //testing
       console.log("bucket width ", bucketWidth); //testing

       result = {};
       comments.forEach(function(comment) {  //(lamda express) for each comment element, apply this function
           currentBucket = Math.floor(comment.timeStamp / numBuckets); 
           console.log("Bucket for ", currentBucket, ":", comment);

           if (!(currentBucket in result)) { //if we did not put something into the map yet
                result[currentBucket] = []; //then put an empty list
           }
           result[currentBucket].push(comment); //this is a map(an array where you can index something other than a number)
       });

       console.log("Result is: ", result); //testing
       return result;
     }


     aggregateComments(testComments, 60); //testing