const BLOG_POSTS_URL = '/blog-posts';

let postTemplate = (
'<li class="js-post-item">' +
    '<p><span class="post-item js-post-item-title"></span></p>' +
    '<div class="post-item-controls">' +
      '<button class="js-post-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);

function getAndDisplayBloggingPosts() {
  console.log('Retrieving blog post...');
  $.getJSON(BLOG_POSTS_URL, function(items) {
    console.log('Rendering blog post...');
    let itemElements = items.map(function(item) {
      let element = $(postTemplate);
      element.attr('id', item.id);
      let itemTitle = element.find('.js-post-item-title');
      itemTitle.text(item.title);
      return element
    });
    $('.blog-post-landing').html(itemElements);
  });
}










//Need functions for these CRDU operations
$(function() {
    getAndDisplayBloggingPosts();
    handleBlogPostAdd();
    handleBlogPostDelete();
    handleBlogPostCheckedToggle();  
  });  