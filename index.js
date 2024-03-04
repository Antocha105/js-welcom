class Queue{
  constructor(){
    this._head = 0;
    this._tail = 0;
  }

  get size(){
    return this._tail -  this._head
  }

  enqueue(value){
    this[this._tail]=value;
    this._tail++;
    return this.size;
  }

  dequeue(){
    const firstitem = this[this._head]=value;
    delete this[this._head]
    this._head++
    return firstitem;
  }

}