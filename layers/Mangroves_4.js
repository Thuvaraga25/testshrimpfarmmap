var size = 0;
var placement = 'point';

var style_Mangroves_4 = function(feature, resolution){
    return [ new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(34, 139, 34, 0.5)'  // Semi-transparent forest green
        }),
        stroke: new ol.style.Stroke({
            color: '#006400',               // Dark green stroke
            width: 2                        // Thicker for better visibility
        }),
        text: createTextStyle(feature, resolution, "", "10px", "#000000", placement)
    })];
};
