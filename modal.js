



$(document).ready(function(){

            $('.close-btn').click(function(){

            $('.modal-box').fadeOut(250);
            $('.modal-text').fadeOut(250)
            $('.section-left').fadeOut(250);
        })
            
        $('.modal-text .close-btn').click(function(){
        $('.modal-box').fadeOut(250);
        $('.modal-text').fadeOut(250);
        $('.section-left').fadeOut(50);

        })

        $('a').click(function(){
            
            var page = $(this).attr("id") + ".txt"
            $('.sect').load(page)
         
           
  
        })
 
    })
