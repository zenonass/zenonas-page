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
    meditationParagraph.textContent = "This is about meditation";
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

yogaButton.addEventListener("click", () =>{
    clearContent();

    const yoga = document.createElement('h2');
    const yogaParagraph = document.createElement('p');
    const benefits = document.createElement('h2');
    const firstPoint = document.createElement('h3');
    const firstPointParagraph = document.createElement('p');
    const secondPoint = document.createElement('h3');
    const secondPointParagraph = document.createElement('p');
    const thirdPoint = document.createElement('h3');
    const thirdPointParagraph = document.createElement('p');


    yoga.textContent = "Yoga";
    yogaParagraph.textContent = "This is about yoga";
    benefits.textContent = "Benefits";
    firstPoint.textContent = "Improves your flexibility";

    firstPointParagraph.textContent = "Improved flexibility is one of the first and most obvious benefits of yoga. During your first class, you probably won’t be able to touch your toes, never mind do a backbend. But if you stick with it, you’ll notice a gradual loosening, and eventually, seemingly impossible poses will become possible.";

    secondPoint.textContent = "Increases your blood flow";

    secondPointParagraph.textContent = "Yoga gets your blood flowing. More specifically, the relaxation exercises you learn in yoga can help your circulation, especially in your hands and feet. Yoga also gets more oxygen to your cells, which function better as a result.";

    thirdPoint.textContent = "Makes you happier";
    
    thirdPointParagraph.textContent = "Feeling sad? Sit in Lotus. Better yet, rise up into a backbend or soar royally into King Dancer Pose. While it’s not as simple as that, one study found that a consistent yoga practice improved depression and led to a significant increase in serotonin levels and a decrease in the levels of cortisol.";

    content.appendChild(yoga);
    content.appendChild(yogaParagraph);
    content.appendChild(benefits);
    content.appendChild(firstPoint);
    content.appendChild(firstPointParagraph);
    content.appendChild(secondPoint);
    content.appendChild(secondPointParagraph);
    content.appendChild(thirdPoint);
    content.appendChild(thirdPointParagraph);
});

homeButton.addEventListener("click", () =>{
    clearContent();

    const about = document.createElement('h2');
    const aboutParagraph = document.createElement('p');
    const aboutParagraphTwo = document.createElement('p');
    const aboutParagraphThree = document.createElement('p');

    about.textContent = "About";
    aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas odio nulla, ac facilisis massa pretium vitae. Sed a iaculis arcu. Aenean dolor orci, egestas ut egestas ac, aliquet eu nisl. Aliquam sapien massa, venenatis nec venenatis ut, tincidunt porta massa. Vestibulum luctus tortor nibh. Sed malesuada sodales ex nec tempus. Nam quis convallis odio. Sed non dolor suscipit, consectetur tellus et, cursus leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    aboutParagraphTwo.textContent = aboutParagraph.textContent;
    aboutParagraphThree.textContent = aboutParagraph.textContent;
    content.appendChild(about);
    content.appendChild(aboutParagraph);
    content.appendChild(aboutParagraphTwo);
    content.appendChild(aboutParagraphThree);
});
function clearContent(){
    content.innerHTML = "";
};

    
