module.exports["route"] = {
    url: '/fun/randomtopic',
    method: "GET",
    code: `
    $let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?]]

        $reply[
            $setCode[200]
            $setType[JSON]
            $setBody[{
                "topic": "$get[topics]"
                 }]]
    `
}