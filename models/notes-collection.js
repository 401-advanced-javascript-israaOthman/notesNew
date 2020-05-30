'use strict';

const schema = require('./notes-schema.js');

class Collection{

  constructor(){
        
  }

  async get(cat){
    if(cat){
      return await schema.find({category:cat});
      // return await schema.findOne({category: _id});
    } else {
      return await schema.find({});
    }

  }


  async create(record){
    let newRecord = new schema(record);
    return await newRecord.save();
  }

  async update(id,record){
    return await schema.findOneAndUpdate({ _id: id },{text: record });
  }

  async delete(_id){
    await schema.findByIdAndDelete(_id);
  }
}

module.exports = Collection;