const API_URL = `https://itunes.apple.com/search?term=`
const entity = '&media=music'
const fetchSearch = async (searchTerm) => {
    try {
        const response = await fetch(API_URL + searchTerm + entity)
        const resData = await response.json()
        console.log(response)
        console.log(resData)
        return resData.results
    } catch (err) {
        console.log(err)
        return err
    }
}

const wrapPromise = (promise) => {
    let status = 'pending'
    let result = ''

    let suspender = promise.then(response => {
        status = 'success'
        result = response
    }, err => {
        status = 'error'
        result = err
    })

    return {
        read() {
            if (status === 'pending') {
                throw suspender
            }

            else if (status === 'error') {
                throw result
            }

            return result
        }
    }
}

export const createResource = (searchTerm) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm))
    }
}