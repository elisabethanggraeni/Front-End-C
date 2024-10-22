//Nomor 1
//a
const helloWorld = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
};

//b
const messages = async () => {
    const msg = await helloworld();
    console.log(msg)
};

//c 
messages();

//Nomor 2 
// a
const ambilDatauser = () => {
    // b
    fetch("https://reqres.in/api/users")
        // c
        .then(response => response.json())
        //d
        .then(({ data }) => { 
            data.forEach(({ first_name, last_name }) => { 
                console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
            });
        })
        .catch(error => {
            console.error(`Error: ${error}`); 
        });
};

// e
ambilDatauser();

// Nomor 3
// a
const ambilDataUser = async () => {
    try {
        // b
        const response = await fetch("https://reqres.in/api/users");
        // c
        const { data } = await response.json(); 
        
        // d
        data.forEach(({ first_name, last_name }) => { 
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
        });
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
};

// e.
ambilDataUser();

//Nomor 4
// a 
const ambilDataUSer = async () => {
    try {
        // b
        const response = await axios.get("https://reqres.in/api/users");
        
        // c
        const { data } = response.data; 
        
        // d
        data.forEach(({ first_name, last_name }) => { 
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
        });
    } catch (error) {
        console.error(`Error: ${error}`); 
    }
};

// e
ambilDataUSer();
