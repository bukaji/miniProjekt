'use strict';

var expect = require('chai').expect;
var app = require('../app/app');
var x=0;

describe('eval function', function () {
    describe('when 1st parameter is string and 2nd int', function(){
        it('should return eval(fun)', function () {
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 2)).to.eql(7);
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 3)).to.eql(20);
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 4)).to.eql(47);
        });
    });
    describe('when some parameters is not correct', function () {
        it('should return false both string', function () {
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1","2")).to.eql(false);
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", "3")).to.eql(false);
            expect(app.f("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", "4")).to.eql(false);
        });
        it('should return false when 1st is not string and 2nd is int', function () {
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1,2)).to.eql(false);
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, 3)).to.eql(false);
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, 4)).to.eql(false);
        });
        it('should return false when 1st is not string and 2nd is string', function () {
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1,"2")).to.eql(false);
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, "3")).to.eql(false);
            expect(app.f(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, "4")).to.eql(false);
        });
    });
});

describe('bisection function', function () {
    describe('when 1st parameter is string, 2nd and 3rd is int', function () {
        it('should calculate bisection and return float with 3 decimal places', function () {
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 5, 8)).to.eql(7.999);
        });
    });
    describe('when some parameter is not correct ', function () {
        it('should return false when 2nd or 3rd is string', function () {
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", "5", 8)).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", "9", 12)).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 5, "8")).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1", 9, "12")).to.eql(false);
        });
        it('should return false when 1st is not string', function () {
            expect(app.bisection(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, 5, 8)).to.eql(false);
            expect(app.bisection(Math.pow(x,3)-2*Math.pow(x,2)+4*x-1, 9, 12)).to.eql(false);
        });
    });
    describe('when 2nd parameter is higher or equal to 3rd', function () {
        it('should return false', function () {
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1",8, 5)).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1",12, 9)).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1",8, 8)).to.eql(false);
            expect(app.bisection("Math.pow(x,3)-2*Math.pow(x,2)+4*x-1",12, 12)).to.eql(false);
        })
    })
});