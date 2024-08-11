for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
 
  for(let b=1; b<20; b++){
    let output="";
    if (b%2==0) output+="fizz";
    if (b%5==0) output+="buzz";
    console.log(output ||b);
  }
  