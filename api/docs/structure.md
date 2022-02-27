- contract, nft contract for people who will create nfts on our platform
- backend structure, ( profile -> linked to wallet addr, no pwd no id, so no sign up, direct login, will create a profile if it doesnt exist, post db structure, likes etc etc, profile with followers? following?,)
- in the future partial ownership with erc1155 support
- comments on posts
- posts not on blockchain for the hackathon ( maybe future)
- only nfts on blockchain
- in the future messaging decentralized

we will take the author from the nft, since the owner can be transferred
so we will have created by, and owned by owned by guy can create post created by cant if created by also owns then its fine but created by should get a reference link to profile

## db tables

- user
- post

### user

- id
- address
- posts (links to post document)
- user profile image ( url )
- username
- bio
- follower [array of users]
- following [array of users]
- nonce ( number only used once for verification)

### post

- id
- NFT token id + contract address
- comments (ids)
- likes (ids)
- like count ( calculated server side not column on table)

### comment

- id
- user_id
- content
- post id

### like - id

- user_id
- post_id

## code structure

- for every request to post, 3 queries
  - one on post table
  - one on comment to get comments ( with pagination )
  - one on likes to get likes
- pagination and error handling middleware
