import express from 'express'
const app: express.Express = express()
app.use(express.json())

type User = {
    id: number
    name: string
}

const users: User[] = [
  { "id": 1, "name": "イリヤ" },
  { "id": 2, "name": "美遊" },
  { "id": 3, "name": "クロエ" },
  { "id": 4, "name": "オルタ" },
  { "id": 5, "name": "マシュ" },
]

app.get('/users', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
})

// expose
app.listen(3000, () => {
    console.log("Start on port 3000.")
})
