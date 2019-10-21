const mongoose = require('./connection.js')

const ThemeSchema = new mongoose.Schema({
 theme: String
})

const themeCollection = mongoose.model('Theme', ThemeSchema)


//getAll
const getAllThemes = () => {
   return themeCollection.find({})
}

//getOne
const getOneTheme = (id) => {
    return themeCollection.findById({_id: id})
}

//create
const createTheme = (themeData) => {
    return themeCollection.create(themeData)
}

//update
const updateTheme = (id, themeData) => {
    return themeCollection.updateOne({_id: id}, themeData)
}

//delete
const deleteTheme = (id) => {
    return themeCollection.deleteOne({_id: id})
}




module.exports = {
   getAllThemes,
   getOneTheme,
   createTheme,
   updateTheme,
   deleteTheme
  }