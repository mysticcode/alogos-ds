// create stacks 
//stack index starts from 0 and count starts from 1
// LIFO
var Stack = function(){
    this.count = 0;
    this.storage = {};

    //add a value at the top of the stack
    this.push = function(value){
        this.storage[this.count]=value;
        this.count++;
    }

    //remove the value top of the stack
    this.pop = function() {
        if(this.count===0){
            return undefined;
        }
        this.count--;
        delete this.storage[this.count];
        var result = this.storage[this.count]
        return result;
    }

    this.size = function(){
        return this.count;
    }
    // return the value at the top of the stack
    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push("test string")
console.log(newStack.peek())
newStack.pop()
console.log(newStack.peek())
newStack.pop()
console.log(newStack.peek())
