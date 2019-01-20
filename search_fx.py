# -*- coding: utf-8 -*-
"""
Created on Sat Jan 19 20:51:31 2019

@author: Joosteen
"""
import pandas as pd
import numpy as np
import sys

donnees = pd.read_excel('data/bd.xlsx')
noms = donnees['Product']

def searchItem(string):
    found = False
    for i,x in enumerate(noms):
        if string.lower() in x.lower(): 
            found = True
            print(donnees['Raw'][i],
                  donnees['Transport'][i],
                  donnees['Storage'][i],
                  donnees['Packaging'][i],
                  donnees['TOTAL'][i])
    if not found:
        print(string, ' not found in database')
    
searchItem(sys.argv[1])

sys.stdout.flush()

