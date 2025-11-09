// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class instance
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation - note the lowercase 's' in studentClass
class studentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// This ensures the constructor matches the interface
const StudentClassConstructor: StudentConstructor = studentClass;
