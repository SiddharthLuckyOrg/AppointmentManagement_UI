type StatusProps = {
  //status: string
    status: 'loading' | 'success' | 'error'
    //This is done because the status has to be one of these three values.
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = <h1>Loading...</h1>
    }
    else if(props.status === 'success'){
        message = <h1>Data fetched Successfully</h1>
    }
    else if(props.status === 'error'){
        message = <h1>Error fetching data</h1>
    }
    return (
        <div>
            <h1>Status - {message}</h1>
        </div>
    )
}