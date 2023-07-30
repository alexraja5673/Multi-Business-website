

// ---------------- active nav change ------------

            let section=document.querySelectorAll('.nav-list')
			let navLink=document.querySelectorAll('.top-navs')
			window.addEventListener('scroll',()=>{
				
				for(let i=0;i<section.length;i++){
					if(scrollY>=section[i].offsetTop-300 && scrollY<=section[i+1].offsetTop){
						for(let j=0;j<navLink.length;j++){
							if(navLink[j].classList.contains('nav-active')){
								navLink[j].classList.remove('nav-active')
							}
						}
						navLink[i].classList.add('nav-active')
						if(scrollY>=section[i+1].offsetTop){
						navLink[i].classList.remove('nav-active')
					}
					
					}
				}

			})


// -------------- banner carousle ----------------

let slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName("slide");
			// let dots = document.getElementsByClassName("dot");
			if (n > slides.length) { slideIndex = 1 }
			if (n < 1) { slideIndex = slides.length }
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			// for (i = 0; i < dots.length; i++) {
			// 	dots[i].className = dots[i].className.replace(" active", "");
			// }
			slides[slideIndex - 1].style.display = "block";
			// dots[slideIndex-1].className += " active";
		}



//========== scroll nav-bg function ===========

		window.addEventListener('scroll', () => {
			let head = document.getElementById('header')
			if (scrollY > 150) {
				head.classList.add('head')
			} else {
				head.classList.remove('head')
			}
		})



//========== open modal function =========

		let menu = document.querySelector('.mobile-menu')
		let links = document.querySelectorAll('.links')
		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener('click', (e) => {
				let modal = document.querySelector('.mobile-view')

				modal.classList.remove('modal-show')

			})
		}

		menu.addEventListener('click', () => {
			let modal = document.querySelector('.mobile-view')
			modal.classList.add('modal-show')
			modal.style.top = `${scrollY}px`
		})

		let close = document.querySelector('.modal-close')

		close.addEventListener('click', () => {
			let modal = document.querySelector('.mobile-view')
			modal.classList.remove('modal-show')
		})



// ============ accordion ============

		let title = document.querySelectorAll('.accordion-head')

		for (let i = 0; i < title.length; i++) {

			title[i].addEventListener('click', (e) => {
				let content = document.querySelectorAll('.accordion')
				let curElement = e.currentTarget
				let parElement = curElement.parentNode
				let childElement = parElement.querySelector('.accordion')

				for (let j = 0; j < content.length; j++) {

					if (content[j].classList.contains('open')) {
						content[j].classList.remove('open')
						content[j].classList.add('close')
					} else if (content[j].classList.contains('close') && curElement == title[j]) {
						content[j].classList.add('open')
						content[j].classList.remove('close')
					}
					if (title[j].classList.contains('opend')) {
						if (curElement != title[j]) {
							title[j].classList.remove('opend')
							title[j].classList.add('closed')
						}
					}
				}

				if (curElement.classList.contains('closed')) {
					curElement.classList.remove('closed')
					curElement.classList.add('opend')

				} else if (curElement.classList.contains('opend')) {
					curElement.classList.add('closed')
					curElement.classList.remove('opend')
				}

			})
		}




//=========== list portfolio ==============

		let lists = document.querySelectorAll('.port-list')
		let current = document.querySelectorAll('.port-col')

		for (let i = 0; i < lists.length; i++) {
			lists[i].addEventListener('click', function (e) {
				for (let j = 0; j < lists.length; j++) {
					lists[j].classList.remove('actives')
				}
				this.classList.add('actives')
				let name = this.getAttribute('data-filter')

				for (let k = 0; k < current.length; k++) {
					current[k].classList.add('hides')
					current[k].classList.remove('active-item')

					if (current[k].getAttribute('data-item') == name || name == "all") {
						current[k].classList.add('active-item')
						current[k].classList.remove('hides')
					}
				}
			})
		}



		
//================ tetimo slider =================

		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 10,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
			},
		});