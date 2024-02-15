const bcrypt = require(`bcryptjs`)

const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passwordHash)

        if (users[i].username === username && existing) {
          const usersCopyFrontEnd = {...users[i]}
          delete usersCopyFrontEnd.passwordHash
          console.log(`Logging User In`)
          res.status(200).send(usersCopyFrontEnd)
          return
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
        let {username, email, firstName, lastName, password} = req.body

        let salt = bcrypt.genSaltSync(5)
        let passwordHash = bcrypt.hashSync(password, salt)

        const newUser = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }

        console.log('Registering User')
        users.push(newUser)
        const returnNewUser = {...newUser}
        delete returnNewUser.passwordHash
        res.status(200).send(returnNewUser)
    }
}

console.log(users)



