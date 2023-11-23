const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    404: "",
    "/": "#home",
    "#test-sostenible": "#test-sostenible",
    "#testresultado": "#testresultado",
    "#testresultadodatosenviados": "#testresultadodatosenviados",
    "#EcoRiderGame": "#EcoRiderGame",
    /*"#EcoRiderGame-terminos-y-condiciones": "#EcoRiderGame-terminos-y-condiciones",*/
}

const handleLocation = async () => {
    const path = window.location.hash;
    const route = routes[path] || routes[404];
    console.log(route);
    if (route === "#test-sostenible") {
        document.getElementById('test').classList.add('mostrar');
        document.getElementById('test').classList.remove('ocultar');
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('portada').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.add('ocultar');
        document.getElementById('finalizado').classList.remove('mostrar');
        document.getElementById('finalizado').classList.add('ocultar');
        document.getElementById('body').classList.remove('scrollHidden');
        setTimeout(function () {
            document.querySelector(".test .portada .container_test").classList.add('active');
        }, 5);
    }
    if (route === "") {
        document.getElementById('test').classList.remove('mostrar');
        document.getElementById('test').classList.add('ocultar');
        /*
        document.getElementById('terminos').classList.remove('mostrar');
        document.getElementById('terminos').classList.add('ocultar');
        */
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('footer-stk').classList.add('mostrar');
        document.getElementById('footer-stk').classList.remove('ocultar');
        document.getElementById('juegoEcoRider').classList.remove('mostrar');
        document.getElementById('juegoEcoRider').classList.add('ocultar');
        /*
        document.getElementById('terminos').classList.remove('mostrar');
        document.getElementById('terminos').classList.add('ocultar');
        */
        document.getElementById('body').classList.remove('scrollHidden');
        setTimeout(function () {
            document.querySelector(".test .portada .container_test").classList.remove('active');
        }, 5);
    }

    if (route === "#testresultado") {
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('preguntas').classList.add('ocultar');
        document.getElementById('preguntas').classList.remove('mostrar');
        document.getElementById('portada').classList.remove('ocultar');
        document.getElementById('portada').classList.add('mostrar');
        document.getElementById('test').classList.add('ocultar');
        document.getElementById('test').classList.remove('mostrar');
        document.getElementById('finalizado').classList.add('mostrar');
        document.getElementById('finalizado').classList.remove('ocultar');
        document.getElementById('finalizado-contact').classList.add('mostrar');
        document.getElementById('finalizado-contact').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.add('ocultar');
        document.getElementById('body').classList.remove('scrollHidden');
        setTimeout(function () {
            document.querySelector("#finalizado-contact .container_test").classList.add('active');
        }, 5);
    }
    if (route === "#testresultadodatosenviados") {
        document.getElementById('finalizado').classList.add('mostrar');
        document.getElementById('finalizado').classList.remove('ocultar');
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('finalizado-contact').classList.remove('mostrar');
        document.getElementById('finalizado-contact').classList.add('ocultar');
        document.getElementById('gracias').classList.add('mostrar');
        document.getElementById('gracias').classList.remove('ocultar');
        document.getElementById('body').classList.remove('scrollHidden');
        setTimeout(function () {
            document.querySelector("#gracias .container_test").classList.add('active');
        }, 5);
    }
    if (route === "#EcoRiderGame") {
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('juegoEcoRider').classList.add('mostrar');
        document.getElementById('juegoEcoRider').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.add('ocultar');
        document.getElementById('body').classList.add('scrollHidden');
    }
    /*
    if (route === "#EcoRiderGame-terminos-y-condiciones") {
        document.getElementById('terminos').classList.add('mostrar');
        document.getElementById('terminos').classList.remove('ocultar');
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('body').classList.remove('scrollHidden');
    }
    */
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();