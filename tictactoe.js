<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Tic Tac Toe</title>
</head>
<style>
   .body{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }

   .container{
      text-align: center;
   }
   
   .row{
      display:flex;
      
   }
   .col{
      width:150px;
      height:150px;
      font-size: 58px;
      border: 1px solid  black;
      display : flex;
      justify-content : center;
      align-items :center;
      cursor: pointer;
   }
  
  

</style>
<body>
	  <div class="container">
      <h1>Tic Tac Toe</h1>
     <div class="grid">
      <div class="row">
         <div onclick="handleClick(this)" id="1" class="col"></div>
         <div onclick="handleClick(this)" id="2"  class="col"></div>
         <div onclick="handleClick(this)" id="0" class="col"></div>
      </div>
      <div class="row">
         <div onclick="handleClick(this)" id="3" class="col"></div>
         <div onclick="handleClick(this)" id="4" class="col"></div>
         <div onclick="handleClick(this)" id="5" class="col"></div>
      </div>
      <div class="row">
         <div onclick="handleClick(this)" id="6"  class="col"></div>
         <div onclick="handleClick(this)" id="7"  class="col"></div>
         <div onclick="handleClick(this)" id="8"  class="col"></div>
      </div>
   </div>
   </div>

    
    
   <script>

 let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.write(`Winner is ${currentPlayer}`);
    return;
  }

  if (!arr.some((e) => e === null)) {
    document.write(`Draw!!`);
    return;
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}


 
   </script> 
</body>
</html>
