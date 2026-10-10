document.addEventListener('DOMContentLoaded', function () {
        var config = document.getElementById('scholar-config');
        if (!config) return;
        var gsDataUrl = config.getAttribute('data-url');

        function normalizeTitle(title) {
            return (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
        }

        var controller = new AbortController();
        var timeout = setTimeout(function () { controller.abort(); }, 8000);
        fetch(gsDataUrl, { signal: controller.signal })
            .then(function (response) {
                if (!response.ok) throw new Error('Citation request failed');
                return response.json();
            })
            .then(function (data) {
                var totalCitationElement = document.getElementById('total_cit');
                if (totalCitationElement && Number.isFinite(data['citedby'])) {
                    totalCitationElement.textContent = data['citedby'];
                }

                var citationsByTitle = {};
                var publications = data['publications'] || {};
                Object.keys(publications).forEach(function (key) {
                    var pub = publications[key];
                    var title = pub && pub['bib'] && pub['bib']['title'];
                    if (title) {
                        citationsByTitle[normalizeTitle(title)] = pub['num_citations'];
                    }
                });

                Array.prototype.forEach.call(document.getElementsByClassName('show_paper_citations'), function (element) {
                    var numCitations = null;
                    var paperId = element.getAttribute('data');
                    if (paperId && publications[paperId]) {
                        numCitations = publications[paperId]['num_citations'];
                    } else {
                        var card = element.closest('.publication-card') || element.closest('article');
                        var titleElement = card ? card.querySelector('h3') : null;
                        if (titleElement) {
                            numCitations = citationsByTitle[normalizeTitle(titleElement.textContent)];
                        }
                    }
                    if (Number.isFinite(numCitations) && numCitations >= 0) {
                        element.textContent = 'Citations: ' + numCitations;
                        element.classList.add('is-loaded');
                    }
                });
            })
            .catch(function () {
                /* citation stats unavailable; badges stay hidden */
            })
            .finally(function () { clearTimeout(timeout); });
    });
