package middlewares

type AccessControl struct {
	Deny      bool
	AllMethod bool
	AllPath   bool
	Methods   []string
	Paths     []string
}

var Roles = map[string]AccessControl{
	"admin": {
		AllMethod: true,
		AllPath:   true,
	},
	"user": {
		AllMethod: true,
		Paths:     []string{"/users/:id"},
	},
}
