const facts = {
  space: [
    "A day on Venus is longer than a year on Venus!",
    "There are more stars in space than grains of sand on Earth.",
    "Jupiter has the shortest day of all the planets."],
  animals: [
    "An ostrich's eye is bigger than its brain.",
    "Dolphins sleep with one eye open.",
    "A group of flamingos is called a flamboyance."],
  science: [
    "Water can boil and freeze at the same time.",
    "Bananas are naturally radioactive.",
    "Hot water freezes faster than cold water in some cases."],
};

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.dataset.index = 0;
  card.addEventListener('click', () => {
    const topic = card.dataset.topic;
    const index = parseInt(card.dataset.index, 10);
    const fact = facts[topic][index];
    const back = card.querySelector('.card-back');
    back.textContent = fact;
    card.classList.toggle('flipped');
    // update index for next flip
    card.dataset.index = (index + 1) % facts[topic].length;
  });
});
