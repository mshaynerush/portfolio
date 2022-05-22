$(document).ready(
	function(){

	$width = parseInt($('div.carousel-container').width())
	$pos = parseInt($('ul.carousel').position().left)
	$len = parseInt($('ul.carousel img').length)
	$totWidth = parseInt($width * $len)

	$('ul.carousel').css('width',$totWidth)
	$('ul.carousel li').css('width',$width)

	$('.button-left').click(
		function(){

			$('ul.carousel').animate({
				'margin-left': $pos -= $width
			},1000, checkLeft)
		})

	$('.button-right').click(
		function(){
			if ( $pos == 0 ){
				$pos = -$totWidth + $width
				$('ul.carousel').animate({
					'margin-left': $pos
				},0)		
			} else {
				$pos = $pos
			}

				goRight($pos)
		})

	function checkLeft(){
		if( $pos <= -$totWidth + $width ){
			$pos = 0
			$('ul.carousel').animate({
				'margin-left': 0
			},0)
		} else {
			$pos = $pos
		}
	}
	function goRight(){
		$('ul.carousel').animate({
					'margin-left': $pos += $width
				}, 1000)
			
	}

})


