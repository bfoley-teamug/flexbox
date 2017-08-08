 $( document ).ready(function() {
    $('img').hide();
    $('img').each(function(i) {
        if (this.complete) {
            $(this).fadeIn(800);
        } 
    });
});
 