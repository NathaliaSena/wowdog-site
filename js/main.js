// Gera o link do WhatsApp com a mensagem já preenchida
function waLink(msg) {
  return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
}

// Todos os botões com a classe .js-wa abrem o WhatsApp
document.querySelectorAll(".js-wa").forEach(function (el) {
  el.href = waLink(el.getAttribute("data-msg") || "Olá!");
  el.target = "_blank";
  el.rel = "noopener";
});

// Formulário de orçamento: monta a mensagem e abre o WhatsApp
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("petName").value.trim();
  var size = document.getElementById("petSize").value;
  var svc = document.getElementById("petService").value;

  var msg =
    "Olá! Vim pelo site e quero um orçamento.\n" +
    (name ? "Pet: " + name + "\n" : "") +
    "Porte: " + size + "\n" +
    "Serviço: " + svc;

  window.open(waLink(msg), "_blank", "noopener");
});

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Carrossel do Instagram
(function () {
  var track = document.getElementById("carTrack");
  INSTAGRAM_POSTS.forEach(function (p) {
    var a = document.createElement("a");
    a.href = p.link || INSTAGRAM_URL;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = '<img loading="lazy" src="' + p.img + '" alt="' + (p.alt || "Foto do Instagram do WowDog") + '">';
    track.appendChild(a);
  });
  function step() { return track.firstElementChild.getBoundingClientRect().width + 18; }
  document.getElementById("carNext").onclick = function () {
    var end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    track.scrollTo({ left: end ? 0 : track.scrollLeft + step() });
  };
  document.getElementById("carPrev").onclick = function () {
    track.scrollTo({ left: track.scrollLeft - step() });
  };
})();
