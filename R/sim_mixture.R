z <- c(rnorm(200, 25, 3), rnorm(200, 35, 3))

#x <- seq(10, 50, len=301)
#y <- sapply(x, function(a, b, d) mean(dnorm((b-a)/d)*d), b=z, d=1)

library(RJSONIO)
toJSON(z, digits=5)


