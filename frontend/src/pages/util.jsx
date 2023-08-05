function getRut(req) {
    let s = req.split('=');
    let numero = s[3].split('&');
    s = s[1].split('&');
    let rut = s[0];
    let serie = numero[0];
    let serial=[rut]

    return serial;
}

module.exports={
    getRut
}
