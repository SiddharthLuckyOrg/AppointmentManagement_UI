type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            <h1>{props.name.firstName} and {props.name.lastName}</h1>
        </div>
        //Should contain the first and last as properties
    )
}