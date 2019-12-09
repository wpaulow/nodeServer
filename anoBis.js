checaAno(2012);
function checaAno(ano) {
    var biSex = false;
    if (ano % 4 == 0 && ano % 100 != 0 && ano % 400 == 0) {
        biSex = true;
    }
    return biSex;
}
