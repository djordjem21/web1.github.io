$(document).ready(function() {
    // Plugin modal za informacije o autoru
    $("#autorModal").animatedModal({
        color:'#009688'
    });

    // Slajder na vrhu stranice
    var index = 0;
    slajder();

    function slajder() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        index++;
        if (index > x.length) {
            index = 1
        }
        x[index-1].style.display = "block";
        setTimeout(slajder, 2000);
    }

    // Funkcija za linkove iz navigacije
    function navigacija() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else { 
            x.className = x.className.replace(" w3-show", "");
        }
    }

    // Zatvaranje modala za kupovinu karata
    var modal = document.getElementById('karteModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('#kontakt-forma').on('submit', function(e) {
        e.preventDefault();

        var regImePrezime = /^[A-Z][a-z]{2,19}(\s[A-Z][a-z]{2,19})+$/;
        var regEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;

        var imePrezime = $('#imePrezime').val();
        var email = $('#email').val();
        var poruka = $('#poruka').val();

        var nizGreske = [];

        if(!regImePrezime.test(imePrezime)) {
            nizGreske.push('Ime i prezime nisu u dobrom formatu');
        }
        if(!regEmail.test(email)) {
            nizGreske.push('Email nije u dobrom formatu');
        }
        if(poruka == "") {
            nizGreske.push('Poruka mora biti uneta');
        }

        if(nizGreske.length > 0) {
            var lista = '<ul>';
            for(var i = 0; i < nizGreske.length; i++) {
                lista += '<li>' + nizGreske[i] + '</li>';
            }
            lista += '</ul>';
            $('#ispis').html(lista);
        } else {
            $('#ispis').html('Poruka je poslata.  Hvala!');
        }
    });

    $('#kupiDugme').on('click', function() {
        var regKarteBroj = /^[1-9][0-9]{0,2}$/;
        var regEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})+$/;

        var karteBroj = parseInt($('#karteBroj').val());
        var karteEmail = $('#karteEmail').val();

        var nizGreske = [];
        if(!regKarteBroj.test(karteBroj)) {
            nizGreske.push('Broj karata nije validan broj.');
        }
        if(!regEmail.test(karteEmail)) {
            nizGreske.push('Email nije validan.');
        }

        if(nizGreske.length > 0) {
            var lista = '<ul>';
            for(var i = 0; i < nizGreske.length; i++) {
                lista += '<li>' + nizGreske[i] + '</li>';
            }
            lista += '</ul>';
            $('#karteIspis').html(lista);
        } else {
            $('#karteIspis').html('Ukupna cena: ' + (1000 * karteBroj) + ' dinara. Karte poslate na email: ' + karteEmail);
        }
    });

    $('.prikazi-vise').on('click', function() {
        $('.skriveni-tekst').addClass('vidljiv')
        $('.prikazi-vise').css('display', 'none');
    });
})