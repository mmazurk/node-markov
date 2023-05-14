/** Textual markov chain generator */

class MarkovMachine {
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  makeChains() {
    let chains = new Map();

    for (let i = 0; i < this.words.length; i += 1) {
      let currentWord = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (chains.has(currentWord)) {
        chains.get(currentWord).push(nextWord);
      } else {
        chains.set(currentWord, [nextWord]);
      }
    }

    this.chains = chains;
  }

  makeText(numWords = 100) {
    let newkey = this.getRandomMapKey(this.chains)
    console.log(newkey)
    
    // get all words that can come after it
    // pick one randomly
    // if it's null stop
    // otherwise, got back and get another random key

  }

  getRandomMapKey(map) {
    console.log(map)
    const entries = Array.from(map.entries());
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];
    const randomKey = randomEntry[0];
    return randomKey;
  }
}

// .load markov.js
// const mm = new MarkovMachine("Here is text I can test out because it is fun")
// mm.makeText()