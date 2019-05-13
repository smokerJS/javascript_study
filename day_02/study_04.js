function testFunction() {
  var test = '함수레벨 지역변수';
  console.log(test);
  var a = 'a';
  console.log(a);
}
testFunction()

console.log(test);
console.log(a);
