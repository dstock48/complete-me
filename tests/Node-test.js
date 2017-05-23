import { expect, assert } from 'chai';
import Node from '../scripts/Node.js';

describe('Node', () => {

  let newNode;

  beforeEach( () => {
    newNode = new Node();
  } )

  it('Should be an instance of Node', () => {
    expect(newNode).to.be.instanceof(Node)
  });

  it('The Node\'s letter property should be null by default', () => {
    expect(newNode.letter).to.equal(null)
  });

  it('The Node\'s children property should be an empty object by default', () => {
    expect(newNode.children).to.deep.equal({})
  });

  it('The Node\'s isCompleteWord property should be false by default', () => {
    expect(newNode.isCompleteWord).to.equal(false)
  });


});
