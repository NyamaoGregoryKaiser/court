function sum_of_cube(x){
  var sumx=0;
  for(i=1;i<=x;i++){
      sumx += Math.pow (i,3);}
  return sumx;
  
  }
console.log(sum_of_cube(4));
//****************************************************************************************************** */
                    function count(sheeps){
                        let counts="";
                        for(i=1;i<=x;i++){
                            counts += `${i}sheep....`;}
                        return counts;
                        
                        }
                    console.log(count(4));
//************************************************************************************************* */
function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let prev = 1;
      let current = 1;
      let height = 1;
  
      for (let i = 2; i <= n; i++) {
        height = prev + current;
        prev = current;
        current = height;
      }
  
      return height;
    }
  }
  const seconds = 20;
  const height = fibonacci(seconds);
  console.log(`The height of the tree after ${seconds} seconds is ${height}.`);
  //****************************************************************************************************************
  