
type Greetprops = {
    //Adding a question mark makes the property optional
    name?: string
    count: number
    isLoggedIn: boolean
}
export const Greet = (props: Greetprops) => {
    const{count = 0} = props;
    return (
        <div>
            {
                props.isLoggedIn ? <h1>Name is {props.name} and count {count} and user Logged in: {props.isLoggedIn}</h1> : <h1>Not logged in</h1>
            }
        </div>
    )
}
