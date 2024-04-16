import {describe} from "node:test";
import {InputFile} from "../src/components/InputFile";

describe('InputFile', () => {
    it('should get lines from input file', () => {
        const spy = jest.spyOn(InputFile, 'getInputFromFile')
            .mockReturnValueOnce('1\n2\n3\n4\n5');

        const lines = InputFile.getLines();

        expect(lines).toEqual(['1', '2', '3', '4', '5']);
        expect(spy).toHaveBeenCalledTimes(1);
    });
});