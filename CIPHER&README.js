//Key

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// W K P O R A C N B M E Q T V S L I J F D G H U X Z Y

const cipher = str => {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    let codedAlph = [...`wkporacnbmeqtvslijfdghuxzy`]
    let cipher = []
    let strArr = str.toLowerCase().split(``)
    strArr.forEach((element) => {
        for (let i = 0; i < alphabet.length; i++){
            if(element === alphabet[i]){
                cipher.push(codedAlph[i])
            }
        }
    })
    let cipherCode = cipher.join(``)
    return cipherCode
}

const decipher = str => {
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    let codedAlph = [...`wkporacnbmeqtvslijfdghuxzy`]
    let cipher = []
    let strArr = str.toLowerCase().split(``)
    strArr.forEach((element) => {
        for (let i = 0; i < alphabet.length; i++){
            if(element === codedAlph[i]){
                cipher.push(alphabet[i])
            }
        }
    })
    let cipherCode = cipher.join(``)
    return cipherCode
}

console.log(cipher(`Camden`))
console.log(decipher(`pwtorv`))