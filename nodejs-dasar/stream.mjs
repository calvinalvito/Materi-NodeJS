import fs from 'fs';

const write = fs.createWriteStream('target.log');
write.write('Budi');
write.write('Santoso');
write.close();

const reader = fs.createReadStream('target.log');
reader.addListener('data', function(data){
    console.info(data.toString());
    reader.close();
})