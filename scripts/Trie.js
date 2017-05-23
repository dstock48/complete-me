import Node from './Node.js'

class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
  }

  insert(word) {
    word = word.toLowerCase();
    let wordArr = word.split('');
    let currentNode = this.root;

    wordArr.forEach((letter) => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    });

    currentNode.isCompleteWord = true;
  }

  count() {
    let currentNode = this.root;

    while (currentNode.isCompleteWord === false) {
      let keys = Object.keys(currentNode.children)

      currentNode = currentNode.children[keys[0]]

      if (currentNode.isCompleteWord) {
        this.wordCount++
      }
    }

    return this.wordCount
  }

  suggest() {

  }

  populate() {

  }

  select() {

  }

}

export default Trie;
