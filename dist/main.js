const homeButton = document.querySelector("#nav-menu__home");
const yogaButton = document.querySelector("#nav-menu__yoga");
const meditationButton = document.querySelector("#nav-menu__meditation");
const gratitudeButton = document.querySelector("#nav-menu__gratitude");
const tipsButton = document.querySelector("#nav-menu__tips");
const content = document.querySelector(".content-wrapper");

meditationButton.addEventListener("click", () =>{
    clearContent();

    const meditation = document.createElement('h2');
    const meditationParagraph = document.createElement('p');
    const benefits = document.createElement('h2');
    const firstPoint = document.createElement('h3');
    const firstPointParagraph = document.createElement('p');
    const secondPoint = document.createElement('h3');
    const secondPointParagraph = document.createElement('p');
    const thirdPoint = document.createElement('h3');
    const thirdPointParagraph = document.createElement('p');


    meditation.textContent = "Meditation";
    meditationParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    benefits.textContent = "Benefits";
    firstPoint.textContent = "Easier to sustain attention";

    firstPointParagraph.textContent = "One of the main reasons I meditate is to improve my focus when distracting thoughts come in. When the attention is pulled by a random pop-up thoughts that demand attention you gently pull it backto the object of meditation like breath. And that's all there is to it, the hard part is to do it consistently and put the effort in. Over time the effects of these training sessions compound and ithelps to focus on the daily tasks.";

    secondPoint.textContent = "Improves sleep";

    secondPointParagraph.textContent = "I've read in a book 'Why we sleep' by Matthew Walker that one of the ways to sleep better is to shut the light out about an hour before you'd like to sleep to increase the melatonin production which makes you sleepy. Meditating in that one hour interval compliments the ease of falling asleep even more as you relax your body and go into a peaceful state.";

    thirdPoint.textContent = "Better life quality";
    
    thirdPointParagraph.textContent = "The overall life quality keeps getting better as the time goes by. That's mostly to the fact that the relationship with negative feelings and anxiety becomes different, even though you still experience these states they have less impact then previously.";

    content.appendChild(meditation);
    content.appendChild(meditationParagraph);
    content.appendChild(benefits);
    content.appendChild(firstPoint);
    content.appendChild(firstPointParagraph);
    content.appendChild(secondPoint);
    content.appendChild(secondPointParagraph);
    content.appendChild(thirdPoint);
    content.appendChild(thirdPointParagraph);
});

gratitudeButton.addEventListener("click", () =>{
    clearContent();

    const gratitude = document.createElement('h2');
    const gratitudeParagraph = document.createElement('p');
    const benefits = document.createElement('h2');
    const firstPoint = document.createElement('h3');
    const firstPointParagraph = document.createElement('p');
    const secondPoint = document.createElement('h3');
    const secondPointParagraph = document.createElement('p');
    const thirdPoint = document.createElement('h3');
    const thirdPointParagraph = document.createElement('p');


    gratitude.textContent = "Gratitude";
    gratitudeParagraph.textContent = "This is about gratitude";
    benefits.textContent = "Benefits";
    firstPoint.textContent = "Increase optimism";

    firstPointParagraph.textContent = " If you’re not naturally optimistic, gratitude practice can help you cultivate an optimistic outlook";

    secondPoint.textContent = "Clarity on what's important";

    secondPointParagraph.textContent = "By noting what you are grateful for, you tend to gain clarity on what you want to have more of in your life, and what you can cut from you life. You then gain a new perspective of what is important to you and what you truly appreciate in your life";

    thirdPoint.textContent = "Improves relationships";
    
    thirdPointParagraph.textContent = "As a side effect of gratitude practice you strengthen existing relationships with people you already know. It also plays an important role in forming new relationships.";

    content.appendChild(gratitude);
    content.appendChild(gratitudeParagraph);
    content.appendChild(benefits);
    content.appendChild(firstPoint);
    content.appendChild(firstPointParagraph);
    content.appendChild(secondPoint);
    content.appendChild(secondPointParagraph);
    content.appendChild(thirdPoint);
    content.appendChild(thirdPointParagraph);
});




function clearContent(){
    content.innerHTML = "";
};

    
