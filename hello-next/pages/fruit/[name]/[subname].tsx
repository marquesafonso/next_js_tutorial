import { useRouter } from "next/router"

// Two layers deep into nested routing!
export default function FruitName() {
    const router = useRouter()
    // router will be initialized as empty object unless prefetching is set
    // console.log(router)

    function takeMeHome() {
        router.push('/')
        // option2: router.replace('/') This will clear the jistory stash [i.e., going back to previous page]
    }

    return (<h1>
            Hello from {router.query.name} and {router.query.subname}!
            <button onClick={takeMeHome}>Home</button>
            </h1>
            )
}