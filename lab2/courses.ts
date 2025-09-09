interface Course {
    name: string,
    duration: number,
    students: string[], 
};

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];
    
    constructor(name: string, duration: number, students: string[] = []) {
        this.name = name;
        this.duration = duration;
        this.students = students;
    }
    
    registerStudent(student: string): void {
        this.students.push(student);
    }
    
    isStudentRegistered(student: string): boolean {
        return this.students.some(stud => stud === student);
    }
}

class CourseManager {
    private courses: Course[];
    
    constructor(courses: Course[] = []) {
        this.courses = courses;
    }
    
    addCourse(course: Course): void {
        this.courses.push(course);
    }
    
    removeCourse(courseName: string): void {
        let courseIndex = 0;
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i]?.name === courseName) {
                courseIndex = i;
                break;
            }
        }
        
        this.courses.splice(courseIndex, 1);
    }
    
    findCourse(courseName: string): Course | undefined {
        for(let course of this.courses) {
            if(course.name === courseName) return course;
        }
        return undefined;
    }
    
    renderList(): void {
        this.courses.forEach(course => {
            console.log(`Назва: ${course.name}`);
            console.log(`Тривалість: ${course.duration} годин`);
            console.log(`Студенти, зареєстровані на курс: ${course.students.join(', ')}`);
        });
    }
}

const course1 = new OnlineCourse('Фреймворки JS', 40);
const course2 = new OnlineCourse('Комп\'ютерна графіка', 30);
const course3 = new OnlineCourse('Розробка ігор на Godot.', 50);

const manager = new CourseManager();

manager.addCourse(course1);
manager.addCourse(course2);
manager.addCourse(course3);

course1.registerStudent('Біляков Артем Євгенович');
course2.registerStudent('Біляков Артем Євгенович');
course3.registerStudent('Біляков Артем Євгенович');

course1.registerStudent('Волощук Марк');
course2.registerStudent('Джон Кармак');
course3.registerStudent('Влад Майні');

manager.renderList();