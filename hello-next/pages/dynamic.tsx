import { GetStaticProps, GetStaticPaths, GetServerSideProps} from "next"
import path from "path"


// This will always run on every page request - even on production
// avoid whenever possible since there are no cache benefits from SSR
// BUT adds layer of dynamic rendering

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            myFavNum: Math.random()
        }
    }
}


// executed on both server in client 
export default function Dynamic(props) {
    return <h1> Dynamic Number - { props.myFavNum } </h1>
}