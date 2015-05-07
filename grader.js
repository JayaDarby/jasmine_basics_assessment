module.exports = {
  letterGrader: function(x){
  	if(x >= 90 && x <= 100){
  		if(x <= 92)
  			return "A-";
  		else if(x >= 98)
  			return 'A+';
  		else
  			return 'A';
  	}
  	else if(x >= 80 && x < 90){
  		if(x <= 82)
  			return "B-";
  		else if(x >= 88)
  			return 'B+';
  		else
  			return 'B';
  	}
    else if(x >= 70 && x < 80){
  		if(x <= 72)
  			return "C-";
  		else if(x >= 78)
  			return 'C+';
  		else
  			return 'C';
  	}
  	else if(x >= 60 && x < 70){
  		if(x <= 62)
  			return "D-";
  		else if(x >= 68)
  			return 'D+';
  		else
  			return 'D';
  	}
  	else
  		return 'F';
  },
  averageScore: function(array){
  	var sum = 0;
  	for(var i = 0; i < array.length; i++){
  		sum += array[i];
  	}
  	return sum/array.length;
  },
  medianScore: function(array){
    var swapped = true;
    var temp;
    var n = 0;
    while(swapped){
      swapped = false;
      n++;
      for(var i = 0; i < array.length-n; i++){
        if(array[i] >  array[i+1]){
          temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          swapped = true;
        }
      }
    }
    if(array.length%2 === 0)
  	  return (array[array.length/2]+array[array.length/2-1])/2;
    else 
      return array[Math.floor(array.length/2)];
  },
  modeScore: function(array){
    var count = 0;
    var maxCount = 0;
    var index;
    for(var i = 0; i < array.length; i++){
        count = 0;
    	for(var j = 0; j < array.length; j++){
    		if (array[i]===array[j])
    		count++;
    	}
    	if (count > maxCount){
    		maxCount = count;
    		index = i;
    	}	
    }
    return array[index];
  }  
};



