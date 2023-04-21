// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("done"));
        reject(cinsole.log("reject"));
    }, 1000);
})

myPromise.then(
    result => alert(result),
    error => alert(error)
)


// Async Await
const loadData = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const data = loadData().then((data) => console.log(data));


//iife function     //Immediately Invoked Function Expression

(async ()=> {
    const data = await loadData();
    console.log(data);
})();


//promise.all
const loadData1 = async () => {
    try{
        const url1 = "https://jsonplaceholder.typicode.com/todos/1";
        const url2 = "https://jsonplaceholder.typicode.com/todos/2";
        const url3 = "https://jsonplaceholder.typicode.com/todos/3";
        const res1 = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
        const dataPromises = await results.map(results=>results.json());
        const finalData = Promise.all(dataPromises);
        return finalData;
    }catch(err){
        console.log(err);
    }
}

const data1 = loadData1().then((data) => console.log(data));