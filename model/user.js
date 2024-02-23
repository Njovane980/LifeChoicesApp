import { Connection as db } from "../config/index";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication";
class users{
    fetchUsers(req, res){
        const qry = `
        select
        userID, firstName, lastName,
        userAge, gender, emailAdd, userRole
        from
        users;
        `
        db.query(qry, (err,results)=>{
            if(err) throw err
            res.json({
             status: res.statusCode,
             results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
            SELECT userID, firstName, lastName,
            userAge, gender, emailAdd, userPwd, userRole
            FROM users
            WHERE userID = ${req.params.id};
            `;
        db.query(qry, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          });
        });
      }
        async createUser(req, res){
            // payload
            let data = req.body
            data.userPwd = await hash(data?.userPwd, 10)
            let user = {
                emailAdd: data.emailAdd,
                userPwd: data.userPwd
            }
            const qry = `
            insert into userw
            set ?;
            `
            db.query(qry, [data], (err)=>{
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'Please use another email address'
                    })
                }else{
                    //create a token
                    let token = createToken(user)
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: "You're registered"
                    })
                }
            })
        }
    }
    export {
        Users
    }









