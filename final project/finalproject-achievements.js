var expandMoreElements = document.querySelectorAll ('.expand_more');
for(var i = 0; i < expandMoreElements.length; i++) {
	expandMoreElements[i].addEventListener('click', function() { showDiv(this); }, false);
}

var expandLessElements = document.querySelectorAll ('.expand_less');
for(var i = 0; i < expandLessElements.length; i++) {
	expandLessElements[i].addEventListener('click', function() { hideDiv(this); }, false);
}

function showDiv(el) {
	var myDiv = el.parentNode.parentNode;
	myDiv.className = '';
	el.peviousElementSibling.style.display = '';
	el.style.display = 'none';
}

function hideDiv(el) {
	var myDiv = el.parentNode.parentNode;
	myDiv.className = 'hidden';
	el.nextElementSibling.style.display = '';
	el.style.display = 'none';
}

