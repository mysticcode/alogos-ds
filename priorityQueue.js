// PriorityQueue
function PriorityQueue(){
    var collection = [];

    this.values = function(){
        console.log(collection)
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else {
            var added = false;
            for(var i =0; i<collection.length; i++){
                // checking priorities element[value, priority]
                // if priority of the element is less than the priority of the iterated collection value then add
                // element after the current value in colleciton
                if(element[1]< collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }

    this.dequeue = function(){
        collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    // check if queue is empty
    this.isEmpty = function(){
        return (collection.length === 0);
    }

}

var apq = new PriorityQueue();
apq.enqueue(['test1',1]);
apq.enqueue(['test2',2]);
apq.enqueue(['test3',3]);
apq.enqueue(['test4',2]);
apq.values();
apq.dequeue();
apq.values();