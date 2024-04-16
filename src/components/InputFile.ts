export class InputFile {
    public static getInputFromFile(): string {
        return require('fs').readFileSync('input.txt', 'utf8');
    }

    public static getLines(): string[] {
        return this.getInputFromFile().split('\n');
    }
}