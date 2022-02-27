# API routes

base url: `domain.com/api/`

# GET /feed

- feed data
- get recent posts from following
- paginate

# GET /user/me

- info about user logged in

# GET /user/:address

- profile page
- posts, user profile info (bio, pfp, following, followers)

# POST /user/login

- web3 login
- address ( wallet address ), sig

# POST /post

- tokenid
- contractAddr
- get owner from contract
- description

# GET /post/:id

- post info
- nft, description
- find a way to get author wallet id from tokenid and contractaddr
- likes
- comments

# GET PUT /post/:id/comment

- comment
- get comments paginated
- post comment adds comment to table

# GET PUT /post/:id/like

- like
- get likes paginated
- post like adds like to table
