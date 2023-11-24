package main

import (
	"github.com/gin-gonic/gin"
	"github.com/sut66/team16/backend/entity"
	"github.com/sut66/team16/backend/routers"
)

const PORT = "8985"

func main() {
	entity.SetupDatabase()
	route := gin.Default()

	// init Routes
	routers.InitRouter(route)

	// Run the server
	route.Run("localhost:" + PORT)
}
