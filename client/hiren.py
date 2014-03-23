#!/usr/bin/env python3
'''
Date : March 23 , 2014 . 6:55 PM !  lol :P
'''
__author__ = 'prism'

import requests
import urllib2

def OnLine():
    """
    Check if connection is Ok or not
    """
    try:
        response=urllib2.urlopen('http://74.125.228.100',timeout=1)
        return True
    except urllib2.URLError as err: pass
    return False