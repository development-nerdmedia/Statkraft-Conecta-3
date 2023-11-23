AOS.init();


VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio1 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio1",
});

VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio2 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio2",
});

VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio3 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio3",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio4 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio4",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio5 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio5",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio6 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio6",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio7 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio7",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio8 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio8",
});
VanillaTilt.init(document.querySelectorAll('.tarjeta-testimonio.testimonio9 .persona'), {
    max: 15,
    speed: 2000,
    reverse: true,
    "mouse-event-element": ".tarjeta-testimonio.testimonio9",
});


var content3 = document.querySelectorAll(".video1 .videohome");

var tl = gsap.timeline({
    scrollTrigger: {
        /*markers: true,*/
        trigger: 'section.introduccion',
        start: '-80% top',
        end: 'top top',
        scrub: 1,
    },
});

tl.to(content3, { scale: 1, duration: 500, ease: "none" })


function mostratVideo(e) {
    var nameURL = e.target.parentElement.parentElement.querySelector(".urlvieo p").textContent;
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    })
}

function mostratVideo2(e) {
    var nameURL = e.target.querySelector(".urlvieo p").textContent;
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    })
}
var page = 1, recordsperpage = 6, departament = 0, city = 0, district = 0;

document.addEventListener("click", function (e) {

    if (e.target.closest(".miradas .card .person")) {
        mostratVideo(e)
    }
    if (e.target.closest(".main-carousel .carousel-cell .img .play")) {
        mostratVideo(e)
    }
    if (e.target.closest(".testimonios .tarjeta-testimonio")) {
        mostratVideo2(e)
    }

    if (e.target.closest(".btnTest")) {
        document.getElementById('test').classList.add('mostrar');
        document.getElementById('test').classList.remove('ocultar');
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.remove('mostrar');
        document.getElementById('footer-stk').classList.add('ocultar');
        setTimeout(function () {
            document.querySelector(".test .portada .container_test").classList.add('active');
        }, 5);
    }

    if (e.target.closest(".btnReciclaje")) {
        $('html, body').animate({ scrollTop: '0px' }, 0);
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('recycling').classList.add('mostrar');
        document.getElementById('recycling').classList.remove('ocultar');
        llamarDepartamentos();
        llamarPuntos(page, recordsperpage, departament, city, district);
    }
    if (e.target.closest(".button-previous.one")) {
        $('html, body').animate({ scrollTop: '0px' }, 0);
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('recycling').classList.remove('mostrar');
        document.getElementById('recycling').classList.add('ocultar');
    }

    if (e.target.closest(".regresar")) {
        document.getElementById('test').classList.add('ocultar');
        document.getElementById('test').classList.remove('mostrar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.add('mostrar');
        document.getElementById('footer-stk').classList.remove('ocultar');
        setTimeout(function () {
            document.querySelector(".test .portada .container_test").classList.remove('active');
        }, 5);
    }

    if (e.target.closest(".comenzar")) {
        document.getElementById('portada').classList.add('ocultar');
        document.getElementById('portada').classList.remove('mostrar');
        document.getElementById('preguntas').classList.add('mostrar');
        document.getElementById('preguntas').classList.remove('ocultar');
    }
    if (e.target.closest(".guia")) {
        document.getElementById('preguntas').classList.add('ocultar');
        document.getElementById('preguntas').classList.remove('mostrar');
        document.getElementById('portada').classList.remove('ocultar');
        document.getElementById('portada').classList.add('mostrar');
    }
    if (e.target.closest("section.ContentJuego_play a.terminos")) {
        $('html, body').animate({ scrollTop: '0px' }, 0);
    }
    if (e.target.closest(".btn-finish.stop")) {
        e.preventDefault()
    }
    if (e.target.closest(".btn-finish.activo")) {
        e.preventDefault()
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
        setTimeout(function () {
            document.querySelector("#finalizado-contact .container_test").classList.add('active');
        }, 5);
    }
    if (e.target.closest(".ir-inicio")) {
        document.getElementById('gracias').classList.remove('mostrar');
        document.getElementById('gracias').classList.add('ocultar');
        document.getElementById('home').classList.add('mostrar');
        document.getElementById('home').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.add('mostrar');
        document.getElementById('footer-stk').classList.remove('ocultar');
        setTimeout(function () {
            document.querySelector("#finalizado-contact .container_test").classList.remove('active');
        }, 5);
    }
    if (e.target.closest(".recycling__element")) {
        document.getElementById('recycling').classList.remove('mostrar');
        document.getElementById('recycling').classList.add('ocultar');
        document.getElementById('recycling_detail').classList.remove('ocultar');
        document.getElementById('recycling_detail').classList.add('mostrar');
        var ElementId = e.target.querySelector(".id").textContent;
        detallesPunto(ElementId);
    }
    if (e.target.closest("section.ContentJuego_play button")) {
        document.getElementById('home').classList.add('ocultar');
        document.getElementById('home').classList.remove('mostrar');
        document.getElementById('juegoEcoRider').classList.add('mostrar');
        document.getElementById('juegoEcoRider').classList.remove('ocultar');
        document.getElementById('footer-stk').classList.add('ocultar');
        document.getElementById('footer-stk').classList.remove('mostrar');
    }
    if (e.target.closest(".ppages span")) {
        changePages(e);
    }
    if (e.target.closest(".pnext")) {
        changePagesNext(e);
    }
    if (e.target.closest(".pprev")) {
        changePagesPrev(e);
    }
    if (e.target.closest(".button-previous.two")) {
        $('html, body').animate({ scrollTop: '0px' }, 0);
        document.getElementById('recycling').classList.remove('ocultar');
        document.getElementById('recycling').classList.add('mostrar');
        document.getElementById('recycling_detail').classList.add('ocultar');
        document.getElementById('recycling_detail').classList.remove('mostrar');
    }
})

function llamarDepartamentos() {
    const API_URL4 = `https://api.conectaconelfuturo.pe/v1/ubigeo/getbyparentid/0`;
    const xhr4 = new XMLHttpRequest();
    function onRequestHandler4() {
        if (this.readyState === 4 && this.status === 200) {
            const datosdepas = JSON.parse(this.response);
            const namedepas = datosdepas.ubigeos
            var HTMLResponseDep = document.querySelector("#RecyclingFiltersDepartamento");
            HTMLResponseDep.innerHTML = '<option value="0">Departamentos</option>';

            for (let i = 0; i < namedepas.length; i++) {
                var idDepa = namedepas[i].Id;
                var nombreDepa = namedepas[i].Name;
                HTMLResponseDep.innerHTML += `<option value="${idDepa}">${nombreDepa}</option>`;
            }
        }
    }

    xhr4.addEventListener("load", onRequestHandler4);
    xhr4.open("GET", `${API_URL4}`);
    xhr4.send();
}

function changePages(e) {
    page = e.target.textContent;
    llamarPuntos(page, recordsperpage, departament, city, district)
}

function changePagesNext(e) {
    var pagesTotalesund = document.querySelectorAll("#RecylingPagination .ppages span");
    for (let i = 0; i < pagesTotalesund.length; i++) {
        if (pagesTotalesund[i].classList.contains('active')) {
            pagesTotalesund[i + 1].classList.add('active')
            pagesTotalesund[i].classList.remove('active')
            page = pagesTotalesund[i + 1].textContent;
            llamarPuntos(page, recordsperpage, departament, city, district)
            break;
        }
    }
}

function changePagesPrev(e) {
    var pagesTotalesund = document.querySelectorAll("#RecylingPagination .ppages span");
    for (let i = 0; i < pagesTotalesund.length; i++) {
        if (pagesTotalesund[i].classList.contains('active')) {
            pagesTotalesund[i - 1].classList.add('active')
            pagesTotalesund[i].classList.remove('active')
            page = pagesTotalesund[i - 1].textContent;
            llamarPuntos(page, recordsperpage, departament, city, district)
            break;
        }
    }
}

$("#RecyclingFiltersDepartamento").change(function () {
    // console.log($("#RecyclingFiltersDepartamento").val());
    departament = $("#RecyclingFiltersDepartamento").val();
    page = 1;
    city = 0;
    district = 0;
    llamarPuntos(page, recordsperpage, departament, city, district);
    llamarCuidades(departament);
    limpiarDistrito();
})

$("#RecyclingFiltersCiudad").change(function () {
    city = $("#RecyclingFiltersCiudad").val();
    llamarPuntos(page, recordsperpage, departament, city, district);
    llamarDistritos(city);
})

$("#RecyclingFiltersDistrito").change(function () {
    district = $("#RecyclingFiltersDistrito").val();
    llamarPuntos(page, recordsperpage, departament, city, district);
})

function llamarPuntos(page, recordsperpage, departament, city, district) {

    const API_URL = `https://api.conectaconelfuturo.pe/v1/recyclepoints/get/list/${page}/${recordsperpage}/${departament}/${city}/${district}`;

    const xhr = new XMLHttpRequest();
    var resultado = document.querySelector("#RecyclingMessage");
    var HTMLResponse = document.querySelector("#RecyclingResults");
    HTMLResponse.innerHTML = '';
    resultado.innerHTML = 'Cargando...';
    function onRequestHandler() {
        if (this.readyState === 4 && this.status === 200) {
            const datos = JSON.parse(this.response);
            var HTMLResponse = document.querySelector("#RecyclingResults");
            var resultado = document.querySelector("#RecyclingMessage");
            const pagesTotales = document.querySelector("#RecylingPagination .ppages");

            HTMLResponse.innerHTML = '';
            pagesTotales.innerHTML = '';

            var totalPaginas = Math.ceil(datos.total / 6);

            for (let y = 1; y <= totalPaginas; y++) {
                pagesTotales.innerHTML += `<span class="activo">${y}</span>`
            }

            var pagesTotalesund = document.querySelectorAll("#RecylingPagination .ppages span");
            if (pagesTotales.children.length > 0) {
                pagesTotalesund[0].classList.add('active')
                for (let i = 0; i < pagesTotalesund.length; i++) {
                    if (pagesTotalesund[i].textContent === page) {
                        pagesTotalesund[0].classList.remove('active')
                        pagesTotalesund[i].classList.add('active')
                    }
                }

                if (document.querySelector("#RecylingPagination .ppages span.active").textContent != 1) {
                    document.querySelector("#RecylingPagination .pprev").classList.add('active')
                } else {
                    document.querySelector("#RecylingPagination .pprev").classList.remove('active')
                }
            }


            for (let i = 0; i < datos.results.length; i++) {
                var id = datos.results[i].Id;
                var Departamento = datos.results[i].Departamento;
                var PointName = datos.results[i].PointName;
                var Thumbnail = datos.results[i].Thumbnail;

                HTMLResponse.innerHTML += `<button data-aos="fade-up" data-aos-duration="600" data-place="${PointName}" class="recycling__element aos-init aos-animate">
            <div class="id">${id}</div>
            <div class="recycling__element-container">
                <div class="recycling__element-img">
                    <img src="https://conectaconelfuturo.pe/storage/puntos/${Thumbnail}">
                    <div class="tag-stk">${Departamento}</div>
                </div>
                <div class="recycling__element-title">${PointName}</div>
            </div>
            </button>`
            }

            if (HTMLResponse.children.length === 0) {
                resultado.innerHTML = 'No se encontraron resultados.';
            } else {
                resultado.innerHTML = '';
            }
            ocultarPage(pagesTotalesund, page);
        } else {
            resultado.innerHTML = 'OcurriÃ³ algo, intente mÃ¡s tarde.';
        }
    }

    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}`);
    xhr.send();
}

function ocultarPage(pagesTotalesund) {
    if (document.querySelector("#RecylingPagination .ppages").children.length > 0) {
        document.querySelector("#RecylingPagination .pnext").classList.add('active')
        if (page === pagesTotalesund[pagesTotalesund.length - 1].textContent) {
            document.querySelector("#RecylingPagination .pnext").classList.remove('active')
        } else {
            document.querySelector("#RecylingPagination .pnext").classList.add('active')
        }
    } else {
        document.querySelector("#RecylingPagination .pnext").classList.remove('active')
    }
    // if (document.querySelector("#RecylingPagination .ppages").children.length > 1) {
    //     document.querySelector("#RecylingPagination .pnext").classList.remove('active')
    // }
    if (document.querySelector("#RecylingPagination .ppages").children.length === 1) {
        document.querySelector("#RecylingPagination .pnext").classList.remove('active')
    }
    if (document.querySelector("#RecylingPagination .ppages").children.length === 0) {
        document.querySelector("#RecylingPagination .pnext").classList.remove('active')
        document.querySelector("#RecylingPagination .pprev").classList.remove('active')
    }

    var pagesTotalesund = document.querySelectorAll("#RecylingPagination .ppages span");


    if (pagesTotalesund.length === 1) {
        document.querySelector("#RecylingPagination .pnext").classList.remove('active')
    }
}

function llamarCuidades(departament) {


    if ($("#RecyclingFiltersDepartamento").val() === "0") {
        var HTMLResponse2 = document.querySelector("#RecyclingFiltersCiudad");
        HTMLResponse2.innerHTML = `<option value="0">Ciudades</option>`
    } else {
        const API_URL2 = `https://api.conectaconelfuturo.pe/v1/ubigeo/getbyparentid/${departament}`;

        const xhr2 = new XMLHttpRequest();

        function onRequestHandler2() {
            if (this.readyState === 4 && this.status === 200) {
                const datosCuidad = JSON.parse(this.response);

                var HTMLResponse2 = document.querySelector("#RecyclingFiltersCiudad");
                HTMLResponse2.innerHTML = '';
                HTMLResponse2.innerHTML = `<option value="0">Ciudades</option>`
                for (let i = 0; i < datosCuidad.ubigeos.length; i++) {
                    var idCuidad = datosCuidad.ubigeos[i].Id;
                    var nameCuidad = datosCuidad.ubigeos[i].Name;
                    HTMLResponse2.innerHTML += `<option value="${idCuidad}">${nameCuidad}</option>`
                }
            }
        }

        xhr2.addEventListener("load", onRequestHandler2);
        xhr2.open("GET", `${API_URL2}`);
        xhr2.send();
    }
}

