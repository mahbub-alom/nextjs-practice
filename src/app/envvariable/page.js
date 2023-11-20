export default function Home(){
    return(
        <div>
            {
                process.env.NODE_ENV=='development'?
                <h1>You are on development mode</h1>
                :
                <h1>You are on production mode</h1>
            }
        </div>
    )
}