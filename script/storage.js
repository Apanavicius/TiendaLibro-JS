

const readFromStorage = (key) => {
    
    const serializedData = localStorage.getItem(key);
        
    const dataParsed = JSON.parse(serializedData);
    
    return (dataParsed || []);
}   

//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

const writeToStorage = (key, value) => {
    
    localStorage.setItem( key,JSON.stringify(value) )
    
    console.log("Key saved!");
}
//. . . . . . . . . . . . . . . . . . . . . . . . . . . .