function llamarDistritos(city) {
    const API_URL3 = `https://api.conectaconelfuturo.pe/v1/ubigeo/getbyparentid/${city}`;

    const xhr3 = new XMLHttpRequest();

    function onRequestHandler3() {
        if (this.readyState === 4 && this.status === 200) {
            const datosDistrito = JSON.parse(this.response);

            const HTMLResponse3 = document.querySelector("#RecyclingFiltersDistrito");
            HTMLResponse3.innerHTML = '';
            HTMLResponse3.innerHTML = `<option value="0">Distritos</option>`
            for (let i = 0; i < datosDistrito.ubigeos.length; i++) {
                var idDistrito = datosDistrito.ubigeos[i].Id;
                var nameDistrito = datosDistrito.ubigeos[i].Name;
                HTMLResponse3.innerHTML += `<option value="${idDistrito}">${nameDistrito}</option>`
            }
        }
    }

    xhr3.addEventListener("load", onRequestHandler3);
    xhr3.open("GET", `${API_URL3}`);
    xhr3.send();
}

function limpiarDistrito() {
    const HTMLResponse3 = document.querySelector("#RecyclingFiltersDistrito");
    HTMLResponse3.innerHTML = '';
    HTMLResponse3.innerHTML = `<option value="0">Distritos</option>`
}

