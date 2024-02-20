const express = require('express')
const Sequelize = require('sequelize')
const app = express()

app.use(express.json())

const dbUrl = 'postgres://webadmin:AQGrys74691@node58272-noderest0.proen.app.ruk-com.cloud/Books'

const sequelize = new Sequelize(dbUrl)