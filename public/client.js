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
      console.log('Logging item', item);
      let element = $(postTemplate);
      element.attr('id', item.id);
      element.find('.js-post-item-title').text(item.title);
      return element
    });
    $('.blog-post-landing').html(itemElements);
  });
}

function handleBlogPostAdd() {
  $('#js-post-form').submit(function(e) {
    e.preventDefault();
    addBlogPost({
      title: $('#js-post-title').val(),
      content: $('#js-post-content').val(),
      author: $('#js-post-author').val(),
    });
  });
}

function addBlogPost(item) {
  console.log('Adding blog post: ' + item);
  console.log(item);
  $.ajax({
    method: 'POST',
    url: BLOG_POSTS_URL,
    data: JSON.stringify(item),
    success: function(data) {
      getAndDisplayBloggingPosts();
    },
    dataType: 'json',
    contentType: 'application/json'
  });
}


//Need functions for these CRDU operations
$(function() {
    getAndDisplayBloggingPosts();
    // handleBlogPostAdd();
    // handleBlogPostDelete();
    // handleBlogPostCheckedToggle();  
  });  