'use strict';

// const mimnimist = require('minimist');

require('@code-fellows/supergoose');

const Collection = require('../models/notes-collection');
const collec = new Collection();

jest.spyOn(global.console, 'log');

// const Notes = require('../lib/notes');


// jest.moch('minimist');

// mimnimist.mockImplementation(()=>{
//   return { 
//     add : 'hello',
//     category : 'test category',
//   };
// });

describe('Notes collection ',()=>{
  let obj = {text:'test 1' , category:'test2'};

  it('can create() a new note ' , ()=>{
    return collec.create(obj)
      .then(record =>{
        // console.log('the record' , record);
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  
  it('can get() a list of notes ' , ()=>{

    return collec.create(obj)
      .then(record =>{
        return collec.get(record.category)
          .then(list =>{
            Object.keys(obj).forEach((key,idx) =>{
              expect(list[idx][key]).toEqual(obj[key]);
            });
          });
      });

  });
});

// describe('Notes Module',()=>{
  
// it('execute() add',()=>{
//   let resevedObj =  { note: { action: 'add', payload: 'hello' }}; 
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).not.toHaveBeenCalled();
// });

// it('execute() wrong argument',()=>{
//   let resevedObj = { note:'ERROR : please Enter either -a or --add to add a note with --category \n or --list to show or --delete to delete  '};
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });

// it('execute() no note ',()=>{
//   let resevedObj = { note: 'ERROR : please Enter a vaild message inside qoutation '};
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });



// it('execute() delete with valid ID',()=>{
//   let resevedObj =  { note: { action: 'delete', id: '5ec532896adada6ebaf6f205' }}; 
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });

// it('execute() delete with No valid ID',()=>{
//   let resevedObj =  { note: { action: 'delete', id: '5ec536adada6ebaf6f205' }}; 
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });

// it('excute()  list for all',()=>{
//   let resevedObj =  { note: { action: 'list', cat: 'all' }}; 
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });

// it('excute() list for one categiry',()=>{
//   let resevedObj =  { note: { action: 'list', cat: 'school' }}; 
//   const note = new Notes();
//   note.execute(resevedObj);
//   expect(console.log).toHaveBeenCalled();
// });
// });
///database test casses 



