module.exports = {
  config: {
    // The bot prefix;
    prefix: '/',
    // The bot ID, if you are not sure how to get that, start the bot with loggers.ready set to True
    botId: 'd1abab86479f526765bdacd6f72ed1a0e4345d6cc454de5176b8a3b2507bef19',
    // You bot name.
    botName: 'FAWZY_1',
    // The owner of the bot.
    ownerName: 'youssef1230',
    // You room name (optional)
    roomName: 'روم العرب',
    // The coordinates you want the bot to teleport to on start.
    coordinates: {
      x: 12,
      y: 0,
      z: 11,
      facing: "FrontRight"
    }
  },
  settings: {
    // If set to true, you will be able to send messages through the terminal
    cmdChat: true,

    // The reaction name for kicking players (wave, clap, heart, wink, thumbsup)
    // Note that this won't work unless you have 'kickOnReact' set to true.
    reaction: 'heart',
    kickOnReact: true,

    // If 'danceOnTip' is set to true, the bot will perform the 'emoteId' on the tipper.
    emoteId: 'idle-dance-casual',
    danceOnTip: true,
  },

  loggers: {
    // Log all the data when the bot starts up
    ready: true,
    // Log all the messages in the chat in the terminal and inside the 'lib/playerMessages.log' file
    messages: true,
    // Log all the whispers the bot receives in the terminal
    whisper: true,
    // Log all the players who join the room in the terminal and inside the 'lib/playerJoined.log' file
    join: true,
    // Log all the players who leave the room in the terminal and inside the 'lib/playerLeft.log' file
    leave: true,
    // Log all the tips players or the bot receives in the terminal and inside the 'lib/playerTips.log' file
    tips: true,
    // Log all the emotes in the terminal (disabled)
    emotes: false,
    // Log all the player's movements (disabled)
    movements: false,
    // Log all the reactions in the terminal (disabled)
    reactions: false
  },

  emojis: {
    // Can be used later to access emojis by doing bot.emojis.emojiName
    check: '✅',
    xmark: '❎',
    smiley: '😊',
    thumbsUp: '👍',
    thumbsDown: '👎',
    heart: '❤️',
    fire: '🔥',
    star: '⭐️',
    rocket: '🚀',
    warning: '⚠️',
    question: '❓',
    exclamation: '❗️',
    clappingHands: '👏',
    partyPopper: '🎉',
    eyes: '👀',
    faceWithTears: '😂',
    thinkingFace: '🤔',
    facePalm: '🤦‍♂️',
    prayingHands: '🙏',
    rainbow: '🌈',
    sun: '☀️',
    moon: '🌙',
    lightning: '⚡️',
    coffee: '☕️',
    pizza: '🍕',
    hamburger: '🍔',
    iceCream: '🍦',
    cake: '🍰',
    musicNote: '🎵',
    movieCamera: '🎥',
    book: '📚',
    pencil: '✏️',
    computer: '💻',
    wrench: '🔧',
    trophy: '🏆',
    medal: '🥇',
    flag: '🚩'
  },

  permissions: {
    // You can add as many IDs as you want, for example: ['id1', 'id2'].
    owners: ['625f47804c3b246c8887328f', ''],
    moderators: ['', '']
  },
  authorization: {
    // To obtain your token, visit https://highrise.game/ and log in. Then, go to the settings and create a new bot. Accept the terms and generate a token.
    // To obtain your room ID, go to the game and navigate to the top right corner where the player list is displayed. Click on "Share this room" and copy the ID.
    room: '65cddfbff20be79c02c949d6',
    token: '04ce03641be3557f70593f7edc070d25fa5e8ae5aefd4d1464f3c8f6a872f87a'
  }
}