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

type Member struct {
	BaseModel
	FirstName string
	LastName  string
}

type LoginPayload struct {
	Email    string
	Password string
}

// kasama has join

//test 2
// test commit
// kasama has join
