//Get the button:
mybutton = document.getElementById("top");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo(0,0)({
        animate: 1000,
        behavior: 'smooth'
    });
};

//Get the button:
mybutton = document.getElementById("bottom");

// When the user clicks on the button, scroll to the bottom of the document
function bottomFunction() {
    window.scrollTo(0,document.body.scrollHeight)({
        animate: 1000,
        behavior: 'smooth'
    });
};
