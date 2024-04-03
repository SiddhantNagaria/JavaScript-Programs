// Promises --> 
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            resolve(data);
        }, 1000);
    });

}
async function fetch() {
    try {
        const data =  await fetchData();
        console.log("s", data);
    }
    catch (error) {
         console.log("e", data);
    }
}
fetch();