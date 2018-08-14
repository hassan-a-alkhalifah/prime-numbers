var multiplesArray = function(mult, stop) {
  var array = [];
  for (var n=1; mult*n <= stop; n++ ) {
    array.push(mult*n);
  }
  return array;
}

$(function (){

  var numberList = [];
  var multiples = [];
  var start = 2;
  var result = [];
  var input = prompt("Enter a maximum number to compute primes: ");

  for( var i = start; i <= input; i++ ) {
    numberList.push(i);
  }
  console.log(numberList);

  var last = numberList[numberList.length-1];
  var init = numberList[0];
  var badList = multiplesArray(init, last);
  numberList.forEach(function(number, index) {
    badList.forEach(function(badNumber) {
      if (number == badNumber) {
        numberList.splice(numberList[index], 1);
      }
    })
  })


  console.log(result);

  console.log(numberList);
  //
  // numberList.forEach(function(number) {
  //   if ()
  // });
});
