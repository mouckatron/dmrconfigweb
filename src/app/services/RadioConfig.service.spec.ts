import { TestBed } from '@angular/core/testing';
import { RadioConfigService } from './RadioConfig.service';

describe('Class: RadioConfig', () => {
    let radioConfig: RadioConfigService;

    beforeEach(() => {
        radioConfig = new RadioConfigService();
    })

    afterEach(() => {
        radioConfig = null;
    })

    it('splitLine should return line on key value', () => {
        
        let line = "Radio: TYT MD-9600";
        let e = ["Radio", "TYT MD-9600"];

        expect(radioConfig.splitLine(line)).toEqual(e)
    })

    it('parse should set the class attributes', () => {

        let lines = ["Radio: TYT MD-9600"];
        let e = "TYT MD-9600"
        
        radioConfig.parse(lines)

        expect(radioConfig.radio).toEqual(e)
    })
})
