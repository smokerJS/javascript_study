let test = 'test';
console.log(test);  // 1
{
  console.log(test);  // 2
  test = 'test2';
  console.log(test);  // 3
  {
    console.log(test);  // 4
    test = 'test3';
    console.log(test);  // 5
  }
}
console.log(test); // 6