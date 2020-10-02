
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp { 
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        let enrolled = this.students.filter(pupil => pupil.email === student.email);
        if (enrolled.length >= 1) { //TIL an empty array is considered truthy
            //I originally had if(enrolled)
            console.log(`Someone is already registered with ${student.email}`)
        } else {
            this.students = this.students.concat(student);
            console.log(`Registering ${student.email} to the ${this.name} bootcamp.`)
        }
        return this.students;
    }
}

const jose = new Student('Jose', 'joe@gmail.com', 'JS')
const andrew = new Student('Andrew', 'andy@gmail.com', 'Java')
const amanda = new Student('Amanda', 'manda@gmail.com', 'Python')

const nucamp = new Bootcamp('React', 2)

nucamp.registerStudent(jose);
nucamp.registerStudent(andrew);
nucamp.registerStudent(jose);
nucamp.registerStudent(amanda);

console.log(nucamp.students)
