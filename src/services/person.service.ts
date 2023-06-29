import MersenneTwister from "mersenne-twister";
import personRepository from "../repositories/person.repository";

async function getPerson() {

    const generator = new MersenneTwister();

    const min = 1;
    const max: number = await personRepository.getPersonLenght();

    const random = Math.floor(generator.random() * (max - min + 1)) + min;

    return personRepository.getPerson(random);
    
}

const personServices = {
    getPerson,
}

export default personServices;