function MyArray(){
    this.lenght =0;

    this.push = function(value){
        //Значення додати у кінець масиву
        this[this.lenght] = value;
        this.lenght++;
        return this.lenght
    }
}

const arr = newMyArray();
arr.push[1]
arr.push[2]