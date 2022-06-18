import axios from 'axios';
// const axios = require("axios");
require('dotenv').config() //allows us to use the environment variables in .env file
const { PORT } = process.env
const port = process.env.PORT || PORT;
const baseUrl = `http://localhost:${port}`

const getBio = async () => {
    try {
        let res = await axios.get(`${baseUrl}/bio`)
        let bio = res.data
        console.log(bio)
    } catch (err) {
        console.error(err)
    }
}

const getAbout = async () => {
    try {
        let res = await axios.get(`${baseUrl}/about`)
        let about = res.data
        console.log(about)
    } catch (err) {
        console.error(err)
    }
}

const getContact = async () => {
    try {
        let res = await axios.get(`${baseUrl}/contact`)
        let contact = res.data
        console.log(contact)
    } catch (err) {
        console.error(err)
    }
}

let bio = getBio()
let about = getAbout()
let contact = getContact()

const firstName = document.querySelector("#firstNmae")
const lastName = document.querySelector("#lastNmae")
const occupation = document.querySelector("#occupation")
const stacks = document.querySelector("#stacks")
let techStacks = ""
bio.stacks.forEach(stack => {
    techStacks += `${stack}\n`
})

firstName.textContent = `First Name: ${bio[firstName]}`
lastName.textContent = `Last Name: ${bio[lastNmae]}`
occupation.textContent = `Occupation: ${bio[occupation]}`
stacks.textContent = `Tech Stacks: ${techStacks}`

