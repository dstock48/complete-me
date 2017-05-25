import { expect } from 'chai';
import Trie from '../scripts/Trie.js';
import Node from '../scripts/Node.js';
import fs from 'fs';

const text = "/usr/share/dict/words";
let dictionary = fs.readFileSync(text).toString().trim().split('\n');

describe('Trie', () => {

  let newTrie;

  beforeEach(() => {
    newTrie = new Trie();
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
    expect(newTrie.wordCount).to.equal(1)
    newTrie.insert('Dan')
    expect(newTrie.count()).to.equal(2)
    newTrie.insert('Sara')
    expect(newTrie.count()).to.equal(3)
  });

  it('Should have a suggest method that returns the word(s) that match the string passed in', () => {
    newTrie.insert('Dave');
    newTrie.insert('Sara');
    newTrie.insert('Jesse')
    newTrie.insert('Sam');

    expect(newTrie.suggest('j')).to.deep.equal(['jesse'])
    expect(newTrie.suggest('sa')).to.deep.equal(['sara', 'sam'])
    expect(newTrie.suggest('sar')).to.deep.equal(['sara'])
  });

  it('Should return an error if the search string is not found', () => {
    newTrie.insert('Dave');
    newTrie.insert('Sara');
    newTrie.insert('Jesse')
    newTrie.insert('Sam');

    expect(newTrie.suggest('z')).to.equal('Not Found')
  });

  it('Should have a populate method fills the trie with all the words in the dictionary', () => {
    newTrie.populate(dictionary)
    expect(newTrie.count()).to.equal(235886)
  });

  it('Should be able to suggest all words in the dictionary that start with the string passed into the suggest fn', () => {
    newTrie.populate(dictionary)

    expect(newTrie.suggest('piz')).to.deep.equal(["pize", "pizza", "pizzeria", "pizzicato", "pizzle"])
  });

  it('Should have a select method that keeps track of selected words and recomends them before all others', () => {
    newTrie.populate(dictionary)

    expect(newTrie.suggest('piz')).to.deep.equal(["pize", "pizza", "pizzeria", "pizzicato", "pizzle"])
                                                //         v = =
    newTrie.select('pizza')                     //   v - /
    expect(newTrie.suggest('piz')).to.deep.equal(["pizza", "pize", "pizzeria", "pizzicato", "pizzle"])
                                                //                 v = = = =               v = = = =
    newTrie.select('pizzeria')                  //               v                       v
    newTrie.select('pizzle')                    //   v - - - - V - - - - - - - - - - - /
    expect(newTrie.suggest('piz')).to.deep.equal(["pizzle", "pizzeria", "pizza", "pize", "pizzicato"])
  });



});
