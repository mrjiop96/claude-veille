(function () {
  "use strict";
  var DATA = window.VEILLE_DATA || { lastUpdated: "", categories: [], features: [], news: [] };
  var catLabel = {};
  DATA.categories.forEach(function (c) { catLabel[c.id] = c.label; });

  var state = { query: "", category: "all", newOnly: false };

  function daysBetween(a, b) {
    return Math.round((new Date(a) - new Date(b)) / 86400000);
  }
  function isNew(feature) {
    if (!feature.addedOn || !DATA.lastUpdated) return false;
    return Math.abs(daysBetween(DATA.lastUpdated, feature.addedOn)) < 30;
  }
  function matchesQuery(f, q) {
    if (!q) return true;
    var hay = (f.title + " " + f.summary + " " + (f.tags || []).join(" ")).toLowerCase();
    return hay.indexOf(q.toLowerCase()) !== -1;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function renderNews() {
    var ol = document.getElementById("news");
    var q = state.query.toLowerCase();
    var items = DATA.news.filter(function (n) {
      return (state.category === "all" || n.category === state.category) &&
        (!q || (n.title + " " + n.summary).toLowerCase().indexOf(q) !== -1);
    });
    ol.innerHTML = items.length ? items.map(function (n) {
      return '<li><div class="date">' + esc(n.date) + ' · ' + esc(catLabel[n.category] || n.category) +
        '</div><div class="news-title">' + esc(n.title) + '</div><div class="summary">' + esc(n.summary) +
        '</div>' + (n.source ? '<a class="src" href="' + esc(n.source) + '" target="_blank">source ↗</a>' : '') + '</li>';
    }).join("") : '<li class="empty">Aucune nouveauté ne correspond.</li>';
  }

  function renderCards() {
    var grid = document.getElementById("encyclopedia");
    var items = DATA.features.filter(function (f) {
      return (state.category === "all" || f.category === state.category) &&
        (!state.newOnly || isNew(f)) &&
        matchesQuery(f, state.query);
    });
    grid.innerHTML = items.length ? items.map(function (f) {
      return '<article class="card"><div class="cat">' + esc(catLabel[f.category] || f.category) + '</div>' +
        '<div class="title">' + esc(f.title) + (isNew(f) ? ' <span class="badge-new">NOUVEAU</span>' : '') + '</div>' +
        '<div class="summary">' + esc(f.summary) + '</div>' +
        '<div class="tags">' + (f.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join("") + '</div>' +
        (f.source ? '<a class="src" href="' + esc(f.source) + '" target="_blank">source ↗</a>' : '') + '</article>';
    }).join("") : '<div class="empty">Aucune capacité ne correspond.</div>';
  }

  function render() { renderNews(); renderCards(); }

  function renderFilters() {
    var box = document.getElementById("filters");
    var cats = [{ id: "all", label: "Tout" }].concat(DATA.categories);
    box.innerHTML = cats.map(function (c) {
      return '<button data-cat="' + c.id + '"' + (c.id === state.category ? ' class="active"' : '') + '>' + esc(c.label) + '</button>';
    }).join("");
    box.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.category = b.getAttribute("data-cat");
        renderFilters(); render();
      });
    });
  }

  function init() {
    document.getElementById("last-updated").textContent = DATA.lastUpdated || "—";
    renderFilters();
    render();
    document.getElementById("search").addEventListener("input", function (e) {
      state.query = e.target.value; render();
    });
    document.getElementById("toggle-new").addEventListener("change", function (e) {
      state.newOnly = e.target.checked; render();
    });
    window.__veille = { state: state, isNew: isNew }; // hook de test
  }

  document.addEventListener("DOMContentLoaded", init);
})();
