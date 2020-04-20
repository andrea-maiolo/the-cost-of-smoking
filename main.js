var min = 1,
	max = 100,
	packs = document.getElementById('costPack');
    cigarettes = document.getElementById('cigarettes');
    cigarettesSmoked = document.getElementById('ciggySmoked');
    smokingYears = document.getElementById('smokingTime');
    result = document.querySelector('#result');
    calculation = document.querySelector('#calculation');
    calculation.addEventListener('click', calculate);
    currency = document.querySelector('#currency');
    const para = document.createElement('p');

for (var i = min; i <= max; i++) {
	var opt = document.createElement('option');
	opt.value = i;
	opt.innerHTML = i;
	costPack.appendChild(opt);
}
for (var i = min; i <= max; i++) {
	var opt = document.createElement('option');
	opt.value = i;
	opt.innerHTML = i;
	cigarettes.appendChild(opt);
}
for (var i = min; i <= max; i++) {
	var opt = document.createElement('option');
	opt.value = i;
	opt.innerHTML = i;
	ciggySmoked.appendChild(opt);
}
for (var i = min; i <= max; i++) {
	var opt = document.createElement('option');
	opt.value = i;
	opt.innerHTML = i;
	smokingTime.appendChild(opt);
}


function calculate() {
	const frequency = document.querySelector('#frequency');
	const smokingTime = document.querySelector('#smokingTime');
	const howLong = document.querySelector('#howLong');
	let timeSmoking = (howLong.value * smokingTime.value);
	let x = (ciggySmoked.value * timeSmoking) / frequency.value;
	let a = x / cigarettes.value;
	let total = a * costPack.value;
	para.style.fontWeight='700';
	para.style.fontSize='20px';
	para.style.color='rgb(3, 43, 77)'
	para.setAttribute('id','totalAmount');
	para.textContent = 'You have spent '+total + ' ' + currency.value +' till now';
	result.appendChild(para);
	if(para.display == true){ 
	
	reset()
	}else{
		return
	}
}

function reset(){
	result.removeChild(para);
}