'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartSchema extends Schema {
  up () {
    this.create('parts', (table) => {
      table.increments()
      
      table.string('title')
      .notNullable()
      .unique()

      table.string('reference')
      .notNullable()

      table.string('brand')
      .notNullable()

      table.string('url')
      .notNullable()



      table.timestamps()
    })
  }

  down () {
    this.drop('parts')
  }
}

module.exports = PartSchema
