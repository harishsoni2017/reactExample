package com.test


import grails.rest.Resource

@Resource(uri = '/model')
class Model {

    String name

    static constraints = {
    }
}