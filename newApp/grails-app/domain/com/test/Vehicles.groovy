package com.test
import grails.rest.Resource

@Resource(uri = '/vehicle')
class Vehicles {

    String name

    static belongsTo = {
        [driver:Driver]
    }

    static constraints = {
    }
}
