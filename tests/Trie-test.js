import { expect, assert } from 'chai';
import Trie from '../scripts/Trie.js';
import Node from '../scripts/Node.js'

describe('Trie', () => {

  let newTrie;
  let newNode;

  beforeEach(() => {
    newTrie = new Trie();
    newNode = new Node();
  })

  it('Should be an instance of Trie', () => {
    expect(newTrie).to.be.instanceof(Trie)
  });

  it('Should have a root property that is an empty node by default', () => {
    expect(newTrie.root).to.be.instanceof(Node)
  });

  it('Should have an insert method that adds new words to the trie', () => {
    newTrie.insert('Dave')
    expect(newTrie.root.children.d.children.a.children.v.children.e.isCompleteWord).to.equal(true)
  });

  it('Should have a count method that returns the total number of words in the trie', () => {
    expect(newTrie.wordCount).to.equal(0)

    newTrie.insert('Dave')
    newTrie.insert('David')
    newTrie.count()
    console.log(newTrie.root.children.d.children.a.children.v.children);
    console.log('wordCount:', newTrie.wordCount);
    expect(newTrie.wordCount).to.equal(2)
  });



});
