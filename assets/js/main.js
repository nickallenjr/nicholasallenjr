$(document).ready(function () {

	const nav = document.getElementById("navi");

	window.addEventListener('scroll', function() {
		const winTop = window.pageYOffset

		if (winTop > 0) {
			TweenMax.to(nav, 1, {position:"fixed", backgroundColor:"#222222", top:0, zIndex:2});
			TweenMax.to(".naviTitle1", 1, {color:"#ffffff"});
		}else {
			TweenMax.to(nav, 1, {position:"fixed", backgroundColor:"transparent"})
			TweenMax.to(".naviTitle1", 1, {color:"#ffffff"})
		}
	})

	//GSAP for animating logo
	const logoTl = new TimelineMax({repeat:-1, repeatDelay:1, yoyo:true, delay:2});
	const logo = document.getElementById("logo");
	const laptop = document.getElementById("laptopScreen");
	const window1 = document.getElementById("window1");
	const window2 = document.getElementById("window2");
	const window3 = document.getElementById("window3");
	const window4 = document.getElementById("window4");
	const apple = document.getElementById("apple");
	const appleStem = document.getElementById("appleStem");
	const keyboard = document.getElementById("laptopBase");
	const game = document.getElementById("game");
	const mobile = document.getElementById("mobile");
	const github = document.getElementById("github");
	const monitor = document.getElementById("screen");
	const stand = document.getElementById("stand");

	logoTl.to(window3, 1, {morphSVG:appleStem})
	.to(window2, 1, {morphSVG:apple}, "-=1")
	.to(window4, 1, {scale:0}, "-=1")
	.to(window1, 1, {scale:0}, "-=1")
	.to(window2, 1, {morphSVG:mobile}, "+=3")
	.to(window3, 1, {scale:0}, "-=1")
	.to(window2, 1, {morphSVG:laptop}, "+=3")
	.set(keyboard, {visibility:"visible"}, "-=0.1")
	.to(window2, 1, {morphSVG:monitor}, "+=3")
	.to(keyboard, 1, {morphSVG:stand}, "-=1")
	.set(stand, {visibility:"hidden"}, "-=0.6")

	let mousedOver = function (linkBox, link) {
		
		let box = document.getElementById(linkBox);
		let linksTl = new TimelineMax();

		box.onmouseenter = function () {
			linksTl.set(link, {visibility:"visible"})
			.fromTo(link, 1, {scale:0}, {scale:1})
		}

		box.onmouseleave = function () {
			linksTl.set(link, {visibility:"hidden"})
			.fromTo(link, 1, {scale:1}, {scale:0})
		}
	}

	mousedOver('naviBox1', '#naviLink1');
	mousedOver('naviBox2', '#naviLink2');
	mousedOver('naviBox3', '#naviLink3');
	mousedOver('naviBox4', '#naviLink4');

	//Animation for scroll element into view
	const homelink = document.getElementById("naviBox1");
	const worklink = document.getElementById("naviBox2");
	const aboutlink = document.getElementById("naviBox3");
	const contactlink = document.getElementById("naviBox4");

	homelink.onclick = function () {
		const naviDiv = document.getElementById("welcomeDiv");
		naviDiv.scrollIntoView({behavior:"smooth"});
	}

	worklink.onclick = function () {
		const workDiv = document.getElementById("gridWorks");
		workDiv.scrollIntoView({behavior:"smooth"});
	}

	aboutlink.onclick = function () {
		const aboutDiv = document.getElementById("expertiseDiv");
		aboutDiv.scrollIntoView({behavior:"smooth"});
	}

	contactlink.onclick = function () {
		const contactDiv = document.getElementById("contactDiv");
		contactDiv.scrollIntoView({behavior:"smooth"});
	}

	//GSAP animations for Headline welcome text
	const tl = new TimelineMax();

	const content = document.getElementById("welcomeDiv");
	const welcome = document.getElementById("welcome");
	const thanks = document.getElementById("thanks");
	const questions = document.getElementById("questions");
	const arrowDown = document.getElementById("dArrow");

	tl.to(welcome, 2, {text:{value:"Hello and welcome", autoAlpha:0}})
	.to(thanks, 3, {text:{value:"Thanks for visiting my portfolio", autoAlpha:0}}, "+=0.5")
	.to(questions, 2, {text:{value:"If you have any questions feel free to contact me", autoAlpha:0}}, "+=0.5")
	.from(arrowDown, 1, {y:20, repeat:-1, autoAlpha:0, yoyo:true}, "-=0.5", "arrow");


	const sign = document.getElementById("naviTitle2");
	const split = new SplitText(sign, {type:"chars"})

	$(window).scroll(function() {
		
	   if($(window).scrollTop() + $(window).height() >= ($(document).height() - 2)) {

	   	console.log('btm')
	   	TweenMax.set(sign, {visibility:"visible"})
		TweenMax.staggerFromTo(split.chars, 3, {opacity:0, x:-1}, {opacity:1, x:0}, 0.1);
	   }
	});
	
})