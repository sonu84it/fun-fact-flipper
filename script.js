const facts = {
  space: [
    "A day on Venus is longer than a year on Venus!",
    "There are more stars in space than grains of sand on Earth.",
    "Jupiter has the shortest day of all the planets.",
    "Neutron stars can spin 600 times per second.",
    "The footprints on the Moon will be there for millions of years.",
    "A teaspoon of a neutron star would weigh a billion tons.",
    "The Sun makes up more than 99% of the mass of our solar system.",
    "One million Earths could fit inside the Sun.",
    "Mars has the largest volcano in the solar system.",
    "Saturn's rings are mostly bits of ice."],
  animals: [
    "An ostrich's eye is bigger than its brain.",
    "Dolphins sleep with one eye open.",
    "A group of flamingos is called a flamboyance.",
    "A snail can sleep for three years.",
    "Tigers have striped skin as well as striped fur.",
    "Honeybees can recognize human faces.",
    "Octopuses have three hearts.",
    "Koalas sleep up to 20 hours a day.",
    "Elephants are the only animals that can't jump.",
    "Cows have best friends and get stressed when separated."],
  science: [
    "Water can boil and freeze at the same time.",
    "Bananas are naturally radioactive.",
    "Hot water freezes faster than cold water in some cases.",
    "Lightning is five times hotter than the surface of the Sun.",
    "Humans share 60% of their DNA with bananas.",
    "Sound travels four times faster in water than in air.",
    "The Eiffel Tower can be 15 cm taller during hot days.",
    "A teaspoon of honey is the life work of 12 bees.",
    "Earth's rotation is gradually slowing down.",
    "The human nose can detect about one trillion smells."],
  history: [
    "The Great Wall of China is over 13,000 miles long.",
    "Ancient Romans used crushed mouse brains as toothpaste.",
    "The shortest war in history lasted 38 minutes.",
    "Oxford University is older than the Aztec Empire.",
    "Napoleon was once attacked by a horde of rabbits.",
    "Cleopatra lived closer to the Moon landing than to the building of the pyramids.",
    "George Washington grew hemp at Mount Vernon.",
    "Vikings used the bones of their ancestors as jewelry.",
    "The first Olympic Games were held in 776 BC.",
    "Stonehenge was built over the course of 1,500 years."],
  technology: [
    "The first computer mouse was made of wood.",
    "More than 90% of the world's currency exists only on computers.",
    "The first website is still online.",
    "The password for nuclear missiles was once 00000000.",
    "There are more mobile phones than people on Earth.",
    "Email predates the World Wide Web.",
    "The first 1GB hard drive was announced in 1980 and weighed 550 pounds.",
    "GPS is free thanks to the U.S. Air Force.",
    "Supercomputers can perform quadrillions of calculations per second.",
    "The first video uploaded to YouTube was 'Me at the zoo.'"],
  food: [
    "Honey never spoils and can last thousands of years.",
    "Apples float because they are 25% air.",
    "Carrots were originally purple.",
    "Pineapples take about two years to grow.",
    "Tomatoes are botanically fruits.",
    "Cucumbers are 96% water.",
    "Chocolate was once used as currency.",
    "Bananas are berries but strawberries aren’t.",
    "Potatoes were the first food grown in space.",
    "Peanuts are not nuts; they are legumes."],
  sports: [
    "Golf is the only sport played on the Moon.",
    "The Olympic Games were once held every four years in ancient Greece.",
    "A baseball has exactly 108 stitches.",
    "Table tennis balls can travel more than 100 km/h.",
    "The first soccer balls were made from inflated pig bladders.",
    "Basketball was invented in 1891.",
    "The FIFA World Cup is the most watched sporting event.",
    "Cycling was part of the first modern Olympics.",
    "The longest tennis match lasted 11 hours and 5 minutes.",
    "Chess is recognized as a sport by the International Olympic Committee."],
  geography: [
    "Africa is the only continent in all four hemispheres.",
    "Canada has more lakes than the rest of the world combined.",
    "Istanbul is the only city on two continents.",
    "The Amazon rainforest produces 20% of the Earth's oxygen.",
    "Mount Everest grows about 4 mm taller every year.",
    "The Dead Sea is 9.6 times saltier than the ocean.",
    "There are 24 time zones on Earth.",
    "Russia spans 11 time zones.",
    "Antarctica is the driest continent.",
    "The Nile is the longest river in the world."],
  music: [
    "Beethoven could still compose music after losing his hearing.",
    "The world's largest musical instrument is the Great Stalacpipe Organ in Virginia.",
    "Listening to music releases dopamine in the brain.",
    "A piano has 88 keys.",
    "The most expensive instrument sold was a Stradivarius violin for $15.9 million.",
    "An average car horn is in the key of F.",
    "The Beatles hold the record for most number-one hits on the Billboard Hot 100.",
    "Playing music can boost the immune system.",
    "The first CD pressed in the U.S. was Bruce Springsteen's 'Born in the U.S.A.'",
    "Mozart wrote his first symphony at age eight."],
  weather: [
    "Rain has a smell thanks to a chemical called petrichor.",
    "The highest temperature ever recorded on Earth was 134°F in Death Valley.",
    "Lightning strikes about 8 million times a day worldwide.",
    "Antarctica holds 70% of the world's fresh water.",
    "A single hurricane can release the energy of 10,000 nuclear bombs.",
    "Snowflakes can fall at a speed of 9 mph.",
    "The fastest wind speed ever recorded is 253 mph.",
    "The Sahara Desert can experience snowfall.",
    "A rainbow is actually a full circle; we only see half from the ground.",
    "Tornadoes are also known as twisters."],
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
