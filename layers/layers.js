var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Puttalam_DSD_Boundary_1 = new ol.format.GeoJSON();
var features_Puttalam_DSD_Boundary_1 = format_Puttalam_DSD_Boundary_1.readFeatures(json_Puttalam_DSD_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puttalam_DSD_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puttalam_DSD_Boundary_1.addFeatures(features_Puttalam_DSD_Boundary_1);
var lyr_Puttalam_DSD_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puttalam_DSD_Boundary_1, 
                style: style_Puttalam_DSD_Boundary_1,
                popuplayertitle: 'Puttalam_DSD_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Puttalam_DSD_Boundary_1.png" /> Puttalam_DSD_Boundary'
            });
var format_Mannar_DSD_Boundary_2 = new ol.format.GeoJSON();
var features_Mannar_DSD_Boundary_2 = format_Mannar_DSD_Boundary_2.readFeatures(json_Mannar_DSD_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mannar_DSD_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mannar_DSD_Boundary_2.addFeatures(features_Mannar_DSD_Boundary_2);
var lyr_Mannar_DSD_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mannar_DSD_Boundary_2, 
                style: style_Mannar_DSD_Boundary_2,
                popuplayertitle: 'Mannar_DSD_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Mannar_DSD_Boundary_2.png" /> Mannar_DSD_Boundary'
            });
var format_WilpaththuForest_3 = new ol.format.GeoJSON();
var features_WilpaththuForest_3 = format_WilpaththuForest_3.readFeatures(json_WilpaththuForest_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilpaththuForest_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilpaththuForest_3.addFeatures(features_WilpaththuForest_3);
var lyr_WilpaththuForest_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilpaththuForest_3, 
                style: style_WilpaththuForest_3,
                popuplayertitle: 'Wilpaththu Forest',
                interactive: false,
                title: '<img src="styles/legend/WilpaththuForest_3.png" /> Wilpaththu Forest'
            });
var format_Mangroves_4 = new ol.format.GeoJSON();
var features_Mangroves_4 = format_Mangroves_4.readFeatures(json_Mangroves_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangroves_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves_4.addFeatures(features_Mangroves_4);
var lyr_Mangroves_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangroves_4, 
                style: style_Mangroves_4,
                popuplayertitle: 'Mangroves',
                interactive: false,
                title: '<img src="styles/legend/Mangroves_4.png" /> Mangroves'
            });
var format_Shrimpfarming_5 = new ol.format.GeoJSON();
var features_Shrimpfarming_5 = format_Shrimpfarming_5.readFeatures(json_Shrimpfarming_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shrimpfarming_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shrimpfarming_5.addFeatures(features_Shrimpfarming_5);
var lyr_Shrimpfarming_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shrimpfarming_5, 
                style: style_Shrimpfarming_5,
                popuplayertitle: 'Shrimp farming',
                interactive: true,
    title: 'Shrimp farming<br />\
    <img src="styles/legend/Shrimpfarming_5_0.png" /> High Risk<br />\
    <img src="styles/legend/Shrimpfarming_5_1.png" /> Low<br />\
    <img src="styles/legend/Shrimpfarming_5_2.png" /> Moderate<br />' });
var format_Shrimp_Farming_6 = new ol.format.GeoJSON();
var features_Shrimp_Farming_6 = format_Shrimp_Farming_6.readFeatures(json_Shrimp_Farming_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shrimp_Farming_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shrimp_Farming_6.addFeatures(features_Shrimp_Farming_6);
var lyr_Shrimp_Farming_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shrimp_Farming_6, 
                style: style_Shrimp_Farming_6,
                popuplayertitle: 'Shrimp_Farming',
                interactive: true,
    title: 'Shrimp_Farming<br />\
    <img src="styles/legend/Shrimp_Farming_6_0.png" /> High<br />\
    <img src="styles/legend/Shrimp_Farming_6_1.png" /> Low<br />\
    <img src="styles/legend/Shrimp_Farming_6_2.png" /> Moderate<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Puttalam_DSD_Boundary_1.setVisible(true);lyr_Mannar_DSD_Boundary_2.setVisible(true);lyr_WilpaththuForest_3.setVisible(true);lyr_Mangroves_4.setVisible(true);lyr_Shrimpfarming_5.setVisible(true);lyr_Shrimp_Farming_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Puttalam_DSD_Boundary_1,lyr_Mannar_DSD_Boundary_2,lyr_WilpaththuForest_3,lyr_Mangroves_4,lyr_Shrimpfarming_5,lyr_Shrimp_Farming_6];
lyr_Puttalam_DSD_Boundary_1.set('fieldAliases', {'fid_1': 'fid_1', 'fid_12': 'fid_12', 'DSD_N': 'DSD_N', 'District': 'District', });
lyr_Mannar_DSD_Boundary_2.set('fieldAliases', {'fid_1': 'fid_1', 'fid_12': 'fid_12', 'DSD_N': 'DSD_N', 'District': 'District', });
lyr_WilpaththuForest_3.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'SUPP_INFO': 'SUPP_INFO', 'CONS_OBJ': 'CONS_OBJ', });
lyr_Mangroves_4.set('fieldAliases', {'PXLVAL': 'PXLVAL', });
lyr_Shrimpfarming_5.set('fieldAliases', {'Name': 'Name', 'District': 'District', 'Risk Level': 'Risk Level', 'Distance': 'Distance', });
lyr_Shrimp_Farming_6.set('fieldAliases', {'id': 'id', 'District': 'District', 'Risk_Level': 'Risk_Level', });
lyr_Puttalam_DSD_Boundary_1.set('fieldImages', {'fid_1': 'TextEdit', 'fid_12': 'TextEdit', 'DSD_N': 'TextEdit', 'District': '', });
lyr_Mannar_DSD_Boundary_2.set('fieldImages', {'fid_1': 'TextEdit', 'fid_12': 'TextEdit', 'DSD_N': 'TextEdit', 'District': 'TextEdit', });
lyr_WilpaththuForest_3.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'Range', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'Range', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'SUPP_INFO': 'TextEdit', 'CONS_OBJ': 'TextEdit', });
lyr_Mangroves_4.set('fieldImages', {'PXLVAL': 'Range', });
lyr_Shrimpfarming_5.set('fieldImages', {'Name': 'TextEdit', 'District': 'TextEdit', 'Risk Level': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Shrimp_Farming_6.set('fieldImages', {'id': 'TextEdit', 'District': 'TextEdit', 'Risk_Level': 'TextEdit', });
lyr_Puttalam_DSD_Boundary_1.set('fieldLabels', {'fid_1': 'hidden field', 'fid_12': 'hidden field', 'DSD_N': 'inline label - always visible', 'District': 'inline label - always visible', });
lyr_Mannar_DSD_Boundary_2.set('fieldLabels', {'fid_1': 'hidden field', 'fid_12': 'hidden field', 'DSD_N': 'inline label - always visible', 'District': 'inline label - always visible', });
lyr_WilpaththuForest_3.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'SUPP_INFO': 'no label', 'CONS_OBJ': 'no label', });
lyr_Mangroves_4.set('fieldLabels', {'PXLVAL': 'hidden field', });
lyr_Shrimpfarming_5.set('fieldLabels', {'Name': 'hidden field', 'District': 'inline label - always visible', 'Risk Level': 'inline label - always visible', 'Distance': 'hidden field', });
lyr_Shrimp_Farming_6.set('fieldLabels', {'id': 'hidden field', 'District': 'inline label - always visible', 'Risk_Level': 'inline label - always visible', });
lyr_Shrimp_Farming_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});