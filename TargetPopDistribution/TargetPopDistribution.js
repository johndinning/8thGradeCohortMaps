bbox=[[-107.02, 25.62], [-93.38, 36.72]];


//create menu
const toggleableLayers = [
    { ids: ['AACohoCircle'], name: ['African American'] },
    { ids: ['HispCohoCircle'], name: ['Hispanic'] },
];


function hideAllLayers() {
    toggleableLayers.forEach(function (layer, i) {
        var link = menu.children[i];
        link.className = '';
        layer.ids.forEach(function (layerId) {
            map.setLayoutProperty(layerId, 'visibility', 'none');
        });
    });
}

function setOnLinkClickHandler(link, layer) {
    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        hideAllLayers();
        this.className = 'active';
        layer.ids.forEach(function (layerId) {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        });
    };
}

function addLayerNav(map) {
    toggleableLayers.forEach(function (layer) {
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = layer.name;

        setOnLinkClickHandler(link, layer);

        menu.appendChild(link);
    });
    document.getElementById("menu").firstChild.className = 'active';
};

  // Store an array of quantiles for the Legend
  var max = 28716;
  var fifth = 28716 / 5;
  var quantiles = [];
  for (i=0; i<5; i++) {
    var quantile = (i + 1) * fifth;
    quantiles.push(quantile);
  }



