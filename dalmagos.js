        function enviarWhats(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '555496927231';

            const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
            const msgformatada = encodeURIComponent(texto);
            const url = `https://wa.me/${telefone}?text=${msgformatada}`;

            window.open(url, '_blank');
        }

        document.addEventListener("DOMContentLoaded", function () {

            const btnAgenda = document.getElementById("btn-agenda");
            const eventosExtras = document.querySelectorAll(".evento-extra");
            const menuToggle = document.getElementById("menu-toggle");
            const nav = document.getElementById("nav");

            const btnSobre = document.getElementById("btnSobre");
            const textoExtra = document.querySelector(".texto-extra");
            const sobreRestante = document.querySelector(".sobre-restante");
            const pontos = document.querySelector(".pontos");

            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll(".nav li a");

            if (menuToggle) {
                menuToggle.addEventListener("click", () => {
                    nav.classList.toggle("active");
                });
            }

            document.querySelectorAll("#nav a").forEach(link => {
                link.addEventListener("click", () => {
                    nav.classList.remove("active");
                });
            });

            if (btnAgenda) {
                btnAgenda.addEventListener("click", () => {
                    eventosExtras.forEach(evento => {
                        evento.classList.toggle("mostrar");
                    });

                    btnAgenda.textContent =
                        btnAgenda.textContent === "Ver menos eventos"
                            ? "Ver mais eventos"
                            : "Ver menos eventos";
                });
            }

            if (btnSobre) {
                btnSobre.addEventListener("click", () => {

                    const aberto = sobreRestante.style.display === "block";

                    textoExtra.style.display = aberto ? "none" : "inline";
                    sobreRestante.style.display = aberto ? "none" : "block";
                    pontos.style.display = aberto ? "inline" : "none";

                    btnSobre.textContent = aberto ? "Ler mais" : "Ler menos";
                });
            }

            function atualizarMenuAtivo() {

                let current = "";
                const middle = window.innerHeight / 2;

                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();

                    if (rect.top <= middle && rect.bottom >= middle) {
                        current = section.id;
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + current) {
                        link.classList.add("active");
                    }
                });
            }

            window.addEventListener("scroll", atualizarMenuAtivo);
            atualizarMenuAtivo();

        });