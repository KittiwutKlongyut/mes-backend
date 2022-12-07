import express from 'express'

const router = express.Router()

router.get('/api', (req, res) => {
    res.send('Welcome MES router')
})

export {router}