function formatName(name){
    let nameArr = name.split(' ');
    return nameArr[nameArr.length - 1];
}

export default formatName;