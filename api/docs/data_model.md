# schema for user

- walletId (string)
- username (string)
- bio (string)
- followerCount (virtual)
- followingCount (virtual)
- followers ([User])
- following ([User])
- posts ([Post])
- nonce (generated pre-save)

# schema for post

- tokenid (string)
- contractaddr (string)
- description (string)
- likes ([User])
- likesCount (virtual)
- comments ([Comment])
- commentsCount (virtual)
- author (User)

# schema for comment

- post (Post)
- author (User)
- content (string)

# schema for like

- post (Post)
- author (User)
