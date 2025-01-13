#!usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(),(err, filenames)=> {
    //Either
    //err === an error object, which means something went wrong
    //OR
    // err ===nul, which means everything is OK
    if(err) {
        //error handling code here
        console.log(err);
        //throw new Error(err)
    }

    console.log(filenames);
});