module.exports = {
    path: '/randomtopic',
    code: `$var[topic;$random[What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Where are some unusual places you've been?;What movie quotes do you use on a regular basis?;Did you go out today?]]
    $send[200;json;{
    topic: '$get[topic]'
    }]
    `
  }