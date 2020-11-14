// function hideShowTops() {
// 	var $tops = document.getElementsByClassName('tops');
// 
// 	$tops = $tops.length ? $tops : [$tops];
// 	for (var index = 0; index < $tops.length; index++) {
// 		$tops[index].style.display = 'none';
// 	}
// }

// function hideShowBottoms() {
// 	var $bottoms = document.getElementsByClassName('bottoms');
// 
// 	$bottoms = $bottoms.length ? $bottoms : [$bottoms];
// 	for (var index = 0; index < $bottoms.length; index++) {
// 		$bottoms[index].style.display = 'none';
// 	}
// }

// function hideShowShoes() {
// 	var $shoes = document.getElementsByClassName('shoes');

// 	$shoes = $shoes.length ? $shoes : [$bottoms];
// 	for (var index = 0; index < $shoes.length; index++) {
// 		$shoes[index].style.display = 'none';
// 	}
// }

function hideShowTops() {

	var $tops = document.getElementsByClassName('tops');
	console.log($tops);
	var $top, index;

	$tops = $tops.length ? $tops : [$tops];
	for (index = 0; index < $tops.length; index++) {
		$top = $tops[index];
		console.log($top);

		if (isElementHidden($top)) {
			$top.style.display = '';

			if (isElementHidden($top)) {
				$top.style.display = 'block';
			}
		} else {
			$top.style.display = 'none';
		}
		function isElementHidden ($top) {
			return window.getComputedStyle($top, null).getPropertyValue('display') === 'none';
		}
	}
}

function hideShowBottoms() {
	var $bottoms = document.getElementsByClassName('bottoms');
	console.log($bottoms);
	var $bottom, index;

	$bottoms = $bottoms.length ? $bottoms : [$botoms];
	for (index = 0; index < $bottoms.length; index++) {
		$bottom = $bottoms[index];
		console.log($bottom);

		if (isElementHidden($bottom)) {
			$bottom.style.display = '';

			if (isElementHidden($bottom)) {
				$bottom.style.display = 'block';
			} 
		} else {
			$bottom.style.display = 'none';
		}
		function isElementHidden ($bottom) {
			return window.getComputedStyle($bottom, null).getPropertyValue('display') === 'none';
		}
	}
}

function hideShowShoes() {
	var $shoes = document.getElementsByClassName('shoes');
	console.log($shoes);
	var $shoe, index;

	$shoes = $shoes.length ? $shoes : [$shoes];
	for (index = 0; index < $shoes.length; index++) {
		$shoe = $shoes[index];
		console.log($shoe);

		if (isElementHidden($shoe)) {
			$shoe.style.display = '';

			if (isElementHidden($shoe)) {
				$bottom.style.display = 'block';
			}
		} else {
			$shoe.style.display = 'none';
		}
		function isElementHidden ($shoe) {
			return window.getComputedStyle($shoe, null).getPropertyValue('display') === 'none';
		}
	}
}