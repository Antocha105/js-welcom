class User {
  constructor(name,surname,age){
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName(){
    return `${this.name} ${this.name}`;
  }
}\ t


class Moderator extends User{
  constructor(name,surname,age){
    super(name,surname,age)
  }

  getFullName(){
    return `${this.name} ${this.name}  ${this.age}`
  } 

  createPost(text){
    console.log('Post successfully created!');
  }
  getFullName(){
    return `${this.name} ${this.name}-->>${this.age}`
  }

  daletePost(id){
    console.log('Post successfully deleted!')
  }
}

class Admin extends Moderator {
  constructor(name,surname,age){
    super(name,surname,age)
    this.uniquePrefix = uniquePrefix;
    
  }

  makeModerator(userId){
    console.log('Moderator sucessfully sett!')
  }

  deleteModerator(userId){
    console.log('Moderator sucessfully deteted!')
  }
}

class Support extends Admin{
  constructor(name, uniquePrefix ){
    super( name, null, null,)

  }
}

const user = new  User('John', 'Doe', '32')

const moderator = new Moderator('alex','Krane',45)

const admin = new Admin('Jane','Doe','50','Head of Sales')

