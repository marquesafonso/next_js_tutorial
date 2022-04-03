import { GetStaticProps, GetStaticPaths} from "next"
import { useRouter } from "next/router"


// This func is executed on the server
export const getStaticProps: GetStaticProps = async (context) => {
    const fs = require('fs')

    return {
        props: {
            revalidate: 10, // seconds
            myFavNum: Math.random()
        }
    }
} 

// getStaticProps runs at build time - NOT at runtime
// go to http://localhost:3000/fruit/hello -> take the output -> store it on disk
// go to http://localhost:3000/fruit/world -> take the output -> store it on disk

export const getStaticPaths: GetStaticPaths = async () => {
    // here you can access all node things
    // like db calls, fs, etc

    return {
        paths: [
            {
                params: { name: 'hello' }
            },
            
            {
                params: { name:'world' }
            }
        ],
        fallback: true //this means any other go to http://localhost:3000/fruit/hrbhjvrjbsi is stil open
    }
}


export default function Fruit(props) {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Is loading...</h1>
    }
    return <h1>Hello from one layer into the fruit route (dynamic is good) - {props.myFavNum} </h1>
}