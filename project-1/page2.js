
myArr = [" held it and weighed it in my hand, to give myself courage. Vaguely I thought that a pistol shot can be heard for a great distance.",  

" \n \n In ten minutes I had developed my plan. The telephone directory gave me the name of the one person capable of passing on the information. He lived in a suburb of Fenton, less than half an hour away by train.",  

" \n \n I am a timorous man. I can say it now, now that I have brought my incredibly risky plan to an end. It was not easy to bring about, and I know that its execution was terrible. I did not do it for Germany - no! Such a barbarous country is of no importance to me, particularly since it had degraded me by making me become a spy. Furthermore, I knew an Englishman - a modest man - who, for me, is as great as Goethe. I did not speak with him for more than an hour, but during that time, he was Goethe.", 

" \n \n I carried out my plan because ", 

" I felt the Chief had some fear of those of my race, of those uncountable forebears whose culmination lies in me. I wished to prove to him that a yellow man could save his armies. Besides, I had to escape the Captain. His hands and voice could, at any moment, ", 

" knock and beckon at my door.", 

" \n \n Silently,", 

" I dressed, took leave of myself in the mirror, went down the stairs, sneaked a look at the quiet street, and went out. The station was not far from my house, but I thought", 

" it more prudent to take a cab. I told myself that I thus ran less chance of being recognized. The truth is that, in the deserted street, I felt infinitely visible and vulnerable. I recall that I told the driver to stop short of the main entrance. I got out with a painful and deliberate slowness.", 

" \n \n I was going to the village of Ashgrove",

", but took a ticket for a station further on. The train would leave in a few minutes, at eight-fifty. I hurried, for the next would not go until half past nine. There was almost no one",

" on the platform. I walked through the carriages. I remember some farmers, a woman dressed in mourning, a youth deep in Tacitus' Annals and a wounded, happy soldier.",

"\n \n At last the train pulled out. A man I recognized ran furiously, but vainly, the length of the platform. It was Captain Richard Madden. Shattered, trembling, I huddled in the distant corner of the seat, as far as possible from the fearful window." ]; 


let progress = -1;
let p = document.querySelector('p');
let paragraphContent = ""; 


p.onclick = () => { 

    if(progress<myArr.length - 1) {

    progress++;
    paragraphContent = myArr[progress];

    p.innerText += paragraphContent;

    }
}; 










// TEST JAVASCRIPT:

// const section = document.querySelector('section');
// const p = document.querySelector('p');

// p.onclick = () => {
//    p.innerHTML += "<br><br>I went up to my bedroom. Absurd though the gesture was, I closed and locked the door. I threw myself down on my narrow iron bed, and waited on my back. The never changing rooftops filled the window, and the hazy six o'clock sun hung in the sky. It seemed incredible that this day, a day without warnings or omens, might be that of my implacable death. In despite of my dead father, in despite of having been a child in one of the symmetrical gardens of Hai Feng, was I to die now?";
// };

// p.onclick = () => {
//     p.innerHTML += "<br><br>Then I reflected that all things happen, happen to one, precisely now. Century follows century, and things happen only in the present. There are countless men in the air, on land and at sea, and all that really happens happens to me... The almost unbearable memory of Madden's long horseface put an end to these wandering thoughts.";
//  };





 




//  var divOne = document.getElementById('divone');
//  var divTwo = document.getElementById('divtwo');
//  var divThree = document.getElementById('divthree');
//  var divFour = document.getElementById('divfour');



//  divOne.onclick = () => {
//     if (divTwo.style.display !== "none") {
//         divTwo.style.display = "none";
//     } else {
//         divTwo.style.display = "block";
//     }
//  };

//  divTwo.onclick = () => {
//     if (divThree.style.display !== "none") {
//         divThree.style.display = "none";
//     } else {
//         divThree.style.display = "block";
//     }
//  };


//  divThree.onclick = () => {
//     if (divFour.style.display !== "none") {
//         divFour.style.display = "none";
//     } else {
//         divFour.style.display = "block";
//     }
// }; 



 // myArr = ["p1", "p2"];
 // let progress = "0";

 // section.addEventListener("click"){

// p.onclick = () => {
    // p.innerHTML += "<br><br>I went up to my bedroom. Absurd though the gesture was, I closed and locked the door. I threw myself down on my narrow iron bed, and waited on my back. The never changing rooftops filled the window, and the hazy six o'clock sun hung in the sky. It seemed incredible that this day, a day without warnings or omens, might be that of my implacable death. In despite of my dead father, in despite of having been a child in one of the symmetrical gardens of Hai Feng, was I to die now?";

    // progress += 1;

    // paragraphContent = myArr[progress]; 

    // p.innterHTML += paragraphContent 


// myArr
