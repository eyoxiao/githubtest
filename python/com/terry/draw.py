# -*- coding: utf-8 -*-
"""
Created on Mon Apr 11 10:59:50 2016

@author: eyoxiao
"""
'''
import pylab as pl
import numpy as np

x=[1,2,3,4,5]
y=[1,4,9,16,25]

pl.plot(x,y,'r')
pl.xlim(0.0,7.0)
pl.ylim(0.0,30.0)
pl.show()
'''

import numpy as np
from numpy.random import randn 
import matplotlib.pyplot as plt



def getscatter():
    fig = plt.figure()
    ax = fig.add_subplot(111)
    t = ax.scatter(np.random.rand(20),np.random.rand(20))
    #ax.plot(np.random.rand(20),np.random.rand(20),'o')
    fig.show()

def getsubplot():
    for idx, color in enumerate("rgbyck"):
        plt.subplot(320+idx+1, axisbg=color)
    plt.show()
    
def getsubplot1():
    fig = plt.figure()
    ax1 = fig.add_subplot(221)
    ax2 = fig.add_subplot(222)
    ax3 = fig.add_subplot(223)
    
    ax1.hist(randn(100),bins=20,color='k',alpha=0.3)
    ax2.scatter(np.arange(30),np.arange(30)+3*randn(30))
    ax3.plot(randn(50).cumsum(),'k--')
    
    fig.show()

def getLabels():
    fig = plt.figure()
    ax = fig.add_subplot(111)
    ax.plot(randn(1000).cumsum(),'k',label='one')
    ax.plot(randn(1000).cumsum(),'k--',label='two')
    ax.set_xticks([0,250,500,750,1000])
    ax.set_xticklabels(['one','two','three','four','five'])
    ax.set_xlabel('Stages')
    ax.legend(loc='best')
    fig.show()
    
    
def getsincos():
    x = np.linspace(0, 10, 1000)
    y = np.sin(x)
    z = np.cos(x**2)

    plt.figure(figsize=(8,4))
    plt.plot(x,y,label="$sin(x)$",color="red",linewidth=2)
    plt.plot(x,z,"b--",label="$cos(x^2)$")
    plt.xlabel("Time(s)")
    plt.ylabel("Volt")
    plt.title("PyPlot First Example")
    plt.ylim(-1.2,1.2)
    plt.legend()
    plt.show()
    
    
#getscatter()
#getsubplot1()
getLabels()
