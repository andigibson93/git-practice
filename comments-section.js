<ul>
  {{#each comments as |comment|}}
    <li class="comment">
      <span class="comment-name">{{comment.author}}</span> <span class="comment-timestamp {{if comment.duringLive "live-comment"}}">{{format-time comment.timeStamp}}</span>
      <p class="comment-body">{{comment.comment}}</p>
    </li>
  {{/each}}
 
</ul>
