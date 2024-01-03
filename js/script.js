const tabHitung = document.querySelectorAll('.left');
const tabContent = document.querySelectorAll('.content');

// Luas Segitiga
function hitungTab() {
    const panjangAlas = parseInt(document.getElementById('inputAlas').value) || 0;
    const tinggiSegitiga = parseInt(document.getElementById('inputTinggi').value) || 0;

    const hasil = 0.5 * panjangAlas * tinggiSegitiga;

    if(hasil == 0){
        resultText.textContent = 'Cek Data inputan Anda!!!';
        resultValue.textContent = 'Tidak Diketahui';
    }else{
        resultText.textContent = 'L = 1/2 x ' + panjangAlas + ' x ' + tinggiSegitiga;
        resultValue.textContent = hasil;
    }
    
    removeTab();
    document.getElementById('tab-2-content').classList.add('show');
    document.getElementById('tab-4-content').classList.add('show');
}

function resetTab() {
    removeTab();
    document.getElementById('tab-1-content').classList.add('show');
    document.getElementById('tab-3-content').classList.add('show');
    //Setting Value Input to 0
    document.getElementById('inputAlas').value = '';
    document.getElementById('inputTinggi').value = '';
}

// Keliling Segitiga
function hitungKeliling(){
    const sisiA = parseInt(document.getElementById('sisiA').value) || 0;
    const sisiB = parseInt(document.getElementById('sisiB').value) || 0;
    const sisiC = parseInt(document.getElementById('sisiC').value) || 0;

    const hasilK = sisiA + sisiB + sisiC;

    if(hasilK == 0){
        resultTextK.textContent = 'Cek Data inputan Anda!!!';
        resultValueK.textContent = 'Tidak Diketahui';
    }else{
        resultTextK.textContent = 'K = ' + sisiA + ' + ' + sisiB + ' + ' + sisiC;
        resultValueK.textContent = hasilK;
    }

    removeTab();
    document.getElementById('tab-2-content').classList.add('show');
    document.getElementById('tab-4-content').classList.add('show');
}

function resetTabK() {
    removeTab();
    document.getElementById('tab-1-content').classList.add('show');
    document.getElementById('tab-3-content').classList.add('show');
    //Setting Value Input to 0
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
}

function removeTab() {
    tabHitung.forEach(item => item.classList.remove('show'));
}

function selectContent(e){
    removeContent();
    // console.log(e);
    const tabContent = document.querySelector('#' + e );
    tabContent.classList.add('tampil');
    resetTab();
    resetTabK();
}

function removeContent() {
    tabContent.forEach(item => item.classList.remove('tampil'));
}