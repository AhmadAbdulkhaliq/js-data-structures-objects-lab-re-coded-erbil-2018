// Write your solution in this file!
let driver ={};

function updateDriverWithKeyAndValue(object,key,value){
 return Object.assign({},object ,{[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(object , key,value){
  object[key]=value;
  return object;
}

function deleteFromDriverByKey (object , key){
 let myobj=object.assign
 
  delete object[key]
  return object;
}