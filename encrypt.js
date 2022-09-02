//-=-=-=-=-=-//Setup//-=-=-=-=-//
// Run: 'npm install cryptr'
//
//import cryptr
const Cryptr = require('cryptr')
//add a unique key to .env and add .env to .gitignore
const cryptr = new Cryptr('workoutSampleSecretKey');
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//



//-=-=-=-=-//Simple str encryption example//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //sample str
    const simpleSample = 'bacon'
    //sample encryption
    const encryptedString = cryptr.encrypt(simpleSample);
    //sample decryption
    const decryptedString = cryptr.decrypt(encryptedString);
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-/



//-=-=-=-=-//Obj encryption example//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
    //sample normal js object
    let sampleDataObj = {
        "user":"user",
        "password":"hashedPass",
        "userID":"userID123"
    }
    //converted to a json string object
    let sampleJSONDataObj = JSON.stringify(sampleDataObj)

    console.log('sampleJSONObj: ', sampleJSONDataObj)
    const encryptedObj = cryptr.encrypt(sampleJSONDataObj)
    console.log('Encrypted sample obj: ', encryptedObj)
    //decrypted as same json string obj
    const decryptedObj = cryptr.decrypt(encryptedObj)
    //ignore the 'null, 4' part if you want default parse
    const str = JSON.parse(decryptedObj, null, 4); // indented with 4 spaces
    console.log('Decrypted sample obj: ', decryptedObj, str)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//



//-=-=-=-=-=-=-//Encoder/Decoder//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=//
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    function encodeData(data, objBool) {
        if (objBool) { 
            const obj = JSON.stringify(data)
            encryptedData = cryptr.encrypt(obj)
            return encryptedData
        } else {
            encryptedData = cryptr.encrypt(data)
            return encryptedData
        }
    }
    //objBool for if it should parse decoded data, exclude or false if not an obj.
    function decodeData(data, objBool) {
        let decoded = cryptr.decrypt(data)
        if (objBool) {
            let parsed = JSON.parse(decoded)
            return parsed
        } else {
            return decoded
        }
    }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//



//-=-=-=-=-=-=-=-=-=-=-=-=-=-//Test Area//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
const sample1 = 'sample1'
const obj1 = { object1: 'object1' } 

//encrypt both test variables
const encryptedTest1 = encodeData(sample1)
const encryptedTest2 = encodeData(obj1, true)

//log before/after
console.log('sample1: ', sample1, 'obj1: ', obj1, 'sample1Encrypted: ', encryptedTest1, 'obj1Encrypted: ', encryptedTest2)

//decrypt both encrypted tests
const decryptedTest1 = decodeData(encryptedTest1)
const decryptedTest2 = decodeData(encryptedTest2, true)

//log final output
console.log('decrypted test1: ', decryptedTest1)
console.log('decrypted test2: ', decryptedTest2)
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-//
