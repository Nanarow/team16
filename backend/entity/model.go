package entity

import "time"

type User struct {
	BaseModel
	FirstName string
	LastName  string
	Email     string
	Password  string
	Phone     string
	Role      string
}

type LoginPayload struct {
	Email    string
	Password string
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
