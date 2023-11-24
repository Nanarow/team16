package entity

import "time"

type User struct {
	BaseModel
	FirstName     string
	LastName      string
	Email         string
	Password      string
	Phone         string
	Profile       string
	RoleID        uint
	GenderID      uint
	RidingLevelID uint
	Support       []Support
}

type Role struct {
	BaseModel
	Name string
}

type RidingLevel struct {
	BaseModel
	Name        string
	Description string
	RidingLevel []RidingLevel
}

type Support struct {
	BaseModel
	UserID           uint
	Corporate        string
	Description      string
	Date             time.Time
	Image            string
	TourRegistration []TourRegistration
	Enrollment       []Enrollment
}

type LoginPayload struct {
	Email    string
	Password string
}

type TourType struct {
	BaseModel
	Name             string
	MinParticipant   int
	MaxParticipant   int
	Description      string
	TourRegistration []TourRegistration
}

type TourRegistration struct {
	BaseModel
	UserID     uint
	TourTypeID uint
	Schedule   uint
	Name       string
	Date       time.Time
}

type Enrollment struct {
	BaseModel
	UserID   uint
	CourseID uint
	Date     time.Time
	Remark   string
}

type Employee struct {
	BaseModel
	PositionID uint
	GenderID   uint
	AddressID  uint
	FirstName  string
	LastName   string
	Email      string
	Password   string
	DayOfBirth time.Time
	Phone      string
	Healths    []Health
	Horses     []Horse
	Courses    []Course
	Foods      []Food
}

type Position struct {
	BaseModel
	Name        string
	Salary      int
	Description string
	Employee    []Employee
}

type Gender struct {
	BaseModel
	Name     string
	Employee []Employee
}
type Address struct {
	BaseModel
	Local    string
	Locality string
	District string
	Province string
	ZipCode  string
	Employee []Employee
}

type Health struct {
	BaseModel
	HorseID    uint
	EmployeeID uint
	Vital      string
	Tooth      string
	Vaccine    string
	Parasite   string
	Blood      string
	Remark     string
	Date       time.Time
}
