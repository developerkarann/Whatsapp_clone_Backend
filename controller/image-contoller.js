const grid = require('gridfs-stream')

const mongoose = require('mongoose')

let gfs, gridFsBucket;
const connection = mongoose.connection;
connection.once('open', ()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(connection.db,{
        bucketName: 'fs'
    });
    gfs = grid(connection, mongoose.mongo)
    gfs.collection('fs')
})

const url = 'http://localhost:8000';

const uploadFile = async(req , res)=>{
    if (!req.file) {
        return res.status(404).json('File not found')
    }

    const imageUrl =  `${url}/file/${req.file.filename}`
    return res.status(200).json(imageUrl)
}

const getFile = async(req,res)=>{
    try {
        const file = await gfs.files.findOne({filename: req.params.filename})
        const readStream = gridFsBucket.openDownloadStream(file._id)
        readStream.pipe(res)
    } catch (error) {
        res.status(400).json("Error while calling getFile api", error.message)
        console.log("Error while calling getFile api", error.message)
    }
}


module.exports = {uploadFile,getFile};