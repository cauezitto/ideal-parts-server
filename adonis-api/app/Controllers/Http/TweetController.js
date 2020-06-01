'use strict'

const Tweet = use('App/Models/Tweet')

class TweetController {
 
  async index ({ request, response, view }) {
    const tweets = Tweet.all()
  }

  async store ({ request, auth, response}) {
    const data = request.only(['content'])

    console.log(auth.user)
    const tweet = await Tweet.create({user_id: auth.user.id, ...data})

    return tweet
  }

 
  async show ({ params, request, response, view }) {
    const tweet = Tweet.findOrFail(param.id)

    return tweet
  }



  async update ({ params, request, response }) {
  }


  async destroy ({ params, auth, request, response }) {

    const tweet = Tweet.findOrFail(param.id)

    if(tweet.user_id !== auth.user.id){
      return response.status(401)
    }

    await tweet.delete()

  }
}

module.exports = TweetController
