let generateId = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = '';
    for ( let i = 0; i < 12; i++) {
        let randomCharIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomCharIndex];
        if (i === 3 || i === 7) id += '-'
    }
    return id
}

export default generateId;