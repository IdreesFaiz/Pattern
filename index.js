// Pattern ## 1
var count = 1;
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    document.write(count);
    count++
  }
  document.write("<br>")
}
//output
// 1
// 23
// 456
// 78910
