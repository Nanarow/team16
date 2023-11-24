package entity

import (
	"github.com/sut66/team16/backend/utils"
	"gorm.io/gorm"
)

type User struct {
	BaseModel
	FirstName string
	LastName  string
	Email     string
	Password  string
	Phone     string
	Role      string
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	// hash password
	hashPassword, err := utils.HashPassword(u.Password)
	if err != nil {
		return err
	}
	u.Password = hashPassword
	return
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
	Courses	[]Course	`gorm:"foreignKey:ScheduleID"`
}

type Location struct {
	BaseModel
	Name	string
	Description	string
	Schedules	[]Schedule	`gorm:"foreignKey:LocationID"`
}