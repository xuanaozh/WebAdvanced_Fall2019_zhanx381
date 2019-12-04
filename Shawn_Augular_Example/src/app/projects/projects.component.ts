import { Component, OnInit } from '@angular/core';
import {projects} from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = projects;
  constructor() { }

  showDialog1(){
    let closeModal  = document.getElementById('description-modal')
   closeModal.classList.remove('hhidden')
   closeModal.classList.add('sshow');
  }
  closeDialog1() {
      let closeModal  = document.getElementById('description-modal')
      closeModal.classList.remove('sshow')
      closeModal.classList.add('hhidden');
  }
  ngOnInit() {
    
  }

}
