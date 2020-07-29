const doSomething = ()=> console.log('test');

const measureSomething = () => {
    console.log('doSomething()');

    //doSomething and measure the time it takes;
    doSomething();
    console.timeEnd('doSomething()');
}

measureSomething()