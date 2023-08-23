function GetRut(req) {
    let s = req.split('=');
    let numero = s[3].split('&');
    s = s[1].split('&');
    let rut = s[0];
    //let serie = numero[0];
    let serial=[rut]

    return serial;
}
function UseRegexRut(input) {
    let regex = /^[0-9]{1,2}(\.|)[0-9]{3}(\.|)[0-9]{3}(-|)[0-9kK]{1}$/;
    return regex.test(input);
}

module.exports={
    GetRut,
    UseRegexRut
}
