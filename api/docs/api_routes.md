# API routes

base url: `domain.com/api/`

# GET /feed

- feed data
- get recent posts from following
- paginate

# POST /user/me

- info about user logged in

# GET /user/:address

- profile page
- posts, user profile info (bio, pfp, following, followers)

# POST /user/login

- web3 login
- address ( wallet address ), sig

# GET /post/:id

- post info
- nft, description
- author
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
