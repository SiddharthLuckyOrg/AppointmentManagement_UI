
type Greetprops = {
    name: string
    count: number
    isloggedIn: boolean
}
export const Greet = (props: Greetprops) => {
    return (
        <div>
            {
                props.isloggedIn ? <h1>Name is {props.name} and count {props.count} and user Logged in: {props.isloggedIn}</h1> : <h1>Not logged in</h1>
            }
        </div>
    )
}
