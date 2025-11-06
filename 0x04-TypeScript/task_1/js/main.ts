// Teacher interface definition
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Director interface that extends Teacher
interface Director extends Teacher {
    numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// printTeacher function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example implementation for Teacher
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};

console.log('Teacher Object:', teacher3);

// Example implementation for Director
const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log('Director Object:', director1);

// Test the printTeacher function
console.log('printTeacher result:', printTeacher("John", "Doe"));
