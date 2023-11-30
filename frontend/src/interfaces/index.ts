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
