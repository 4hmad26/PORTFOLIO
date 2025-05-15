function mymenufuction(){
    var menubth = document.getElementById("mynavmenu");

    if( menubth.className ==="nav-manu"){
        menubth.className += " responsive";
    }
    else{
        menubth.className = "nav-manu";
}
}

/*---dark mode---*/
const body = document.querySelector("body");
 const toggleswitch = document.getElementById("toggle-switch");

toggleswitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

/*--typing effect--*/
var typingEffect = new Typed(".typedtext", {
    strings: ["designer", "coder", "developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});


/*--scroll ANIMATION--*------------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
});

sr.reveal(".featued-name" , { delay: 100 });
sr.reveal(".text-info" , { delay: 200 });
sr.reveal(".text-btn" , { delay: 200 });
sr.reveal(".social-icons" , { delay: 200 });
sr.reveal(".featured-image" , { delay: 320 });

sr.reveal(".project-box", {interval: 200,});

sr.reveal(".top-header",{});

const srleft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 1000,
    reset: true,
});

srleft.reveal(".about-info" ,{ delay: 100 });
srleft.reveal(".contact-info" ,{ delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 1000,
    reset: true,
});

srRight.reveal(".skill" ,{ delay: 100 });
srRight.reveal(".skill-box" ,{ delay: 100 });

/*--active link------------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-manu a[href*='" + sectionId + "']").classList.add("active-link");
    }else{
        document.querySelector(".nav-manu a[href*='" + sectionId + "']").classList.remove("active-link");
    }
    });
}

window.addEventListener("scroll", scrollActive);

// Smooth scroll to section on nav link click
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor jump
        const targetId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId.toLowerCase());

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust if header is fixed
                behavior: 'smooth'
            });
        }

        // Close responsive menu if open (for mobile view)
        const navMenu = document.getElementById('mynavmenu');
        if (navMenu.classList.contains('responsive')) {
            navMenu.classList.remove('responsive');
        }
    });
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_qkea2lg', 'template_21ruiy5', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });

    this.reset(); // Reset the form
});

   
