function User(name,lastname,age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;

    
}

function UserPrototype(){
    this.getFullName = function(){
        return`${this.name} ${this.lastname}`;
    }

}

User.Prototype = new UserPrototype();

const user1 = new User('john','doe',56)
const user2 = new User('jane','Freeman',44)