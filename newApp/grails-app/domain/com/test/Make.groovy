package com.test

import grails.rest.Resource

@Resource(uri = '/make')
class Make {

    String name

    static constraints = {
    }
}