# -*- coding: utf-8 -*-
"""
Created on Sat Jan 19 20:51:31 2019

@author: Joosteen
"""
import pandas as pd
import numpy as np
import sys
import json

donnees = pd.read_excel('data/bd.xlsx')
noms = donnees['Product']

def searchItem(string):
    found = False
    numItems = 0
    results = {}
    for i,x in enumerate(noms):
        if string.lower() in x.lower(): 
            numItems = numItems + 1
            found = True
            result = {}
            result['Name'] = x
            result['Raw'] = donnees['Raw'][i]
            result['Transport'] = donnees['Transport'][i]
            result['Storage'] = donnees['Storage'][i]
            result['Packaging'] = donnees['Packaging'][i]
            result['TOTAL'] = donnees['TOTAL'][i]
            results[numItems] = result
            #print(json.dumps(result))
            #print(donnees['Raw'][i],
                  #donnees['Transport'][i],
                  #donnees['Storage'][i],
                  #donnees['Packaging'][i],
                  #donnees['TOTAL'][i])
    if not found:
        print(string, ' not found in database')

    return results
    
results = searchItem(sys.argv[1])

print(json.dumps(results))
#print('{"a":5}')

sys.stdout.flush()

