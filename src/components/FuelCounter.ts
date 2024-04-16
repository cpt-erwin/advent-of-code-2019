export class FuelCounter {
    public static calculateFuelFromMasses(masses: number[]): number {
        let fuel: number = 0;
        for (const mass of masses) {
            fuel += this.calculateFuelFromMass(mass);
        }

        return fuel;
    }

    public static calculateFuelFromMass(mass: number): number {
        return Math.floor(mass / 3) - 2;
    }
}