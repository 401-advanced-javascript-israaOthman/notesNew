
const minimist = require('minimist');

class Input {
  constructor(){
    this.obj ;
    //capturing the args 
    const args = minimist(process.argv.slice(2));
    // console.log('the args from input.js',args);

    if(Object.keys(args)[1] === 'add' || Object.keys(args)[1] === 'a'){
      if(Object.keys(args)[2] === 'category'){
        this.note = this.getNote(args.add || args.a,args.category);
      }else{
        this.note = this.getNote('error');
      }
    } else if(Object.keys(args)[1] === 'list'){
      this.note= this.showList(args.list);
    } else if(Object.keys(args)[1] === 'delete'){
      this.note=   this.deleteNote(args.delete);
    } else if (Object.keys(args)[1] === 'update'){
      if(Object.keys(args)[2] === 'id'){
        this.note = this.update(args.update , args.id);
      }else {
        this.note = this.getNote('error');
      }
    }
    else {
      this.note = this.getNote('error');
    }
   
  }

  getNote(note,cat){
    if(note === 'error' ){

      //       return `* you should use (--add with a note and --category for the category) or (--a/-a)
      // * you should use --list to show all the notes or you can do -- list with a category 
      // * you should use --delete with an id to delete a note `;
      return 'ERROR : please Enter either -a or --add to add a note with --category \n or --list to show or --delete to delete  ';
    }
    else if(note !== true && cat !== true){
      this.obj ={action: 'add' , payload: note , category: cat} ;
      return  this.obj;
    }else {
      return 'ERROR : please Enter a vaild message inside qoutation ';
    }
  }
  showList(list){
    if(list === true){
      this.obj ={action: 'list' , cat : 'all'};
      return this.obj ; 
    }else {
      this.obj ={action: 'list' , cat : list };
      return this.obj ; 
    }
  }

  deleteNote(delID){
    if(delID === true){
      return 'ERROR : please Enter a ID for the Note you want to delete ';
    } else {
      this.obj = {action: 'delete' , id : delID };
      return this.obj;
    }
  }

  update(note,id){
    if(note !== true && id !== true){
      this.obj ={action: 'update' , payload: note , id: id} ;
      return  this.obj;
    } else {
      return 'ERROR : please Enter a valid ID for the Note you want to update ';
    }
  }

}

module.exports = Input; 