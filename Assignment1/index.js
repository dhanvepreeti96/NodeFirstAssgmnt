const fs=require('fs');

function myFileWriter(filename,data)
{
    fs.writeFileSync(filename,data);
}
myFileWriter("NewFile.txt","This is new File");

function myFileReader(filename)
{
   const data = fs.readFileSync(filename,"utf-8");
   console.log(data);
}
myFileReader('NewFile.txt');

function myFileUpdater(filename,data)
{
    fs.appendFileSync(filename,data);
}
myFileUpdater('NewFile.txt',"Now this is additional data");

function myFileDeleter(filename)
{
    fs.unlinkSync(filename);
}
myFileDeleter('NewFile.txt');