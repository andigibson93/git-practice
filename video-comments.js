
// this.commentData = this.aggregateComments(COMMENTS);
//       },
   
     aggregateComments(comments){
       var numBuckets = 50;
       var videoDuration = 496000;                           //pulled in dynamically later
       var bucketWidth = Math.ceil(videoDuration / numBuckets);
       
       bucketWidth[comments.k] = (bucketWidth[comments.k] || []).concat(comments);
                                    //round up to 5 seconds
       return [];
     },
 
    var comments = [{timeStamp: 10000}, {timeStamp: 15000}]
   
    comments.forEach(function(comment)){
    var data = []
    for(var i = 10; i < data.length; i += bucketWidth)
    {
        console.log(i);
        if(i == timeStamp){
            data.push(i, 0)
        }
    }
     console.log(comment.timeStamp)
   }), 












   //replace with the logic for the timestamps
   //if the timestamp is between a range, increase the count.
   
   //[[10, 0]], [20, 0], [30, 0]] ......numBuckets = 50.
   //collected in 10 seconds.
   //X values to be dynamic based off the video link
   //round to 5 seconds in javascript. So if the output is 49000/50 = 9.8, then round to be equal to 10.
   //use Math.ceil to round up.
   
   //change the data structure,
   //connect to graph
   //go through comments array, if its in 10 seconds, add it to first array.
   
   // This is what your data looks like
  //  const arr = [
  //    {
  //      number: 1
  //    },
  //    {
  //      number: 2
  //    },
  //    {
  //      number: 3
  //    },
  //    {
  //      number: 4
  //    },
  //      {
  //      number: 5
  //    },
  //      {
  //      number: 6
  //    },
  //      {
  //      number: 7
  //    }
  //  ];
   
   
   // You want it to look like
  //  var output = {
  //    '10': [
  //      {
  //        number: 1
  //      },
  //      {
  //        number: 2
  //      },
  //      {
  //        number: 3
  //      },
  //    ],
  //    '20' : [
  //      {
  //        number: 4
  //      },
  //       {
  //        number: 5
  //      },
  //       {
  //        number: 6
  //      },
  //    ],
  //    '30': [
  //      {
  //        number: 7
  //      }
  //    ]
  //  };
   
   // it'll be like the above data structure but instead of 'less than 3' you can have '10' as a key, '20' as a key
   // and so on and the value would be an array of all the data in your comments array that's within that seconds
   // (ie there'll be an array for comments made before the 10s mark etc)


   //Finally
    //figure out how to increment the y axsis.