function detallesPunto(ElementId) {

    const API_URL = `https://api.conectaconelfuturo.pe/v1/recyclepoints/get/list/1/100`;
    const xhr = new XMLHttpRequest();


    function onRequestHandler() {
        if (this.readyState === 4 && this.status === 200) {
            const datos = JSON.parse(this.response);
            var datosElement = datos.results;
            var elemetCall = '';
            var title = document.querySelector("h2.recycling-detail__title");
            var adress = document.querySelector(".recycling-detail__list .rr-direction");
            var telephone = document.querySelector(".recycling-detail__list .rr-phone");
            var hours = document.querySelector(".recycling-detail__list .rr-hour");
            var contenedoreHtml = document.querySelectorAll(".recycling-detail__bins li");

            for (let i = 0; i < datosElement.length; i++) {
                if (datosElement[i].Id === parseInt(ElementId)) {
                    elemetCall = datosElement[i]
                    break;
                }
            }

            var nombre = elemetCall.PointName;
            var direccion = elemetCall.Address;
            var telefono = elemetCall.Telephone;
            var horario = elemetCall.Hours;
            var contenedores = elemetCall.Options;
            var latitud = elemetCall.Latitude;
            var longitud = elemetCall.Longitude

            title.innerHTML = `${nombre}`;
            adress.innerHTML = `${direccion}`;
            telephone.innerHTML = `${telefono}`;
            hours.innerHTML = `${horario}`;

            let coords = [longitud, latitud];
            mostrarMapa(coords, nombre)

            for (let z = 0; z < contenedoreHtml.length; z++) {
                contenedoreHtml[z].classList.add('ghh')
            }

            for (let y = 0; y < contenedores.length; y++) {
                var idContenedor = contenedores[y]
                for (let z = 0; z < contenedoreHtml.length; z++) {
                    var idContenedorHtml = parseInt(contenedoreHtml[z].id)
                    if (idContenedor === idContenedorHtml) {
                        contenedoreHtml[z].classList.remove('ghh')
                    }
                }
            }
        }
    }

    xhr.addEventListener("load", onRequestHandler);
    xhr.open("GET", `${API_URL}`);
    xhr.send();
}

