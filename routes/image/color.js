module.exports = {
    path: '/color',
    code: `
    $if[$getQuery[hex]==undefined||$isValidHex[$getQuery[hex]]==false;
        $send[400;json;{
            "error": "Invalid hex color code provided"
        }]
        $break
    ]

    $createCanvas[512;512]
    $color[$getQuery[hex]]
    $drawRect[0;0;512;512]
    $send[200;canvas;$default]
    `
};