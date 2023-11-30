export interface TourRegistration {
  ID: number;
  UserID: number;
  TourTypeID: number;
  Schedule: number;
  Name: string;
  Date: Date;
}

export interface TourType {
  ID: number;
  Name: string;
  MinParticipant: number;
  MaxParticipant: number;
  Description: string;
}

export interface Enrollment {
  ID: number;
  UserID: number;
  CourseID: number;
  Date: Date;
  Remark: string;
}
export interface Horse{
    ID: number;
    Name: string;
    Age: string;
    Date: Date;
    Image: string;
    EmployeeID: number;
    BleedID: number;
    SexID: number;      
	StableID: number; 
}

export interface Stable{
    ID: number;
    Maintenance: Date;
	Cleaning: Date;
	Temperature: number;
	Humidity: number;
	Description: string;
}

export interface Bleed{
    ID: number;
    Name: string;
	Description: string;
}

export interface Sex{
    ID: number;
    Name: string;
}


export interface User {
    ID?: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Phone: string;
    Profile: string;
    RoleID: number;
    GenderID: number;
    RidingLevelID: number;
}

export interface Support {
    ID: number;
    UserID: number;
    Corporate: string;
    Description: string;
    Date: Date;
    Image: string;
}

export interface Role {
    ID: number;
    Name: string;
}

export interface RidingLevel {
    Name: string;
    Description: string;
}

export interface Gender {
    ID: number;
    Name: string;
}