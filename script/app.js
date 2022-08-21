document.addEventListener("DOMContentLoaded", function(event) { 

    // Uses sharer.js 
    //  https://ellisonleao.github.io/sharer.js/#twitter	
       var shareUrl = window.location.href;
       var shareTitle = document.title;
       var shareSubject = "Read this good article";
       var shareImage = "yourTwitterUsername";
       var shareDescription = "yourTwitterUsername";
    
    
    //facebook
    $('#share-fb').attr('data-url', shareUrl).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', 'twitter');
      // email
      $('#share-em').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-subject', shareSubject).attr('data-sharer', 'email');
    window.Sharer.init();
      $('#share-wa').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', shareSubject).attr('data-sharer', 'whatsapp');
    window.Sharer.init();
    
    $('#share-fb2').attr('data-url', shareUrl).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw2').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', 'twitter');
      // email
      $('#share-em2').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-subject', shareSubject).attr('data-sharer', 'email');
    window.Sharer.init();
      $('#share-wa2').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', shareSubject).attr('data-sharer', 'whatsapp');
    window.Sharer.init();
    




    
    });
    
    
    