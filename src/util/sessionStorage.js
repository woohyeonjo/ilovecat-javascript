function getItem(key) {
    const value = sessionStorage.getItem(key);
    
    return value === null ? [] : JSON.parse(value);
}

function setItem(key, value) {
    const toJson = JSON.stringify(value);

    sessionStorage.setItem(key, toJson);
}

export { getItem, setItem };