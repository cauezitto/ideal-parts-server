'use strict'

const Part = use('App/Models/Part')
const limit = 6

class PartController {
 
   
  async index ({params, request}) {

    const {page, search} =  request.qs

    if(!search){
    const parts = await Part.query().paginate(page || 1 ,limit)

    return parts
    }

    const serializedSearch = search.toUpperCase()

    const parts = await Part.query()
      .whereRaw(
        `title LIKE "%${serializedSearch}%"
        OR brand LIKE "%${serializedSearch}%"
        OR reference LIKE ?`,
        `%${serializedSearch}%`
        )
      
      .paginate(page || 1, limit)
      
    return parts
  }
  
  async store ({ request, response }) {
    const data = request.only([
      'title',
      'reference',
      'brand',
      'url'])

      const part = Part.create(data)

      return part
  }

  
  async show ({ params}) {
    console.log(params)
    const part = await Part.findOrFail(params.id)

    return part
  }
   
  async update ({ params, request, response }) {
  }

  
  async destroy ({ params, request, response }) {
  }
}

module.exports = PartController
