    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
     
      var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if (isChrome) {
        window.location.href = "intent://playgooglecom423.github.io/redir/mobile#Intent;scheme=https;package=com.android.chrome;end";
      } else {
        window.location.href = "https://playgooglecom423.github.io/redir/mobile";
          }else {
    window.location.href = "https://playgooglecom423.github.io/pc.html";
  }
    }
