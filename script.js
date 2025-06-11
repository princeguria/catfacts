const facts = [
  "Cats have five toes on their front paws, but only four on the back.",
  "A group of cats is called a clowder.",
  "Cats can jump up to six times their length.",
  "Most cats don’t have eyelashes.",
  "A cat's nose is as unique as a human fingerprint.",
  "Cats sleep for about 13 to 16 hours a day!",
  "Whiskers help cats detect changes in their surroundings.",
  "The oldest cat on record lived to be 38 years old.",
  "Cats are not dogs",
];

function newFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('factBox').innerText = fact;
}
