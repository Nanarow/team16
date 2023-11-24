package entity

import (
	"time"

	"github.com/sut66/team16/backend/utils"
	"gorm.io/gorm"
)

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
	Support []Support
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
	UserID      uint
	Corporate   string
	Description string
	Date        time.Time
	Image       string
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

// kasama has join

//test 2
// test commit
// kasama has join
