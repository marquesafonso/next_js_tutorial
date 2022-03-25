import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'jfeaeubgcuhvoiu<snvoiknçlkj2r90j2438hfnsoçkj<nc2qp8'

function isAdmin (req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body
    const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean}

    if (admin) {
        res.json({ secretAdminCode: 12345 })
    } else {
        res.json({
            admin: false
        })
    }
}

export default isAdmin;