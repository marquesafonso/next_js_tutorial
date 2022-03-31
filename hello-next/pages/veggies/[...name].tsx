import { useRouter } from "next/router";

// The [...name] allows you to catch all possible nested routes independently of depth
// specially useful if depth is not necessarily known or can change

export default function Veggies() {
    const router = useRouter()
    console.log(router)
    return (
        <h1>
            Hello from Veggies!
        </h1>
    )
}