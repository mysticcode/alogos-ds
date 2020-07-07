// Queues
// fifo
// Queue {
//     enqueue: [Function],
//     dequeue: [Function],
//     front: [Function],
//     isEmpty: [Function],
//     values: [Function]
//   }

var Queue = function(){
    var collection = [];
    // add in queue 
    this.enqueue = function(e){
        collection.push(e);
    }
    
    // remove from queue and adjust queue
    this.dequeue = function(){
        // collection.splice(0,1);
        collection.shift()
        return collection;
    };

    // first in the queue
    this.front = function(){
        return collection[0];
    }

    // check if queue is empty
    this.isEmpty = function(){
        return (collection.length === 0);
    }

    // return all the values in the collection
    this.values = function(){
        return collection;
    }
}

var a = new Queue();
a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
console.log(a.values());
a.dequeue();
console.log(a.values());
