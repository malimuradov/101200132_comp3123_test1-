const resolvedPromise = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success)
    }, 500)
}
const rejectedPromise = () => {
    setTimeout(() => {
        try{
            console.log( {'error': 'delayed exception'} );
        } catch(e){
            console.error(e)
        }
    }, 500)
}

resolvedPromise()
rejectedPromise()