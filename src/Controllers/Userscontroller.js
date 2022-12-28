import Users from '../schemas/users'

class Userscontroller {
    async post(req, res) {
        const { id, foto, estabelecimento, telefone, endereco, cnpj } = req.body
        const list = await Users.create({
            id,
            foto,
            estabelecimento,
            telefone,
            endereco,
            cnpj

        })
        res.json(list)
    }
    async update(req, res) {
        const { _id } = req.params;

        const { id, foto, estabelecimento, telefone, endereco, cnpj } = req.body
        const list = await Users.updateOne({ _id: _id }, {
            id,
            foto,
            estabelecimento,
            telefone,
            endereco,
            cnpj

        })
        res.json(list)
    }

    async get1(req, res) {
        const list = await Users.find()
        res.json(list)
    }
    async get(req, res) {
        const { estabelecimento } = req.query
        const list = await Users.findOne({ estabelecimento: estabelecimento })
        res.json(list)
    }
  
    async delete(req, res) {
        const { _id } = req.params
        const list = await Users.deleteOne({ _id: _id })

        res.json(list)
    }
}

export default new Userscontroller();