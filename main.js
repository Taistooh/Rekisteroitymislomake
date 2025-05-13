const lomake = document.getElementById('lomake')
const kayttaja = document.getElementById('kayttaja');
const salasana = document.getElementById('salasana');
const nimi = document.getElementById('nimi');
const osoite = document.getElementById('osoite');
const maa = document.getElementById('maa');
const postnro = document.getElementById('postnro');
const email = document.getElementById('email');
const sukup = document.querySelector('input[name="sukup"]:checked');
const kieli = document.querySelector('input[name="kieli"]:checked');


lomake.addEventListener('submit', e => {

    e.preventDefault();

    validoiKentat();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const validoiKentat = () => {

    const kayttajaValue = kayttaja.value.trim();
    const salasanaValue = salasana.value.trim();
    const nimiValue = nimi.value.trim();
    const osoiteValue = osoite.value.trim();
    const maaValue = maa.value.trim();
    const postnroValue = postnro.value.trim();
    const emailValue = email.value.trim();
    
    // Käyttäjä ID
    if (kayttajaValue.length < 6) {
        setError(kayttaja, 'Käyttäjätunnuksen tulee olla vähintään 6 merkkiä pitkä.')
    } else {
        setSuccess(kayttaja);
    }

    // Salasana
    const validPW = /^(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!validPW.test(salasanaValue)) {
        setError(salasana, 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää yksi iso kirjain ja yksi erikoismerkki (!@£$€&%).');
    } else {
        setSuccess(salasana);
    }

    // Nimi
    if (nimiValue === '') {
        setError(nimi, 'Nimi ei saa olla tyhjä.');
    } else {
        setSuccess(nimi)
    }

    //Osoite
    if (osoiteValue === '') {
        setError(osoite, 'Osoite ei saa olla tyhjä.');
    } else {
        setSuccess(osoite)
    }

    // Maa
    if (maaValue === '' || maaValue === '(Valitse maa)' ) {
        setError(maa, 'Valitse joku maa.');
    } else {
        setSuccess(maa)
    }

    // Postinumero
    if (!/^\d{5}$/.test(postnroValue)) {
        setError(postnro, 'Postinumeron tulee olla 5 numeroa pitkä.');
    } else {
        setSuccess(postnro)
    }

    // Sähköposti
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!validEmail.test(emailValue)) {
        setError(email, 'Anna kelvollinen sähköpostiosoite.');
    } else {
        setSuccess(email)
    }

    // Sukupuoli
    var sukupValittu = document.querySelector(
        'input[name="sukup"]:checked');
    if (sukupValittu) {
        setSuccess(sukup)
    } else {
        setError(sukup, 'Valitse sukupuoli');
    }

    // Kieli
    if (!kieli) {
        setError(kieli, 'Valitse kieli');
    }
};
