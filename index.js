function distanceFromHqInBlocks(startingPoint) {
  
    if (startingPoint > 42) {
     return startingPoint - 42     
    }
    if (startingPoint < 42) {
        return  42 - startingPoint
    }
  } 



    function distanceFromHqInFeet(someValue) {
      if (someValue > 42) {
        return (someValue - 42) * 264  
       }
       if (someValue< 42) {
           return  (42 - someValue) * 264
       }
     } 
  

    function distanceTravelledInFeet(a,b){
        if (b>a){
          return((b-a)*264);
        }
        else
          return((a-b)*264);
      }


      function calculatesFarePrice(start,destination){
        let distance = distanceTravelledInFeet(start,destination);
        if (distance<= 400){
          return 0;
        }
        if (distance>=400 && distance<=2000){
          return (distance-400)* 0.02;
        }
        else if(distance>=2000&& distance<=2500){
          return 25;
        }
        else if (distance > 2500){
          return "cannot travel that far";
        }
      }