package entity

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
