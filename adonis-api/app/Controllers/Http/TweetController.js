'use strict'

const Tweet = use('App/Models/Tweet')

class TweetController {
 
  async index () {
    const tweets = await Tweet.query()
      .with('user')
      .fetch()

      const jsonTweets = tweets.toJSON()
    
      jsonTweets.map(tweet=> delete tweet.user.password)

      return jsonTweets
  }

  async store ({ request, auth, response}) {
    const data = request.only(['content'])

    console.log('auth',auth.user)
    const tweet = await Tweet.create({user_id: auth.user.id, ...data})

    return tweet
  }

 
  async show ({ params, request, response, view }) {
    const tweet = await Tweet
      .findOrFail(params.id)

    
  
    return tweet
  }



  async update ({ params, request, response }) {
  }


  async destroy ({ params, auth, request, response }) {

    const tweet = await Tweet.findOrFail(params.id)

    if(tweet.user_id !== auth.user.id){
      return response.status(401)
    }

    await tweet.delete()
  }
}

module.exports = TweetController
