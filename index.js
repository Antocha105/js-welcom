class Person{
  constructor(fullName,birthYear,gender){
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;

  }
//Setters
  set fullName(value){
    if(typeof value !=='string'){
      throw new TypeError('Full name must be a string');
    }

    this._fullName = value
  }
    set birthYear(value){
      this._birthYear = value

    }
  set gender(value){
    if(typeof value !==' string'){
      throw new TypeError('Gender must be a string')
    }

    this._gender = value;
  }



//Getters

    get fullName(){
      return this._fullName
    }

    get birthYear(){
      return this._birthYear
    }

    get gender(){
      return this._gender
    }

    //Methods

    greeting(){
      let prefix;

      if(this.gender==='male'){
        prefix = 'Mr'
      }else if(this.gender==='female'){
        prefix='mrs.'
      }else{
        prefix = prompt('How should we address you?');
      }
      return `Hello ${prefix} ${this.fullName}`

    }



  }

  class Student extends Person{
    constructor(fullName,birthYear,gender,admisionYear,studentId,averageGrade){
      super(fullName,birthYear,gender)

      this.admisionYear = admisionYear;
      this.studentId = studentId;
      this.averageGrade = averageGrade

    }

    //Setters
    set admisionYear(value){

      this._admisionYear = value;
    }

    set studentId(value){
      this._studentId = value
    }

    set averageGrade(value){
      if(value>100||value<0){
        throw new RangeError('Average grade must[0;100]')
      }
      if(typeof value !=='number'){
        throw new TypeError('Average must be number')
      }

      this._averageGrade=value;
    }


    //Getters

    get admisionYear(){
      return this._admisionYear
    }

    get studentId(){
      return this._studentId;
    }

    get averageGrade(){
      return this._averageGrade
    }

    //Methods

    isExellentStudent(){
      //VAriant1
      if(this.averageGrade >=90){
        return true;
      }else{
        return false;
      }

      //Variant2
      //const result = this.averageGrade>=90 ? true : false;

      //variant3
      //return this.averageGrade>=90;
    }

    static calculateAverageGrade(studentsArray){


      /* Variant1
      let sum=0
      for(let i=0; i<studentArray.lenght;i++){
        sum+=studentArray[i].averageGrade;
      }
      return sum/studentArray
      */

      //variant 2
      /*
      let sum=0;
      studentArray.forEach((student) => {
        sum+=student.averageGrade
        
      });

      return sum/studentArray
      */

      /* variant3

      const sum = studentsArray.reduce((accumulator, student)=>accumulator + student.averageGrade,0)

      return sum/studentsArray.length
      */

      /*Variant4

      return studentsArray.reduce((accumulator, student)=>accumulator + student.averageGrade,0)/studentsArray.lenght
      */

    }
    
      

  }

  const students =[student1,student2,student3,student4]

  const person = new Person('Ivanov Ivan Ivanovich',1985,'male')
Student.calculateAverageGrade(students)