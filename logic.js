function myFunction() {

    if (window.innerWidth < 800) {
        document.getElementById("contain-all").style.display = 'none';
        document.getElementById("mobile").style.display = 'block';
    }

    if (window.innerWidth > 800) {
        document.getElementById("contain-all").style.display = 'block';
        document.getElementById("mobile").style.display = 'none';
    }

    // if (window.innerWidth < 800) {
    //     document.getElementById("headshot").style.display = 'none';
    //     document.getElementById("contact").style.display = 'none';
    //     document.getElementById("small-contact").style.display = '';
    // }

}

window.addEventListener("resize", function() {

    if (window.innerWidth < 800) {
        document.getElementById("contain-all").style.display = 'none';
        document.getElementById("mobile").style.display = 'block';
    }

    if (window.innerWidth > 800) {
        document.getElementById("contain-all").style.display = 'block';
        document.getElementById("mobile").style.display = 'none';
    }

    // if (window.innerWidth < 800) {
    //     document.getElementById("headshot").style.display = 'none';
    //     document.getElementById("contact").style.display = 'none';
    //     document.getElementById("small-contact").style.display = '';
    // }

    // if (window.innerWidth > 800) {
    //     document.getElementById("headshot").style.display = '';
    //     document.getElementById("contact").style.display = '';
    //     document.getElementById("small-contact").style.display = 'none';
    // }

});

function displayContent(event, contentNameID) { 

    document.getElementById('work').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
    document.getElementById('hobbies').style.display = 'none'

    document.getElementById('tab1').style.backgroundColor = '#749BC2'
    document.getElementById('tab2').style.backgroundColor = '#749BC2'
    document.getElementById('tab3').style.backgroundColor = '#749BC2'



    if (contentNameID == 'Resume' ) {
        document.getElementById('work').style.display = '';
        document.getElementById('tab1').style.backgroundColor = '#93BFCF'
    }

    if (contentNameID == 'Projects' ) {
        document.getElementById('projects').style.display = '';
        document.getElementById('tab2').style.backgroundColor = '#93BFCF'
    }

    if (contentNameID == 'Hobbies') {
        document.getElementById('hobbies').style.display = '';
        document.getElementById('tab3').style.backgroundColor = '#93BFCF'
    }

}

function actionButton() {

    document.getElementById("Horizontal").classList.toggle("visible")
    document.getElementById("Vertical").classList.toggle("visible")
    
}

function tabButton(tab) {

    var tabs = ["certTab","projectTab","resumeTab"]

    for (t of tabs) {

        document.getElementById(t).style.display = "none"
    }

    document.getElementById(tab).style.display = "block"

}