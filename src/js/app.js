function hideShowTops() {
	var $tops = document.getElementsByClassName('tops');

	$tops = $tops.length ? $tops : [$tops];
	for (var index = 0; index < $tops.length; index++) {
		$tops[index].style.display = 'none';
	}
}

function hideShowBottoms() {
	var $bottoms = document.getElementsByClassName('bottoms');

	$bottoms = $bottoms.length ? $bottoms : [$bottoms];
	for (var index = 0; index < $bottoms.length; index++) {
		$bottoms[index].style.display = 'none';
	}
}

function hideShowShoes() {
	var $shoes = document.getElementsByClassName('shoes');

	$shoes = $shoes.length ? $shoes : [$bottoms];
	for (var index = 0; index < $shoes.length; index++) {
		$shoes[index].style.display = 'none';
	}
}