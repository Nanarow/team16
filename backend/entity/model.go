package entity

import "time"

type User struct {
	BaseModel
	FirstName        string
	LastName         string
	Email            string
	Password         string
	Phone            string
	Profile          string
	RoleID           uint
	GenderID         uint
	RidingLevelID    uint
	Support          []Support
	TourRegistration []TourRegistration
	Enrollment       []Enrollment
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

type Course struct {
	BaseModel
	Name         string
	Duration     int
	Participants int
	Description  string
	EmployeeID	*uint
	Employee	Employee	`gorm:"foreignKey:EmployeeID"`
	ScheduleID	*uint
	Schedule	Schedule	`gorm:"foreignKey:ScheduleID"`
}

type Schedule struct {
	BaseModel
	Date	time.Time
	StartTime	time.Time
	Description	string
	LocationID	*uint
	Location	Location	`gorm:"foreignKey:LocationID"`
	Courses	[]Course	
}

type Location struct {
	BaseModel
	Name	string
	Description	string
	Schedules	[]Schedule	
}
type Horse struct {
	BaseModel
	Name       string
	Age        string
	Date       time.Time
	Image      string
	EmployeeID uint
	BreedId    uint
	SexID      uint
	StableID   uint
}

type Stable struct {
	BaseModel
	Maintenance time.Time
	Cleaning    time.Time
	Temperature string
	Humidity    string
	Horses      []Horse
}

type Bleed struct {
	BaseModel
	Name        string
	Description string
	Horses      []Horse
}

type Sex struct {
	BaseModel
	Name   string
	Horses []Horse
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

type Course struct {
	BaseModel
	Name         string
	Duration     int
	Participants int
	Description  string
	EmployeeID	*uint
	Employee	Employee	`gorm:"foreignKey:EmployeeID"`
	ScheduleID	*uint
	Schedule	Schedule	`gorm:"foreignKey:ScheduleID"`
}

type Schedule struct {
	BaseModel
	Date	time.Time
	StartTime	time.Time
	Description	string
	LocationID	*uint
	Location	Location	`gorm:"foreignKey:LocationID"`
	Courses	[]Course	
}

type Location struct {
	BaseModel
	Name	string
	Description	string
	Schedules	[]Schedule	`gorm:"foreignKey:LocationID"`
}