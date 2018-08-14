var multiplesArray = function(mult, stop) {
  var array = [];
  for (var n=2; mult*n <= stop; n++ ) {
    array.push(mult*n);
    console.log(mult);
  }
  return array;
}

var tossBadBoys = function (array) {
  var start = array[0];
  var end = array[array.length-1];
  var badList = multiplesArray(start, end);

  array.forEach(function(number, index) {
    badList.forEach(function(badNumber) {
      if (number == badNumber) {
        array.splice(index, 1);
      }
    });
  });
  array.shift();

  return start;
}

$(function (){

  var result = [];
  var input = parseInt(prompt("Enter a maximum number to compute primes: "));

  var numberList = multiplesArray(1, input);


  for (var n = 0; n < Math.sqrt(input); n++) {
    result.push(tossBadBoys(numberList));
  }
  result = result.concat(numberList);
  $("#result").text(result.join(" "));


  //
  // numberList.forEach(function(number) {
  //   if ()
  // });
});
