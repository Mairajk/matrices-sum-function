
function start() {
    
    let nOr = +document.querySelector(`#numOfRows`).value ;
    let nOc = +document.querySelector(`#numOfCols`).value ;
    
    // nOr.innerHTML = "" ;
    // nOc.innerHTML = "" ;
    let mat1 = document.querySelector(`#mat1`) ;
    let mat2 = document.querySelector(`#mat2`) ;
    let mResult = document.querySelector(`#result`) ;

    for (let i = 0 ; i < nOr ; i++) {
        for (let j = 0 ; j < nOc ; j++) {
            mat1.innerHTML = `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0" >` ;
            mat2.innerHTML = `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0" >` ;
            mResult.innerHTML = `<input type="number" disabled required min="0" max="100" id="mResult-${i}-${j}" value="0">`;
        }
        mat1.innerHTML = `<br>` ;
        mat2.innerHTML = `<br>` ;
        mResult.innerHTML = `<br` ;
        
    }
}