package entity

import "time"

type User struct {
	BaseModel
	FirstName        string
	LastName         string
	Email            string
	Password         string
	Phone            string
	Role             string
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
