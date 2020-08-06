function newStack (cap){
    this.capacity = cap; 
    this.storage = {}; 
    this.count = 0; 
}

newStack.prototype.push = function (val) {
    if (this.count< this.capacity) {
        this.storage[this.count++] = val; 
        return val; 
    }
    return "cap reached"
}; 
newStack.prototype.count= function () {
    return this.count    
}

newStack.prototype.pop = function () {
    let val = this.storage[--this.count]; //will be used to show item popped in the stack
    delete this.storage[this.count];
    return this.val;
};

newStack.prototype.peek = function () {
    return this.storage[this.count-1]
}

function twoStackQueue() {
    this.stackIn = new newStack(); //creation of the in stack and out stack by creating new instances of both
    this.stackOut = new newStack();
}

twoStackQueue.prototype.enqueue = function (val) {
    if(this.stackIn.count()< this.capacity){
        this.stackIn.push(val)
        return val;
    }
    return console.log("queue stack reached its max")
}
twoStackQueue.prototype.transferstack = function () {
    if(this.stackIn.count()> 0){
        this.stackOut.push(this.stackIn.pop())
    }
    
}
twoStackQueue.prototype.dequeue = function () {
    if(this.stackOut.count()<this.stackIn.count) this.transferstack(); 
    var lastval = this.stackOut.pop()
    return lastval;

    
}