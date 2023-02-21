let spanOne = document.getElementById('one');
let spanTwo = document.getElementById('two');
let spanThree = document.getElementById('three');
let spanFour = document.getElementById('four');


addEventListener("resize", (event) => {

    if(window.innerWidth >= 768) {
        spanOne.innerHTML = "<span class=\"one\">Fang, let us say, has a secret. A stranger knocks at ⇥ </span> his door.";
    } else if ( window.innerWidth <= 768 && window.innerWidth >= 400 ) {
        spanOne.innerHTML = "<span class=\"one\"> Fang, let us say, has a secret. A stranger knocks ⇥ </span> at his door.";
    } else {
        spanOne.innerHTML = "<span class=\"one\"> Fang, let us say, has  ⇥ </span> a secret. A stranger knocks at his door.";
    }


});


addEventListener("resize", (event) => {

    if(window.innerWidth > 768) {
        spanTwo.innerHTML = "<span class=\"two\"><br><br>At that moment I felt within me and around me ⇥ </span> something invisible and intangible pullulating. It was not the pullulation of two divergent, parallel, and finally converging armies, but an agitation more inaccessible, more intimate, prefigured by them in some way. Stephen Albert continued:";

    } else if ( window.innerWidth < 768 && window.innerWidth > 400 ) {
        spanTwo.innerHTML = "<span class=\"two\"><br><br>At that moment I felt within me and around me ⇥ </span> something invisible and intangible pullulating. It was not the pullulation of two divergent, parallel, and finally converging armies, but an agitation more inaccessible, more intimate, prefigured by them in some way. Stephen Albert continued:";

    } else {
        spanTwo.innerHTML = "<span class=\"two\"><br><br>At that moment I ⇥ </span> felt  within me and around me. something invisible and intangible pullulating. It was not the pullulation of two divergent, parallel, and finally converging armies, but an agitation more inaccessible, more intimate, prefigured by them in some way. Stephen Albert continued:";

    }


});


addEventListener("resize", (event) => {

    if(window.innerWidth < 400) {
        spanThree.innerHTML = "<span class=\"two\"> ⇤ I proposed various </span> solutions, all of them  inadequate. We discussed them. Finally Stephen Albert said: \"In a guessing game to which the answer is chess, which word is the only one prohibited?\" I thought for a moment and then replied:";

    } else if ( window.innerWidth < 768 && window.innerWidth > 400 ) {
        spanThree.innerHTML = "<span class=\"two\"> ⇤ I proposed various solutions, all of them </span> inadequate. We discussed them. Finally Stephen Albert said: \"In a guessing game to which the answer is chess, which word is the only one prohibited?\" I thought for a moment and then replied:";

    } else {
        spanThree.innerHTML = "<span class=\"two\"> ⇤ I proposed various solutions, all of them </span> inadequate. We discussed them. Finally Stephen Albert said: \"In a guessing game to which the answer is chess, which word is the only one prohibited?\" I thought for a moment and then replied:";
    }


});

addEventListener("resize", (event) => {

    if(window.innerWidth < 400) {
        spanFour.innerHTML = "<span class=\"one\"><br><br>⇤ that life itself was </span> of little value, and so they won  the battle easily. In the second, the same army passes through a palace where a banquet is in progress. The splendor of the feast remained a memory throughout the glorious battle, and so victory followed.";

    } else if ( window.innerWidth < 768 && window.innerWidth > 400 ) {
        spanFour.innerHTML = "<span class=\"one\"><br><br>⇤ that life itself was of little value, and so they won </span> the battle easily. In the second, the same army passes through a palace where a banquet is in progress. The splendor of the feast remained a memory throughout the glorious battle, and so victory followed.";

    } else {
        spanFour.innerHTML = "<span class=\"one\"><br><br>⇤ that life itself was of little value, and so they won </span> the battle easily. In the second, the same army passes through a palace where a banquet is in progress. The splendor of the feast remained a memory throughout the glorious battle, and so victory followed.";
    }


});




"<span class=\"one\"><br><br>⇤ that life itself was of little value, and so they won </span> the battle easily. In the second, the same army passes through a palace where a banquet is in progress. The splendor of the feast remained a memory throughout the glorious battle, and so victory followed."

