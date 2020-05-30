'use strict';

//mock

const Input  = require('../lib/input.js');

describe('Input Module',()=>{
  it('getNote() in case correct input it should return obj',()=>{
    let userInput = new Input();
    expect(userInput.getNote('hello' )).toEqual( {action: 'add' , payload : 'hello'});
  });

  it('getNote() in case wrong argument not(-a || --add) should return error msg',()=>{
    let userInput = new Input();
    expect(userInput.getNote('error')).toEqual( 'ERROR : please Enter either -a or --add to add a note with --category \n or --list to show or --delete to delete  ');
  });

  it('getNote() in case didnt Enter Note ',()=>{
    let userInput = new Input();
    expect(userInput.getNote(true)).toEqual(  'ERROR : please Enter a vaild message inside qoutation ');
  });

  it('showList() in case all categories',()=>{
    let userInput = new Input();
    expect(userInput.showList(true)).toEqual(  {action: 'list' , cat : 'all'});
  });

  it('showList() in case specific category',()=>{
    let userInput = new Input();
    expect(userInput.showList('school')).toEqual( {action: 'list' , cat : 'school' });
  });

  it('deleteNote() with ID ',()=>{
    let userInput = new Input();
    expect(userInput.deleteNote('6h58630sfr2356')).toEqual(  {action: 'delete' , id : '6h58630sfr2356' });
  });
  it('deleteNote() without ID ',()=>{
    let userInput = new Input();
    expect(userInput.deleteNote(true)).toEqual( 'ERROR : please Enter a ID for the Note you want to delete ');
  });

});
