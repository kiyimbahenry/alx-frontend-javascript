// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class instance
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// This ensures the constructor matches the interface
const StudentClassConstructor: StudentConstructor = StudentClass;

// Export for use in other files if needed
export { StudentClass, StudentConstructor, StudentInterface };