function mostrarMapa(coords, nombre) {
    // var mapa_container = document.querySelector(".recycling-detail__rigth-container");
    // mapa_container.innerHTML = '';
    // mapa_container.innerHTML = '<div id="RecyclingDetailMap" class="recycling-detail__map"></div>';
    // var map = L.map('RecyclingDetailMap').setView(coords, 17);

    mapboxgl.accessToken = 'pk.eyJ1IjoibWp2YWxlbnp1ZWxhIiwiYSI6ImNrb2Fmdm9zZDBpM28ybnFtYTQ2Z2MwMnYifQ.ZY3jTw0-6tjUSOOJXJHsdw'
    var map = new mapboxgl.Map({
        container: 'RecyclingDetailMap',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coords,
        zoom: 16,
        maxZoom: 20,
    });

    const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(coords)
        .setHTML(nombre)
        .addTo(map);
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
    // L.marker(coords).addTo(map).bindPopup(nombre).openPopup();


}

const enlaces = document.querySelectorAll('.pregunta .content-opciones .opcion');
var puntos = 0;

MyApp = {
    initQuiz: {
        init: function () {
            var activeClass = "active-question";
            // const URLactual = window.location;
            // $('.finalizado-gracias a').attr("href", URLactual);
            // $('.finalizado .finalizado-contact a.btnback').attr("href", URLactual);
            jQuery(".preguntas").each(function () {
                var container = jQuery(this);
                var progressBar = container.find(".progress-bar .completed");
                var questions = container.find(".container_test .pregunta");
                var currentIndex = 0;
                var hiddenClass = "js-hidden";
                var btnNext = container.find(".btn-siguiente");
                var btnBack = container.find(".btn-anterior");
                var btnFinish = container.find(".btn-finish");
                var btnoption = container.find(".container_test .pregunta .opcion");

                document.addEventListener("click", function (e) {
                    if (e.target.closest(".btn.comenzar")) {
                        setTimeout(function () {
                            questions.eq(currentIndex).addClass(activeClass);
                        }, 5);
                    }
                })
                progressBar.css({ width: 0 });

                btnoption.on("click", function (e) {
                    btnNext.removeClass('stop');
                })

                btnNext.on("click", function (e) {
                    if (!btnNext.hasClass("stop")) {
                        questions.eq(currentIndex).removeClass(activeClass);
                        currentIndex++;
                        changeQuestion();
                        document.getElementById('mensajeError').classList.remove('activemensaje');
                        if (questions.eq(currentIndex).hasClass("marcado")) {
                            btnNext.removeClass('stop');
                        }
                    } else {
                        document.getElementById('mensajeError').classList.add('activemensaje');
                        setTimeout(function () {
                            document.getElementById('mensajeError').classList.remove('activemensaje');
                        }, 3000);
                    }
                })


                btnBack.on("click", function (e) {
                    questions.eq(currentIndex).removeClass(activeClass);
                    currentIndex--;
                    changeQuestion();
                    btnNext.removeClass('stop');
                    btnBack.css('display', 'block');
                    btnNext.css('display', 'block');
                    btnFinish.css('display', 'none');
                    if (currentIndex === 0) {
                        btnBack.css('display', 'none');
                    }
                })

                function changeQuestion() {
                    questions.eq(currentIndex).addClass(activeClass);
                    questions.eq(currentIndex - 1).addClass("leido");
                    if (currentIndex > 0) {
                        btnBack.css('display', 'block');
                    } else {
                        btnBack.css('display', 'none');
                    }
                    btnNext.addClass('stop');
                    document.getElementById('mensajeError').classList.remove('activemensaje');
                    if (questions.eq(currentIndex).hasClass("leido")) {
                        btnNext.removeClass("stop");
                    }

                    if (currentIndex === (questions.length - 1)) {
                        btnBack.css('display', 'block');
                        btnNext.css('display', 'none');
                        btnFinish.css('display', 'block');
                    }
                }


                questions.each(function (i) {
                    var question = jQuery(this);
                    var radioBtns = question.find("input[type=radio]");
                    question.data("radioBtns", radioBtns);

                    radioBtns.on("change", function () {
                        var radio = jQuery(this);
                        if (!radio.data("changed")) {
                            progressBar.css({
                                width: ((i + 1) / questions.length) * 100 + "%",
                            });
                            radioBtns.data("changed", true);
                            questions.eq(currentIndex).addClass("marcado");
                        }
                        if (i + 1 === questions.length) {
                            btnFinish.removeClass('stop');
                            btnFinish.addClass('activo');
                            btnFinish.attr("onclick", "route()");
                        }
                    })
                })
                btnFinish.on("click", function (e) {
                    if (!btnFinish.hasClass("stop")) {
                        document.getElementById('mensajeError2').classList.remove('activemensaje');
                        questions.eq(currentIndex).removeClass(activeClass);
                        currentIndex = 0
                        questions.eq(currentIndex).addClass(activeClass);
                        btnBack.css('display', 'none');
                        btnNext.css('display', 'block');
                        btnFinish.css('display', 'none');
                        btnNext.addClass('stop');
                        var questions2 = document.querySelectorAll('.container_test .pregunta');
                        for (let i = 0; i < questions2.length; i++) {
                            questions2[i].classList.remove('leido');
                        }
                        var inputSelect = $('input[data-option]:checked');
                        for (let i = 0; i < inputSelect.length; i++) {
                            puntos = parseInt(inputSelect[i].value) + puntos;
                        }
                        if (puntos <= 4) {
                            $('#finalizado').addClass("bajo");
                        }
                        if (puntos >= 5 & puntos <= 7) {
                            $('#finalizado').addClass("medio");
                        }
                        if (puntos >= 8 & puntos <= 10) {
                            $('#finalizado').addClass("alto");
                        }
                    } else {
                        document.getElementById('mensajeError2').classList.add('activemensaje');
                        setTimeout(function () {
                            document.getElementById('mensajeError2').classList.remove('activemensaje');
                        }, 3000);
                    }
                })

            })
        }
    },
    contacto: {
        init: function () {
            var formespacio = document.querySelectorAll('.form-group');
            var formespacioinput = document.querySelectorAll('.form-input');

            function inputcheck() {
                for (let i = 0; i < formespacioinput.length; i++) {
                    if (!formespacioinput[i].value) {
                        formespacioinput[i].parentElement.classList.remove("ok");
                    } else {
                        formespacioinput[i].parentElement.classList.add("ok");
                    }
                }
            }

            var formespacioinput2 = document.querySelectorAll('.form-input');

            $('.form-input').on('change', () => {
                formespacioinput2.forEach(element => {
                    if (!element.value == "") {
                        element.parentElement.classList.add("ok");
                    } else {
                        element.parentElement.classList.remove("ok");
                    }
                });
                if ($('.namefg').hasClass('ok') & $('.correofg').hasClass('ok')) {
                    $(".formulario form .btn a").attr("onclick", "route()");
                }
            });

            document.addEventListener("keydown", function (event) {
                if (event.keyCode == 9) {
                    for (let i = 0; i < formespacioinput.length; i++) {
                        formespacioinput[i].addEventListener('focusin', (event) => {
                            formespacioinput[i].parentElement.classList.add('focusin');
                        });
                        formespacioinput[i].addEventListener('focusout', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
                            formespacioinput[i].parentElement.parentElement.querySelector("span.span-animation").classList.remove("animacion");
                            if (formespacioinput[i].value) {
                                formespacioinput[i].parentElement.parentElement.classList.add('ok');
                            }
                        });
                    }
                }
            })


            function validateInput(e) {
                var inputSelect2 = document.querySelectorAll('input[data-option]');
                for (let i = 0; i < inputSelect2.length; i++) {
                    inputSelect2[i].checked = false;
                }

                var name = document.getElementById('name');
                var email = document.getElementById('email');
                val1 = 0;
                val2 = 0;
                if (!name.value) {
                    name.parentElement.classList.add("error");
                    e.preventDefault();
                } else {
                    name.parentElement.classList.remove("error");
                    val1 = 1;
                }
                if (!email.value) {
                    email.parentElement.classList.add("error");
                    e.preventDefault();
                } else {
                    email.parentElement.classList.remove("error");
                    val2 = 1;
                }
                validate = val1 * val2;
                if (validate == 1) {
                    var nameVal = name.value;
                    var emailVal = email.value;
                    e.preventDefault(e);
                    enviarData(nameVal, emailVal, puntos);
                    document.getElementById('finalizado-contact').classList.remove('mostrar');
                    document.getElementById('finalizado-contact').classList.add('ocultar');
                    document.getElementById('gracias').classList.add('mostrar');
                    document.getElementById('gracias').classList.remove('ocultar');
                    setTimeout(function () {
                        document.querySelector("#gracias .container_test").classList.add('active');
                    }, 5);
                }
            }




            function enviarData(nameVal, emailVal, puntos) {

                let dataobj = { Fullname: nameVal, Email: emailVal, Score: puntos }

                postData('https://api.conectaconelfuturo.pe/v1/quiz/save', dataobj)
                    .then((data) => {
                        console.log(data); // JSON data parsed by `data.json()` call
                    });

            }


            // Example POST method implementation:
            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        // 'Content-Type': 'application/json'
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
            }




            document.addEventListener("click", function (e) {
                if (e.target.closest(".form-input")) {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    });
                    e.target.parentElement.classList.add("focusin");
                } else {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    });
                }
                inputcheck()
                if (e.target.closest("form a")) {
                    validateInput(e)
                }
            })
        }
    }
}

