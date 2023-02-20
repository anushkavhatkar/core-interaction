var one = document.getElementById('sone');
var two = document.getElementById('stwo');
var three = document.getElementById('sthree');
var four = document.getElementById('sfour');
var five = document.getElementById('sfive');
var six = document.getElementById('ssix');
var seven = document.getElementById('sseven');


myArray = [one, two, three, four, five, six, seven];

console.log(myArray[0]);



myArray[0].onclick = function addSection() {
    if (myArray[1].style.display !== "none") {
        myArray[1].style.display = "none";
    } else { 
        myArray[1].style.display = "block";
    }
};

myArray[1].onclick = function addSection() {
    if (myArray[2].style.display !== "none") {
        myArray[2].style.display = "none";
    } else { 
        myArray[2].style.display = "block";
    }
};

myArray[2].onclick = function addSection() {
    if (myArray[3].style.display !== "none") {
        myArray[3].style.display = "none";
    } else { 
        myArray[3].style.display = "block";
    }
};

myArray[3].onclick = function addSection() {
    if (myArray[4].style.display !== "none") {
        myArray[4].style.display = "none";
    } else { 
        myArray[4].style.display = "block";
    }
};

myArray[4].onclick = function addSection() {
    if (myArray[5].style.display !== "none") {
        myArray[5].style.display = "none";
    } else { 
        myArray[5].style.display = "block";
    }
};

myArray[5].onclick = function addSection() {
    if (myArray[6].style.display !== "none") {
        myArray[6].style.display = "none";
    } else { 
        myArray[6].style.display = "block";
    }
};

myArray[6].onclick = function addSection() {
    if (myArray[7].style.display !== "none") {
        myArray[7].style.display = "none";
    } else { 
        myArray[7].style.display = "block";
    }
};




// for (i = 0; i<myArray.length; i++ ) {
//     for (j = 0; j<myArray.length; j++) {
//     myArray[i].onclick = () => {
//         if (myArray[j].style.display !== "none") {
//             myArray[j].style.display = "none";
//         } else {
//             myArray[j].style.display = "block";
//         }
//     }
//     }
// };



// for (i=0; i< myArray.length; i++) {
//     myArray[i].onclick = function addSection() {
//         if (myArray[i+1].style.display !== "none") {
//             myArray[i+1].style.display = "none";
//         } else { 
//             myArray[i+1].style.display = "block";
//         }
//     };
// }






//  divOne.onclick = () => {
//     if (divTwo.style.display !== "none") {
//         divTwo.style.display = "none";
//     } else {
//         divTwo.style.display = "block";
//     }
//  };