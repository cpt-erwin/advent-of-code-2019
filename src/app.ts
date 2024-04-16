import {InputFile} from "./components/InputFile";
import {FuelCounter} from "./components/FuelCounter";

const masses: number[] = InputFile.getLines().map((line: string) => {
    return parseInt(line);
});

const fuel: number = FuelCounter.calculateFuelFromMasses(masses);

console.log(fuel);