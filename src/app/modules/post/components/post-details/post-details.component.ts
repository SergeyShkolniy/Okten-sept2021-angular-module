import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPostDetails} from '../../interfaces';
import {PostService} from '../../services';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService : PostService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPostDetails;

      if (state) {
        this.postDetails = state
      }else {
        this.postService.getId(id).subscribe(value => this.postDetails = value)
      }
    })
  }

}
