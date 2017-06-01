package com.test
import grails.rest.Resource

@Resource
class Driver {

    String name

    static hasMany =
        [vehicles:Vehicles]


    static constraints = {
        vehicles nullable: true
    }
}
