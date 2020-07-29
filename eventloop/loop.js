const bar = () => console.log('bar');

const jazz = () => console.log('jazz');

const foo = () => {
    console.log('foo');
    bar();
    jazz();
}
foo()