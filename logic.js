document.addEventListener("DOMContentLoaded", function () {
    const elementhead = document.querySelector(".head");
    const elementsubh = document.querySelector(".subh");
    const elementheroimage = document.querySelector(".heroimage");
    elementsubh.classList.add("fade-in-right");
    elementhead.classList.add("fade-in-left");
    elementheroimage.classList.add("zoom-in");
});
// document.addEventListener("scroll",function(){
//     const chestt = document.querySelector(".chesttext")
//     chestt.classList.add("fade-in-left")
//     const chesti = document.querySelector(".chestimage")
//     chesti.classList.add("fade-in-right")
    
    
// })
// document.addEventListener("scroll",function(){
//     const chestt2 = document.querySelector(".chesttext2")
//     chestt2.classList.add("fade-in-right")
//     const chesti2 = document.querySelector(".chestimage2")
//     chesti2.classList.add("fade-in-left")
// })
// document.addEventListener("scroll",function(){
//     const chestt3 = document.querySelector(".chesttext3")
//     chestt3.classList.add("fade-in-left")
//     const chesti3 = document.querySelector(".chestimage3")
//     chesti3.classList.add("fade-in-right")
// })
// Function to handle the fade-in animation
function handleFadeIn(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-left"); // Add the appropriate animation class
        observer.unobserve(entry.target); // Stop observing once the element has faded in
      }
    });
  }
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleFadeIn, {
    threshold: 0.2, // Adjust the threshold as needed
  });
  
  // Select elements you want to animate
  const elementsToAnimate = document.querySelectorAll(".left");
  
  // Observe each element
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
  
  function handleFadeIn2(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-right"); // Add the appropriate animation class
        observer.unobserve(entry.target); // Stop observing once the element has faded in
      }
    });
  }
  
  // Create an Intersection Observer
  const observer2 = new IntersectionObserver(handleFadeIn2, {
    threshold: 0.2, // Adjust the threshold as needed
  });
  
  // Select elements you want to animate
  const elementsToAnimate2 = document.querySelectorAll(".right");
  
  // Observe each element
  elementsToAnimate2.forEach((element) => {
    observer2.observe(element);
  });