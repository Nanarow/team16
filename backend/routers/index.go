package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/sut66/team16/backend/controllers"
	"github.com/sut66/team16/backend/entity"
	"github.com/sut66/team16/backend/middlewares"
)

func InitRouter(route *gin.Engine) {

	route.Use(middlewares.CORS())

	route.POST("/register", controllers.Create[*entity.User])

	authRouter := route.Group("/")
	initRequiredAuth(authRouter)

}
func initRequiredAuth(route *gin.RouterGroup) {
	// route.Use(middlewares.Authentication())
	// route.Use(middlewares.Authorization())
	route.GET("/tours", controllers.GetAll[*entity.TourRegistration])
	route.GET("/tours/:id", controllers.Get[*entity.TourRegistration])
	route.POST("/tours", controllers.Create[*entity.TourRegistration])
	route.PUT("/tours/:id", controllers.Update[*entity.TourRegistration])
	route.DELETE("/tours/:id", controllers.Delete[*entity.TourRegistration])

	// route.GET("/users/:id", func(c *gin.Context) {

	// 	c.JSON(200, gin.H{"id": c.Param("id"), "full_path": c.FullPath()})
	// })
	// route.GET("/users", func(c *gin.Context) {

	// 	c.JSON(200, gin.H{"id": "all", "full_path": c.FullPath()})
	// })
}
