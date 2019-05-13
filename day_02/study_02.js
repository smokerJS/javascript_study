var test = 'test1 변수';
console.log(test);  // 1

function testFunction() {
  console.log(test);  // 2
  var test = 'test2 변수';
  console.log(test);  // 3
}

testFunction();
console.log(test);  // 4