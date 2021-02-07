import { TestBed } from '@angular/core/testing';
import { FileService } from './file.service';

describe('Service: File', () => {
    let service: FileService;

    it('should return correct sections', () => {
        let data = [
            "# Header",
            " ",
            "# Section"
        ];
        let e = [
            ["# Header"],
            ["# Section"]
        ];
        expect(FileService.getSections(data)).toEqual(e)
    })
})
