const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });
  
  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });
  
  Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
  
  async function getData() {
    return await Promise.resolve('I made it!');
  }
  
  const data = getData();
  console.log(data);
  
  const myPromise = () => Promise.resolve('I have resolved!');
  
  function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
  }
  
  async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
  }
  
  firstFunction();
  secondFunction();
  
  const promise1 = Promise.resolve('First')
  const promise2 = Promise.resolve('Second')
  const promise3 = Promise.reject('Third')
  const promise4 = Promise.resolve('Fourth')
  
  const runPromises = async () => {
      const res1 = await Promise.all([promise1, promise2])
      const res2  = await Promise.all([promise3, promise4])
      return [res1, res2]
  }
  
  runPromises()
      .then(res => console.log(res))
      .catch(err => console.log(err))