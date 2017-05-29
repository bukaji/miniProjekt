function f(fun,x) {
    //return Math.pow(x,3)-2*Math.pow(x,2)+4*x-1; // x^3-2*x^2+4*x-1
    return eval(fun);
}


function bisection(fun,a,b)
{
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
    bisekcja: bisekcja
};
