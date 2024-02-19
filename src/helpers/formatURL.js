function formatURL(url){
    if(typeof(url) !== 'string'){
        return "Error: Provided URL must be a string";
    } else if(url.includes('.') === false){
        return 'Error: Provided URL format incompatible';
    }

    return `http://${url}`
}

export default formatURL;