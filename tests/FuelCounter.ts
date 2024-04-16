import {describe} from "node:test";
import {FuelCounter} from "../src/components/FuelCounter";

describe('FuelCounter', () => {
    it('should calculate fuel from masses', () => {
        const spy = jest.spyOn(FuelCounter, 'calculateFuelFromMass')
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(654)
            .mockReturnValueOnce(33583);

        const fuel = FuelCounter.calculateFuelFromMasses([12, 14, 1969, 100756]);

        expect(fuel).toEqual(34241);
        expect(spy).toHaveBeenCalledTimes(4);
    });

    it('should calculate fuel from mass', () => {
        expect(FuelCounter.calculateFuelFromMass(12)).toEqual(2);
        expect(FuelCounter.calculateFuelFromMass(14)).toEqual(2);
        expect(FuelCounter.calculateFuelFromMass(1969)).toEqual(654);
        expect(FuelCounter.calculateFuelFromMass(100756)).toEqual(33583);
    });
});