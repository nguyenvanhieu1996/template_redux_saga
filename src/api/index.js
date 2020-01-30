const URL = 'https://reqres.in/api/'
const fetchImages = async (page) => {
    console.log('page', page);
    const response =  await fetch(`${URL}users?page=${page}`)
    return response.json()
}
export {
    fetchImages
}