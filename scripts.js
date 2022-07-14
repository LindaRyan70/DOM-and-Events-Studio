// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load", function() {

    let status = this.document.getElementById("flightStatus");
    let background = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    
    // Movement Bonus required adding shuttleWidth here and in index.html lines 32-33.
    let shuttleWidth = this.document.getElementById("spaceShuttleWidth");
    
    let takeOffBtn = this.document.getElementById("takeoff");
    let landingBtn = this.document.getElementById("landing");
    let abortBtn = this.document.getElementById("missionAbort");

    let upBtn = this.document.getElementById("up");
    let downBtn = this.document.getElementById("down");
    let rightBtn = this.document.getElementById("right");
    let leftBtn = this.document.getElementById("left");

    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';


    takeOffBtn.addEventListener("click", function() {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";  // Or should I use 10000 as a number w/o quotes?
            shuttleWidth.innerHTML = "0";
            // Bonus next 2 lines
            let movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
        }
    })

    landingBtn.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        shuttleWidth.innerHTML = "0";
        // Bonus next 2 lines
        imgObj.style.bottom = "0px";
        imgObj.style.left = "0px";
    })

    abortBtn.addEventListener("click", function() {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";  // Or should I use 0 as a number w/o quotes?
            shuttleWidth.innerHTML = "0";
            // Bonus next 2 lines
            imgObj.style.bottom = "0px";
            imgObj.style.left = "0px";
        }
    })


    // Moving Up, Down, Left, Right with Bonus Limits

    upBtn.addEventListener("click", function() {
        if(shuttleHeight.innerHTML != "250000") {
            let movement = parseInt(imgObj.style.bottom) + 10 + "px";
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    downBtn.addEventListener("click", function() {
        if(shuttleHeight.innerHTML != "0") {
            let movement = parseInt(imgObj.style.bottom) - 10 + "px";
            imgObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    })

    rightBtn.addEventListener("click", function() {
        if(shuttleWidth.innerHTML != "550000") {
            let movement = parseInt(imgObj.style.left) + 10 + "px";
            imgObj.style.left = movement;
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
        }
    })

    leftBtn.addEventListener("click", function() {
        if(shuttleWidth.innerHTML != "-20000") {
            let movement = parseInt(imgObj.style.left) - 10 + "px";
            imgObj.style.left = movement;
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
        }
    })

})
