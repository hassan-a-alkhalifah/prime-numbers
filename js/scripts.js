var multiplesArray = function(mult, stop) {
  var array = [];
  for (var n=2; mult*n <= stop; n++ ) {
    array.push(mult*n);
    console.log(mult*n);
  }
  return array;
}

$(function (){

  var numberList = [];
  var multiples = [];
  var start = 2;
  var result = [];
  var input = parseInt(prompt("Enter a maximum number to compute primes: "));

  for( var i = start; i <= input; i++ ) {
    numberList.push(i);
  }
  console.log(numberList);

  var last = numberList[numberList.length-1];
  var init;



  var tossBadBoys = function () {
    init = numberList[0];
    result.push(numberList[0]);
    numberList.forEach(function(number, index) {
    console.log(number, index);
    var badList = multiplesArray(init, last);
    badList.forEach(function(badNumber) {
      console.log(number, badNumber, "this");
      if (number == badNumber) {
        console.log(numberList);
        numberList.splice(index, 1);
        console.log(numberList);
        }
      })
    })
    numberList.shift();
  }

  for ( var n = 0; n < last-1; n++ ) {
    tossBadBoys();
  }

  $("#result").text(result.join(" "));


  //
  // numberList.forEach(function(number) {
  //   if ()
  // });
});
