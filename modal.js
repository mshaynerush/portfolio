



$(document).ready(function(){


  
        var page = $('.heading').text().toLowerCase() + ".txt"
 
        $('.modal-text .sect').load(page).fadeIn(500,"linear");
        
        $('.modal-text .close-btn').click(function(){
        $('.modal-box').fadeOut(500, "linear");
        $('.modal-text').fadeOut(500, "linear");
        $('.section-left').fadeOut(500, "linear");
        $('.modal-text .sect').empty();

        })

        

        $('a').click(function(){
            
            var content = $(this).attr('id') + ".txt"
            $('.modal-text .sect').load(content).fadeIn(500,"linear")

  
        })

            
   

    })
