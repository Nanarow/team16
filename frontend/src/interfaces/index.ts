

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