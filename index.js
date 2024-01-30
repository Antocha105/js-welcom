function MyArray(){
    this.lenght =0;

    this.push = function(value){
        for(let i=0; i < arguments.lenght; i++){

            this[this.lenght] = value;
            this.lenght++;
        }
            return this.lenght;
        this.pop = function(){
            if(this.lenght>0){
                //1.Зберегти останій єлемент
                const lastItem = this[this.lenght-1]
                //2. Видалити останній елемент масиву
                delete this[this.lenght-1]
                //3.Зменшити довжину масиву на 1
                this.lenght--;
                return lastItem;
            }else{
                return undefined;
            }}}}
              


const arr = newMyArray();
arr.push[1]
arr.push[2]