import chai from 'chai';
chai.should();

import Tzolkin from '../lib/tzolkin';

describe('Tzolkin', ()=>{

  it('should exits', ()=>{
    Tzolkin.should.exist;
  })
})