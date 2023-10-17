const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,

  summary(): string {
    return `Name: ${this.name}`;
  },
};

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of suger`;
  },
};

interface Reportable {
  summary(): string;
}

const printSummary = (x: Reportable): string => {
  return x.summary();
};

printSummary(drink);
printSummary(oldCivic);
