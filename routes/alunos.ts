import { Router } from 'express'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const router = Router()

router.get('/', async (req, res) => {
    const alunos = await prisma.alunos.findMany({
        orderBy: { id: "desc"}
    })
    res.status(200).json(alunos)

})

router.post('/', async (req, res) => {
    
    const { nome, email } = req.body

    const aluno = await prisma.alunos.create({
        data: { nome, email}
    })
    res.status(201).json(aluno)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { nome, email } = req.body

    const aluno = await prisma.alunos.update({
        where: {id: Number(id)},
        data: { nome, email }
    })
    res.status(200).json(aluno)


})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const aluno = await prisma.alunos.delete({
        where: {id: Number(id) }
    })
    res.status(204).json()
})

export default router