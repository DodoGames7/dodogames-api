module.exports = ({
    path: "/translate",
    details: { 
      description: "Translates a text to any language.",
      usage: "?text=sample&from=lang&to=lang"
    },
    code: `
$send[200;json;{
  "status": 200,
  "data": [{
    "translated": "$jsEval[true;const translate = require('translate-google')
translate('$getQuery[text]', {from: '$getQuery[from]', to: '$getQuery[to]'})]",
  "from": "$getQuery[from]",
  "to": "$getQuery[to]"
  }],
  "success": true
    }]
$if[$get[langValidator]==false;400;{
"status" : 400,
"short": "Bad request.",
"text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
"success": false,
"error": [{
  "text": "Invalid languages given in query parameters."
}],
"Endpoint data": [{
  "description": "$getRoute[/translate;details.description]",
  "usage": "$getRoute[/translate;details.usage]",
  "langs": ['auto', 'af', 'sq', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh-ch', 'zh-tw', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ps', 'fa', 'pl', 'pt', 'ma', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']
}]
}]
$var[langValidator;$jsEval[true;const langs = ['auto', 'af', 'sq', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh-ch', 'zh-tw', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ps', 'fa', 'pl', 'pt', 'ma', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']
var from = "$getQuery[from]"
var to = "$getQuery[to]"
if(langs.includes(from)&&langs.includes(to)){
true
}else{
false
}]]
$if[$getQuery[text]==undefined||$getQuery[from]==undefined||$getQuery[to]==undefined;400;{
"status" : 400,
"short": "Bad request.",
"text": "Your request was somehow malformed. Since the server couldn't understand the request, it couldn't process it.",
"success": false,
"error": [{
  "text": "Missing query parameters.",
  "parameters": [{
    "required": [
      "text",
      "from",
      "to"
    ],
    "optional": []
  }]
}],
"Endpoint data": [{
  "description": "$getRoute[/translate;details.description]",
  "usage": "$getRoute[/translate;details.usage]",
  "langs": ['auto', 'af', 'sq', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh-ch', 'zh-tw', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ps', 'fa', 'pl', 'pt', 'ma', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']
}]
}]
    `
})
