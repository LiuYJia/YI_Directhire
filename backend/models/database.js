
module.exports = {
    name:'people',

    pool:{
        host     : '127.0.0.1',
        user     : 'root',
        password : '123',
        database : 'people'
    },

    
    User:function User(user){
        this.username = user.username;
        this.userpass = user.userpass;
    }
}