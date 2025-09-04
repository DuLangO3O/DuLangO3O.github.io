var posts=["2025/09/02/AI界来了香蕉/","2025/09/01/关于网站更新的新功能/","2025/08/31/博客新增看板娘/","2025/08/30/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };