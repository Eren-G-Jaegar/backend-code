require ('dotenv').config()

const express = require ('express')

const app =express()

const port=4000

const githubData= {
  "login": "Eren-G-Jaegar",
  "id": 167697440,
  "node_id": "U_kgDOCf7cIA",
  "avatar_url": "https://avatars.githubusercontent.com/u/167697440?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Eren-G-Jaegar",
  "html_url": "https://github.com/Eren-G-Jaegar",
  "followers_url": "https://api.github.com/users/Eren-G-Jaegar/followers",
  "following_url": "https://api.github.com/users/Eren-G-Jaegar/following{/other_user}",
  "gists_url": "https://api.github.com/users/Eren-G-Jaegar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Eren-G-Jaegar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Eren-G-Jaegar/subscriptions",
  "organizations_url": "https://api.github.com/users/Eren-G-Jaegar/orgs",
  "repos_url": "https://api.github.com/users/Eren-G-Jaegar/repos",
  "events_url": "https://api.github.com/users/Eren-G-Jaegar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Eren-G-Jaegar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-04-21T15:11:48Z",
  "updated_at": "2025-12-22T12:36:09Z"
}

app.get('/data',(req,res)=>{
  res.json(githubData)
})


app.get('/',(req,res)=>{
  res.send(`<h1>Hello User...ujjal</h1>`)
})

app.get('/register',(req,res)=>{
  res.send("<h1>Registere Successfully.</h1>")
})

app.get('/login',(req,res)=>{
  res.send("<h1>Logged In Successgully.</h1>")
})

app.listen(process.env.PORT,()=>{
  console.log(`Server created. Listening on port ${process.env.PORT}`)
  
})
