document.addEventListener("DOMContentLoaded", () => {
  const accordianQuestions = document.querySelectorAll(".accordian__question");

  accordianQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.classList.contains("active");

      // Toggle active class on the answer
      answer.classList.toggle("active", !isOpen);

      // Swap icons
      question.classList.toggle("active", !isOpen);

      // Optional: close other accordions
      accordianQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          otherQuestion.classList.remove("active");
          otherQuestion.nextElementSibling.classList.remove("active");
        }
      });
    });
  });
});
