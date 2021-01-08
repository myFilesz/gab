const multer = require('multer');
const path = require('path');
const crypto = require('crypto')
module.exports ={
    dest: path.resolve(__dirname, '..', 'uploads', 'images'),
    storage: multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null, path.resolve(__dirname, '..', 'uploads', 'images'))
        },

        filename: (req,file,cb)=>{
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err)

                const fileName = file.originalname;
                
                cb(null, fileName);
            })

        }
    }),

    limits:{
        fileSize: 2 * 1024 * 1024
    },

    fileFilter: (req,file,cb)=>{
        const allowedMimes=[
            'image/png',
            'image/jpg',
            'image/pjpeg',
            'image/jpeg',
        ]

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error('invalid file type.'))
        }
    }
}