const {gql} = require('apollo-server-express')

module.exports = gql`
    type User{
        username:String
        password:String
        age:Float

    }
    type Query{
        getUser(username:String):User
    }
    
`