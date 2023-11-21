function convert() {
    var input = parseFloat((document.getElementById("input")).value)
    var country = document.getElementById("country").value
    let result;
    switch (country) {
        case 'thai':
            result = (input * 0.4267)
            break;
        case 'aud':
            result = (input * 0.0187)
            break;
        case 'eur':
            result = (input * 0.0112)
            break;
        case 'yen':
            result = (input * 1.8078)
            break;
        case 'mxn':
            result = (input * 0.2102)
            break;
        case 'nz':
            result = (input * 0.0202)
            break;
        case 'sri':
            result = (input * 3.9346)
            break;
        case 'sgd':
            result = (input * 0.0163)
            break;
        default:
            alert("Enter the amount")
            break;
    }
    document.getElementById("result").value = result
}