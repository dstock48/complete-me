import { expect, assert } from 'chai';
import Trie from '../scripts/Trie.js';

describe('Trie', () => {
  
  it('Should be an instance of Trie', () => {
    let newTrie = new Trie();
    expect(newTrie).to.be.instanceof(Trie)
  });

});
