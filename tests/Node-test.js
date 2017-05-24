import { expect, assert } from 'chai';
import Node from '../scripts/Node.js';

describe('Node', () => {

  let newNode;

  beforeEach(() => {
    newNode = new Node();
  });

  it('Should be an instance of Node', () => {
    expect(newNode).to.be.instanceof(Node)
  });

  it('Should have a letter property of null by default', () => {
    expect(newNode.letter).to.equal(null)
  });

  it('Should be able to assign a letter to the letter property', () => {
    let myNewNode = new Node('a')

    expect(myNewNode.letter).to.equal('a')
  });

  it('Should have a children property with a default value of an empty object', () => {
    expect(newNode.children).to.deep.equal({})
  });

  it('Should have an isCompleteWord property with the default value of false', () => {
    expect(newNode.isCompleteWord).to.equal(false)
  });

});
