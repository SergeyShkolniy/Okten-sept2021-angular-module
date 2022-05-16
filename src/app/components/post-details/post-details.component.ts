import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost

  constructor(private activatedRoute :ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      const {state} = history;
      this.postDetails = state;
    })
  }

  ngOnInit(): void {
  }

}
