#!usr/bin/env node

const fs = require('fs');
const util = require('util'); //needed for the second and third resolution
const chalk = require('chalk');
const path = require ('path');
//const lstat = util.promisify(fs.lstat); //needed for the second resolution

//Method 3
const { lstat } = fs.promises; 

const targetDir = process.argv[2] || process.cwd(); 

fs.readdir(targetDir, async(err, filenames)=> {
    //Either
    //err === an error object, which means something went wrong
    //OR
    // err ===nul, which means everything is OK
    if(err) {
        //error handling code here
        console.log(err);
        //throw new Error(err)
    }

    //FOR...OF LOOP FOR SOLUTION 2
    // for (let filename of filenames) {
    //     try {
    //         const stats = await lstat(filename); 

    //         console.log(filename, stats.isFile()); 
    //     } catch (err) {
    //         console.log(err)
    //     }
        
    // }
//ONE OPTION OF RESOLVING
//   const allStats = Array(filenames.length).fill(null);

//     for (let filename of filenames){
//         const index = filename.indexOf(filename);
//         fs.lstat(filename, (err,stats) => {
//             if(err){
//                 console.log(err);
//             }

//             allStats[index] = stats;

//             const ready = allStats.every((stats) => {
//                 return stats;
//             });

//             if(ready) {
//                 allStats.forEach((stats, index) => {
//                     console.log(filenames[index], stats.isFile() )
//                 })
//             }
//         })
//     }

//SECOND OPTION OF RESOLVING THE PROBLEM

// const lstat = (filename) => {
//     return new Prommise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if(err){
//                 reject(err); 
//             }

//             resolve(stats);
//         })
//     })
// }

//THIRD SOLUTION

const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename)); 
})

const allStats = await Promise.all(statPromises);

for(let stats of allStats) {
    const index = allStats.indexOf(stats);

    console.log(filenames[index]);
//FOR USING CHALK NPM
    // if(stats.isFile()){
    //     console.log(filenames[index])
    // } else {
    //    console.log(chalk.blue(filenames[index]))
    // }
}
  
});