if ($('#preguntas').length > 0) {
    MyApp.initQuiz.init();
}

if ($('#finalizado').length > 0) {
    MyApp.contacto.init();
}


/*********************** nuevo conecta 3************************* */


function isiPad() {
    return /iPad/.test(navigator.userAgent);
}

// Uso
if (isiPad()) {
    document.querySelector("section.testimonios-3").classList.add("ipad")
}


document.body.addEventListener("mousemove", e => {
    gsap.to(".ht-cursor", {
        x: e.clientX,
        y: e.clientY,
        // stagger : 0,
    })
})

$("section.introduccion").hover(function () {
    $(".ht-cursor").addClass("mostrarmouse");
}, function () {
    $(".ht-cursor").removeClass("mostrarmouse");
}
);

$("section.introduccion button").hover(function () {
    $(".ht-cursor").removeClass("mostrarmouse");
}, function () {
    $(".ht-cursor").addClass("mostrarmouse");
}
);

function mostratVideo4(e) {
    var nameURL = e.target.querySelector("span.url").textContent;
    console.log(nameURL);
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>",
    });
}

function mostratVideo3(e) {
    var nameURL = e.target.querySelector(".urlvieo p").textContent;
    Swal.fire({
        showCloseButton: true,
        html:
            '<div class="video1-modal-content">' +
            '<div class="video1-modal-content__mask">' +
            '<div class="video1-modal-content__video-wrapper">' +
            '<div style="padding:56.25% 0 0 0;position:relative;">' +
            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>",
    });
}

