import { expect, assert } from 'chai';
import Node from '../scripts/Node.js';

describe('Node', () => {

  it('Should be an instance of Node', () => {
    let newNode = new Node();
    expect(newNode).to.be.instanceof(Node)
  });

  
});
