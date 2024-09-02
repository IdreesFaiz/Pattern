// Pattern ## 1
document.write("1");
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    document.write("*");
  }
  document.write("<br>");
}
// output
// *****
// *****
// *****
// *****

document.write("<br><br><br>");

// Pattern ## 2
document.write("2");
for (let i = 1; i < 6; i++) {
  for (let j = 0; j < 5; j++) {
    document.write(i);
  }
  document.write("<br>");
}
// output
// 11111
// 22222
// 33333
// 44444
// 55555

document.write("<br><br><br>");

// Pattern ## 3
document.write("3");
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    document.write(j);
  }
  document.write("<br>");
}
//output
12345;
12345;
12345;
12345;
12345;

document.write("<br><br><br>");


// Pattern ## 4
document.write("4");
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j < 6; j++) {
    document.write(i); 
  }
  document.write("<br>");
}
//output
// 55555
// 44444
// 33333
// 22222
// 11111


document.write("<br><br><br>");



// Pattern ## 5
document.write("5");
for (let i = 1; i < 5; i++) {
  for (let j = 5; j >= 1; j--) {
    document.write(j);
  }
  document.write("<br>");
}
document.write("<br><br><br>");
//output
// 54321
// 54321
// 54321
// 54321


// Pattern ## 6
document.write("6");
var count = 1
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    document.write(count);
    count++
  }
  document.write("<br>");
}
document.write("<br><br><br>");
//output
// 12345
// 678910
// 1112131415
// 1617181920
// 2122232425



// Pattern ## 7
document.write("7" +"<br>");

var count = 2;
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    document.write(count);
    count+=2;
  }
  document.write("<br>");
}
document.write("<br><br><br>");
//output
// 13579
// 1113151719
// 2123252729
// 3133353739
// 4143454749



// Pattern ## 8
document.write("8" +"<br>");
for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 6; j++) {
    document.write(i * j);
  }
  document.write("<br>");
}
document.write("<br><br><br>");
// output
// 12345;
// 246810;
// 3691215;





// Pattern ## 9
document.write("9" +"<br>");
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 4; j++) {
    document.write(j * i);
  }
  document.write("<br>");
}
document.write("<br><br><br>");







var count = 1
 
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 5; j++) {
    document.write(count)
    count+=5
  }
  document.write("<br>");
}
document.write("<br><br><br>");

// for (let i = 1; i < 5+2; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write("*");

//   }
//   document.write("<br>")
// }
//output
// 1
// 23
// 456
// 78910
