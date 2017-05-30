function f(fun,x) {
    if( typeof fun==='string' && typeof x==='number'){
        return eval(fun);
    }
    return false;
}


function bisection(fun,a,b)
{
    if (a>=b || typeof a!=='number' || typeof b!=='number' || typeof fun!=='string') {
        return false;
    }
    var eps=0.001;
    var x0;
    var fa;
    var fb;
    var fmiddle;

    fa = f(fun,a);
    fb = f(fun,b);

    while(Math.abs(a - b) > eps){
        x0 = (a + b) / 2;
        fmiddle = f(fun,x0);
        if(fa * fmiddle < 0) {
            b = x0;
        } else {
            a = x0;
            fa = fmiddle;
        }
    }
    return parseFloat(x0.toFixed(3));

}

module.exports = {
    f:f,
    bisection: bisection
};
