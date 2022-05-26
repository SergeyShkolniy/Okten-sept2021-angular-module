import {Component, OnInit} from '@angular/core';
import {ICommentDetails} from '../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../services';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private commentService : CommentService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as ICommentDetails;

      if (state){
        this.commentDetails = state
      }else {
        this.commentService.getId(id).subscribe(value => this.commentDetails = value)
      }
    })
  }

}
