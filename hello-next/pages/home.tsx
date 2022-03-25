import { useState } from 'react'
import jwt from 'jsonwebtoken'

function Home() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [message, setMessage] = useState<string>('You are not logged in')
    const [secret, setSecret] = useState<string>('')

    async function submitForm() {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then((t) => t.json())
        const token = res.token
        if (token) {
            const json = jwt.decode(token) as {[key:string]: string}
            console.log(json)
            setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin': 'not an admin'}` )
            
            const res = await fetch('/api/secret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            }).then((t) => t.json())
            
            if (res.secretAdminCode) {
                setSecret(res.secretAdminCode)
            } else {
                setSecret('nothing available')
            }

        } else {
            setMessage('Something went wrong in authentication')
        }
    }

    return (
        <div>
            <h1>{message}</h1>
            <h2> Secret : {secret}</h2>
            <form method="POST" action="./api/login">
                <input type="text" name="username" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
                <br/>
                <input type="password" name="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <br />
                <input type="button" value="Login" onClick={submitForm}/>
            </form>
        </div>
    )
}

export default Home;