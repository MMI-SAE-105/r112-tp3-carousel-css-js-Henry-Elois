const carousel = (".carouselcontainer")
const prevButton = (".carouselbuttonprev");
const nextButton = (".carouselbuttonnext");

if (carousel) {
  
  
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({left:scrollAmount, behavior: "smooth"}); 
  });
  
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({left:scrollAmount, behavior: "smooth"});
  });
}

document.querySelector(".carouselcontainer")
const scrollAmount = firstItem.clientWidth;


