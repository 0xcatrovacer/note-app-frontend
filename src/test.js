const axios = require('axios')

const a = async () => {
    try {
        const notes = await axios.get('http://localhost:8000/notes').data
        console.log(notes)
    } catch (e) {
        console.log(e)
    }
}

a()

