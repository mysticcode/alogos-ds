/* Sets */
// holds unique elements in the colleciton as a set. Has not particular pattern of holding elements like Fifo or Filo
// examples like back stacks 
/*
genericSet {
  has: [Function],
  values: [Function],
  add: [Function],
  remove: [Function],
  size: [Function],
  union: [Function],
  intersection: [Function],
  difference: [Function],
  subSet: [Function]
}
*/
function genericSet(){
    // to hold the set collection
    var collection = [];
    // method to check if set collection has the value and based on that return true or false 
    this.has = function(value){
        return (collection.indexOf(value)!==-1);
    }
    // return all the values in the collection
    this.values = function(){
        return collection;
    }

    // add value to set collection, first check and then add else return false
    this.add = function(value){
        if(!this.has(value)){
            collection.push(value);
            return true;
        }
        return false;
    }

    // remove value from the set collection 
    // in es6 we have delete function 
    this.remove = function(value){
        if(this.has(value)){
            elementIndex = collection.indexOf(value);
            collection.splice(elementIndex,1);
            return true;
        }
        return false;
    }

    // in es6 size is a property and not a funciton 
    this.size = function() {
        return collection.length;
    }

    // union of two sets
    this.union = function(otherSet){
        var unionSet = new genericSet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    }

    // intersection of two sets
    this.intersection = function(otherSet){
        var intersectionSet = new genericSet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e); 
            }
        });
        return intersectionSet;
    }

    // difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new genericSet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // check if set is a subset of another set
    this.subSet = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(e){
            return otherSet.has(e);
        });
    }
}

var a = new genericSet();
var b = new genericSet();
a.add(1);
a.add(2);
a.add(3);
b.add(1);
b.add(2);
b.add(3);
b.add(3);
b.remove(3);
// b.add(3);
console.log(a.subSet(b));
a.union(b).values().forEach(function(e){
console.log(e);
});
console.log(a.difference(b).values());

