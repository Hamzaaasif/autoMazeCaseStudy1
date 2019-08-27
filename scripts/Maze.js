//require('/scripts/cell.js')
window.onLoad = generategrid();

function breakwall()
{

}

function generategrid()
{
   
  let l=0,k=0;
  var grid =[
    [-1,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,0,0],
    [0,1,1,1,1,1,2]
  ]
  //var cell = retcell();
  for(i=0;i<271;i+=45)
  {
    for(j=0;j<226;j+=45)
    {
      var cell[] = retcell().generatecell(i,j);
      
      if(grid[l][k]===1)
      {
        
        
      }
      //cell.rightwall=false;
      console.log(grid[l][k]);
      l++;
    }
    
   // console.log(k,l);
    k++;
    l=0;
  }

  
}
