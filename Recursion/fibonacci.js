function fibonacci(n) {
    const number = [];
    if (n == 0){
        return number[0] = [0];
    }
    
    if (n == 1){
        return number[0,1] = [0, 1];
    }

    const fibo = fibonacci(n - 1);
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    return fibo;
    
}

export default fibonacci;