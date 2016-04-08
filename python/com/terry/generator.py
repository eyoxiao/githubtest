# -*- coding: utf-8 -*-
"""
Created on Fri Apr 08 15:31:42 2016

@author: eyoxiao
"""

def getFirstNFibonacci(number):
    n,a,b = 0,0,1
    fArray = list()
    while n<number:
        fArray.append(b)
        a,b=b,a+b
        n=n+1
    return fArray
    
def getFibByGen(number):
    n,a,b=0,0,1
    while n<number:
        yield b
        a,b=b,a+b
        n=n+1

class Fibonacci(object):
    def __init__(self,max):
        self.max = max
        self.n,self.a,self.b=0,0,1
    
    def next(self):
        if(self.n < self.max):
            r=self.b
            self.a,self.b = self.b,self.a+self.b
            self.n=self.n+1
            return r
        raise StopIteration()
        
    def __iter__(self):
        return self

f= Fibonacci(10)
for number in f:
    print number

for num in getFibByGen(10):
    print num

#print getFirstNFibonacci(5)












