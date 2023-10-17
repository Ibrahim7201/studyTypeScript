const carMakers: string[] = ["ford", "toyota", "chevy"]; //1D
const carMakersArrays: string[][] = [["ford"], ["toyota"], ["chevy"]]; //2D

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((carMaker) => {
  return carMaker.x;
});

const importantDates: (Date | string)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
