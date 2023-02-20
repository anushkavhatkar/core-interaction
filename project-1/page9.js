var one = document.getElementById('sone');
var two = document.getElementById('stwo');
var three = document.getElementById('sthree');
var four = document.getElementById('sfour');
var five = document.getElementById('sfive');
var six = document.getElementById('ssix');
var seven = document.getElementById('sseven');


myArray = [one, two, three, four, five, six, seven];

console.log(myArray[0]);

for (i=0; i<myArray.length; i++ ) {
    for (j=1; j<myArray.length; j++) {
    myArray[i].onclick = () => {
        if (myArray[j].style.display !== "none") {
            myArray[j].style.display = "none";
        } else {
            myArray[j].style.display = "block";
        }
    }
    }
};



//  divOne.onclick = () => {
//     if (divTwo.style.display !== "none") {
//         divTwo.style.display = "none";
//     } else {
//         divTwo.style.display = "block";
//     }
//  };