document.addEventListener("click", function (e) {
        if (e.target.closest("section.introduccion video")) {
            Swal.fire({
                showCloseButton: true,
                html:
                    '<div class="video1-modal-content">' +
                    '<div class="video1-modal-content__mask">' +
                    '<div class="video1-modal-content__video-wrapper">' +
                    '<div style="padding:56.25% 0 0 0;position:relative;">' +
                    '<iframe src="https://www.youtube.com/embed/o9AG5PskrLU" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>' +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>",
            });
        }

    if (e.target.closest("section.videos_conectados .contentVideos .item")) {
        mostratVideo4(e);
    }
    if (e.target.closest("section.videos_conectados .mySwiperMovil .item")) {
        mostratVideo4(e);
    }
    if (e.target.closest(".testimonios-3 .tarjeta-testimonio")) {
        mostratVideo3(e);
    }
});

MyApp = {
    videosAcordeon: {
        init: function () {
            var swiper = new Swiper(".mySwiper", {
                navigation: {
                    nextEl: ".videos_conectados .swiper-button-next",
                    prevEl: ".videos_conectados .swiper-button-prev",
                },
                cssMode: true,
                spaceBetween: 20,
                pagination: {
                    el: ".videos_conectados .containerSlider .swiper-pagination",
                    clickable: true,
                    //dynamicBullets: true,
                },
            });

            $(".contentVideos .item").hover(function () {
                $(this).closest(".contentVideos").find(".item").removeClass("active");
                $(this).addClass("active");
            });

            var swipermovil = new Swiper(".mySwiperMovil", {
                slidesPerView: 2.3,
                //cssMode: true,
                spaceBetween: 15,
                navigation: {
                    nextEl: ".videos_conectados .swiper-button-next",
                    prevEl: ".videos_conectados .swiper-button-prev",
                },
                /*
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                speed: 300,
                */
                pagination: {
                    el: ".videos_conectados .swiper-pagination",
                    clickable: true,
                    //dynamicBullets: true,
                },
                breakpoints: {
                    426: {
                        slidesPerView: 2.3,
                    },
                    0: {
                        slidesPerView: 1.9,
                    },
                }
            });
        },
    },
    testimonios: {
        init: function () {
            var swiper2 = new Swiper(".mySwiperMiradas", {
                spaceBetween: 50,
                pagination: {
                    el: ".testimonios-3 .swiper-pagination",
                    clickable: true,
                    //dynamicBullets: true,
                },
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
            });

            swiper2.on("slideChange", function () {
                var contentSlider = document.querySelector(".testimonios-3")
                var currentIndex = swiper2.activeIndex;
                var currentSlideContent =
                    swiper2.slides[currentIndex].querySelector("span.title").textContent;
                var slideContentElement = document.querySelector(".testimonios-3 h2");
                slideContentElement.textContent = currentSlideContent;


                function ejecutarCodigoSegunAncho() {
                    if (window.innerWidth <= 445) {
                        if (currentSlideContent == "Testimonios que conectan") {
                            contentSlider.classList.add("menos")
                        } else {
                            contentSlider.classList.remove("menos")
                        }
                    }
                }

                // Ejecutar la función cuando la página se carga y cuando se cambia el tamaño de la ventana
                window.addEventListener("load", ejecutarCodigoSegunAncho);
                window.addEventListener("resize", ejecutarCodigoSegunAncho);
            });

            for (let i = 1; i <= 9; i++) {
                VanillaTilt.init(
                    document.querySelectorAll(
                        `.tarjeta-testimonio.testimonio${i} .persona`
                    ),
                    {
                        max: 15,
                        speed: 2000,
                        reverse: true,
                        "mouse-event-element": `.tarjeta-testimonio.testimonio${i}`,
                    }
                );
            }
        },
    },
    podcast: {
        init: function () {
            $(".temporada").click(function () {
                $(".temporada").removeClass("active");
                $(this).addClass("active");
            });
        },
    },
};

if ($(".testimonios-3").length > 0) {
    MyApp.testimonios.init();
}
if ($(".contentVideos").length > 0) {
    MyApp.videosAcordeon.init();
}
if ($(".podcast").length > 0) {
    MyApp.podcast.init();
}
