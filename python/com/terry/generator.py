# -*- coding: utf-8 -*-
"""
Created on Fri Apr 08 15:31:42 2016

@author: eyoxiao
"""

def getFirstNFibonacci(number):
    n,a,b = 0,0,1
    while n<number:
        print b
        a,b=b,a+b
        n=n+1
        
getFirstNFibonacci(5)