 // JavaScript to toggle accordion content
 var accordionItems = document.getElementsByClassName("accordion-item");
 for (var i = 0; i < accordionItems.length; i++) {
   accordionItems[i].addEventListener("click", function () {
     var accordionContent =
       this.getElementsByClassName("accordion-content")[0];
     var activeAccordionItem = document.querySelector(
       ".accordion-item.active"
     );

     if (activeAccordionItem && activeAccordionItem !== this) {
       // Close previously active accordion item
       activeAccordionItem.classList.remove("active");
       activeAccordionItem.getElementsByClassName(
         "accordion-content"
       )[0].style.display = "none";
     }

     this.classList.toggle("active");

     if (accordionContent.style.display === "block") {
       accordionContent.style.display = "none";
     } else {
       accordionContent.style.display = "block";
     }
   });
 }