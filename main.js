let element = document.querySelector('.entries');
let done = document.querySelector('.done');
let counter = 0;
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

element.innerHTML = counter;
plus.addEventListener('click', function() {

	counter++;
	element.innerHTML = counter;

});
minus.addEventListener('click', function() {

	counter--;
	element.innerHTML = counter;
});
done.addEventListener('click', function() {

	timeMinut = parseInt(counter) * 60;
	plus.hidden = true;
	minus.hidden = true;
	done.classList.add("hidden");
	let timer = setInterval(function () {
    let seconds = timeMinut%60;
    let minutes = timeMinut/60%60;
    let hour = timeMinut/60/60%60;
    if (timeMinut <= 0) {
    	plus.hidden = false;
		minus.hidden = false;
		done.classList.remove("hidden");
        clearInterval(timer);

        alert("Время закончилось");
    } else {

        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        
        element.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)
});