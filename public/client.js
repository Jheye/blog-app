const BLOG_POSTS_URL = '/blog-posts';











//Need functions for these CRDU operations
$(function() {
    getAndDisplayBloggingPosts();
    handleBlogPostAdd();
    handleBlogPostDelete();
    handleBlogPostCheckedToggle();  
  });