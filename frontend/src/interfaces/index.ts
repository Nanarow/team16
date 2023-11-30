export interface Employee{
    ID:            number;
    PositionID:    number;
	GenderID:      number;
	AddressID:     number;
	FirstName:     string;
	LastName:      string;
	Email:         string;
	Password:      string;
	DayOfBirth:    Date;
	Phone:         string;
}
export interface Health{
    ID:         number;
	EmployeeID: number;
	Vital:      string;
	Tooth:      string;
	Vaccine:    string;
	Parasite:   string;
	Blood:      string;
	Remark:     string;
	Date:       Date;
}

export interface Position {
    ID:          number;
    Name:        string;
	Salary:      number;
	Description: string
}

export interface Gender {
    ID:         number;
    Name:       string;
}

export interface Address {
    ID:         number;
    Local:      string;
	Locality:   string;
	District:   string;
	Province:   string;
	ZipCode:    string;
}