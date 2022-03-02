const KEY_API = '563492ad6f91700001000001d6cc455f5be34763b0203094393d0761'
const BASE_URL = 'https://api.pexels.com/v1/'

const getImages = async (search='programing') => {
   const res = await fetch(`${BASE_URL}search?query=${search}`, {
        headers: {
            Authorization: KEY_API
        }
    })
    
    const  json = await res.json()

    return json
}

export {getImages}