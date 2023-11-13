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