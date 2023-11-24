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

	InitBasicApi[*entity.Food](route, "/foods")
	InitBasicApi[*entity.User](route, "/users")
	InitBasicApi[*entity.Role](route, "/roles")
	InitBasicApi[*entity.RidingLevel](route, "/riding_levels")
	InitBasicApi[*entity.Course](route, "/courses")
	InitBasicApi[*entity.Schedule](route, "/schedules")
	InitBasicApi[*entity.Health](route, "/healths")
	InitBasicApi[*entity.Horse](route, "/horses")
	InitBasicApi[*entity.Gender](route, "/gender")

	// route.GET("/users/:id", func(c *gin.Context) {

	// 	c.JSON(200, gin.H{"id": c.Param("id"), "full_path": c.FullPath()})
	// })
	// route.GET("/users", func(c *gin.Context) {

	// 	c.JSON(200, gin.H{"id": "all", "full_path": c.FullPath()})
	// })
}
