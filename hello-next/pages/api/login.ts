// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'jfeaeubgcuhvoiu<snvoiknçlkj2r90j2438hfnsoçkj<nc2qp8'

function Login (req: NextApiRequest, res:NextApiResponse) {
  console.log(req.body)
  if (!req.body) {
    res.statusCode = 404;
    res.end('Error')
    return
  }
   
  const {username, password} = req.body
  res.json({
     token: jwt.sign(
      { 
       username,
       admin: username ==='admin' && password === 'admin'
      },
      KEY)
  })
}



export default Login;