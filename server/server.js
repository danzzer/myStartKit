/**
 * Created by admin on 2016/5/21.
 */
'use strict'
let express = require('express')
let app = express()

app.get("/", function(req, res, next) {
	res.send("hello world")
})


app.listen(3000)



