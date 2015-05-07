var calc = require('../grader.js');
//test go here

//describe


//should equal

describe('Returns a letter grade', function(){
//write tests below
  it('should return proper letter grade when given a score', function(){
  	expect(calc.letterGrader(80)).toEqual('B-');
  	expect(calc.letterGrader(99)).toEqual('A+');
  	expect(calc.letterGrader(50)).toEqual('F');
  	expect(calc.letterGrader(65)).toEqual('D');
  	expect(calc.letterGrader(79)).toEqual('C+');
  });
});  

describe('Returns the mean of an array', function(){
//write tests below
  it('should add all of the elements of the array and divide by array length', function(){
  	expect(calc.averageScore([1,2,3,4,5])).toEqual(3);
  	expect(calc.averageScore([5,4,3,2,1])).toEqual(3);
  	expect(calc.averageScore([1,5,2,4,3])).toEqual(3);
  	expect(calc.averageScore([-1,-5,-2,-4,-3])).toEqual(-3);
  	expect(calc.averageScore([0,100,50,50,50])).toEqual(50);
  });
}); 