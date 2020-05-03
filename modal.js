



$(document).ready(function(){
    
        $('img').on('click', function(){
            alert('fuck')
        })
        $('a').click(function(){
            
            var page = this.id + ".txt"
           
            $('.page-content').load(page)
            if($('.side-by-side').offset().left >= 0){
                
    $('.side-by-side').animate(
        {
           
            left: '-1800px'
            
            }, { duration: 500,
                easing: 'linear'
                });
    $('.page-info').animate({
        width: '100%',
        left: '0',
        display: 'block'
    }, { duration: 500 }
    )
    
    $('.section-close-button').css('display', "block")
        
        } else {
            $('.side-by-side').animate({
                left: '0px',
            }, { duration: 500,
                easing: 'linear' })
        }
        
    })
    $('.section-close-button').click(function(){
        $('.section-close-button').css('display', "none")
        $('.page-info').animate({
            left: '100%',
            height: '100%',
            width: '0',
            display: 'none'
        }, { duration: 500 })
        $('.side-by-side').animate({
            left: '0'
           
        }, {
            duration: 500,
            easing: 'linear'
        })
        
    
            
            setTimeout(() =>{
                $('.page-content').empty()
            }, 400)
        

        

    

    
    })
})