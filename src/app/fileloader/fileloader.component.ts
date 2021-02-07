import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-fileloader',
  templateUrl: './fileloader.component.html',
  styleUrls: ['./fileloader.component.css']
})
export class FileloaderComponent implements OnInit {

    file: File;

    constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

    setFileName(e) {
        this.file = e.target.files[0];
    }

    loadFile() {
        this.fileService.load(this.file)
    }

}
