export function loadTestUsers() {
    const users = [
        {
            id: 100,
            fullName: 'Vasya Ivanov',
            isMale: true
        },
        {
            id: 101,
            fullName: 'Maria Smith',
            isMale: false
        }   
    ];
    return users;
}


const options = {
    results: 10,
    seed: 'PD2022',
    page: 1,
}

export function loadRandomUsers(){
    fetch('https://randomuser.me/api/?results=10')
    .then( (response) => response.json())
    .then ( ({results})  => console.dir(results))
    .catch( (error) => console.log(error))
}

export default {loadTestUsers, loadRandomUsers} 


