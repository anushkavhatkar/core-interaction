let paragraph = document.getElementById('main');

let content = "Two circumstances showed me the direct solution to the problem. First, the curious legend that Ts'ui Pen had proposed to create an infinite maze, second, a fragment of a letter which I discovered. \n Albert rose. For a few moments he turned his back to me. He opened the top drawer in the high black and gilded writing cabinet. He returned holding in his hand a piece of paper which had once been crimson but which had faded with the passage of time: it was rose colored, tenuous, quadrangular. Ts'ui Pen's calligraphy was justly famous. Eagerly, but without understanding, I read the words which a man of my own blood had written with a small brush: \"I leave to various future times, but not to all, my garden of forking paths.\"";

let myArray = [
    "\n \nI handed back the sheet of paper in silence. Albert went on: \n \"Before I discovered this letter, I kept asking myself how a book could be infinite. I could not imagine any other than a cyclic volume, circular. A volume whose last page would be the same as the first and so have the possibility of continuing indefinitely. I recalled, too, the night in the middle of The Thousand and One Nights when Queen Scheherezade, through a magical mistake on the part of her copyist, started to tell the story of The Thousand and One Nights, with the risk of again arriving at the night upon which she will relate it, and thus on to infinity. I also imagined a Platonic hereditary work, passed on from father to son, to which each individual would add a new chapter or correct, with pious care, the work of his elders.\"", 

    "\n \nThese conjectures gave me amusement, but none seemed to have the remotest application to the contradictory chapters of Ts'ui Pen. At this point, I was sent from Oxford the manuscript you have just seen. \n \n Naturally, my attention was caught by the sentence, 'I leave to various future times, but not to all, my garden of forking paths: I had no sooner read this, than I understood. The Garden of Forking Paths was the chaotic novel itself. The phrase 'to various future times, but not to all' suggested the image of bifurcating in time, not in space. Rereading the whole work confirmed this theory. In all fiction, when a man is faced with alternatives he chooses one at the expense of the others. In the almost unfathomable Ts'ui Pen, he chooses - simultaneously - all of them. He thus creates various futures, various times which start others that will in their turn branch out and bifurcate in other times. This is the cause of the contradictions in the novel.\""

];

addEventListener("resize", (event) => {

    if(window.innerWidth < 768 ) {
        paragraph.innerText += myArray[0];
    } else if (window.innerWidth < 400 ) {
        paragraph.innerText += myArray[1];
    } else {
        paragraph.innerText = "";
    }


});