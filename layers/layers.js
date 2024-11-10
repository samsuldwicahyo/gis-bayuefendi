var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batasRT_1 = new ol.format.GeoJSON();
var features_batasRT_1 = format_batasRT_1.readFeatures(json_batasRT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasRT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasRT_1.addFeatures(features_batasRT_1);
var lyr_batasRT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasRT_1, 
                style: style_batasRT_1,
                popuplayertitle: "batas RT",
                interactive: true,
    title: 'batas RT<br />\
    <img src="styles/legend/batasRT_1_0.png" /> kuburan karangsuci<br />\
    <img src="styles/legend/batasRT_1_1.png" /> KUBURAN WATUMAS<br />\
    <img src="styles/legend/batasRT_1_2.png" /> MASJID ALHIDAYAH KARANGSUCI<br />\
    <img src="styles/legend/batasRT_1_3.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/batasRT_1_4.png" /> RT 1 RW 4<br />\
    <img src="styles/legend/batasRT_1_5.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/batasRT_1_6.png" /> RT 2 RW 4<br />\
    <img src="styles/legend/batasRT_1_7.png" /> RT 3 RW 3<br />\
    <img src="styles/legend/batasRT_1_8.png" /> RT 3 RW 4<br />\
    <img src="styles/legend/batasRT_1_9.png" /> RT 4 RW 3<br />\
    <img src="styles/legend/batasRT_1_10.png" /> RT 4 RW 4<br />\
    <img src="styles/legend/batasRT_1_11.png" /> RT 5 RW 3<br />\
    <img src="styles/legend/batasRT_1_12.png" /> RT 5 RW 4<br />\
    <img src="styles/legend/batasRT_1_13.png" /> RT 6 RW 3<br />\
    <img src="styles/legend/batasRT_1_14.png" /> RT 6 RW 4<br />\
    <img src="styles/legend/batasRT_1_15.png" /> RT 7 RW 3<br />\
    <img src="styles/legend/batasRT_1_16.png" /> RT 7 RW 4<br />\
    <img src="styles/legend/batasRT_1_17.png" /> RT 8 RW 3<br />\
    <img src="styles/legend/batasRT_1_18.png" /> RT 8 RW 4<br />\
    <img src="styles/legend/batasRT_1_19.png" /> RT 9 RW 3<br />\
    <img src="styles/legend/batasRT_1_20.png" /> RT 9 RW 4<br />\
    <img src="styles/legend/batasRT_1_21.png" /> SAWAH LOR<br />\
    <img src="styles/legend/batasRT_1_22.png" /> SAWAH1<br />\
    <img src="styles/legend/batasRT_1_23.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/batasRT_1_24.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/batasRT_1_25.png" /> RT 3 RW 2<br />\
    <img src="styles/legend/batasRT_1_26.png" /> RT 4 RW 2<br />\
    <img src="styles/legend/batasRT_1_27.png" /> RT 5 RW 2<br />\
    <img src="styles/legend/batasRT_1_28.png" /> RT 6 RW 2<br />\
    <img src="styles/legend/batasRT_1_29.png" /> SAWAH WETAN<br />\
    <img src="styles/legend/batasRT_1_30.png" /> KEBUN<br />\
    <img src="styles/legend/batasRT_1_31.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/batasRT_1_32.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/batasRT_1_33.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/batasRT_1_34.png" /> RT 4 RW 1<br />\
    <img src="styles/legend/batasRT_1_35.png" /> RT 5 RW 1<br />\
    <img src="styles/legend/batasRT_1_36.png" /> RT 6 RW 1<br />\
    <img src="styles/legend/batasRT_1_37.png" /> RT 1 RW 5<br />\
    <img src="styles/legend/batasRT_1_38.png" /> RT 2 RW 5<br />\
    <img src="styles/legend/batasRT_1_39.png" /> RT 3 RW 5<br />\
    <img src="styles/legend/batasRT_1_40.png" /> SDN 1&2 PURWANEGARA<br />\
    <img src="styles/legend/batasRT_1_41.png" /> TOKO PERALATAN (PANGLIMA BESAR)<br />\
    <img src="styles/legend/batasRT_1_42.png" /> PENCUCIAN MOTOR<br />\
    <img src="styles/legend/batasRT_1_43.png" /> SDN 3 PURWANEGARA<br />\
    <img src="styles/legend/batasRT_1_44.png" /> SAWAH NGIDUL<br />\
    <img src="styles/legend/batasRT_1_45.png" /> SAWAH NGALOR<br />\
    <img src="styles/legend/batasRT_1_46.png" /> POM BENSIN<br />\
    <img src="styles/legend/batasRT_1_47.png" /> KANTOR KELURAHAN PURWANEGARA<br />\
    <img src="styles/legend/batasRT_1_48.png" /> SDN 4 PURWANEGARA<br />\
    <img src="styles/legend/batasRT_1_49.png" /> SAWAH 2<br />\
    <img src="styles/legend/batasRT_1_50.png" /> RT 1 RW 6<br />\
    <img src="styles/legend/batasRT_1_51.png" /> RT 2 RW 6<br />\
    <img src="styles/legend/batasRT_1_52.png" /> RT 3 RW 6<br />\
    <img src="styles/legend/batasRT_1_53.png" /> RT 4 RW 6<br />\
    <img src="styles/legend/batasRT_1_54.png" /> RT 5 RW 6<br />\
    <img src="styles/legend/batasRT_1_55.png" /> MASJID <br />\
    <img src="styles/legend/batasRT_1_56.png" /> RT 1 RW 7<br />\
    <img src="styles/legend/batasRT_1_57.png" /> RT 2 RW 7<br />\
    <img src="styles/legend/batasRT_1_58.png" /> RT 3 RW 7<br />\
    <img src="styles/legend/batasRT_1_59.png" /> lapangan magel<br />\
    <img src="styles/legend/batasRT_1_60.png" /> sawah1<br />\
    <img src="styles/legend/batasRT_1_61.png" /> <br />\
    <img src="styles/legend/batasRT_1_62.png" /> MASJID<br />\
    <img src="styles/legend/batasRT_1_63.png" /> KALISARI<br />\
    <img src="styles/legend/batasRT_1_64.png" /> FAKULTAS UIN PURWOKERTO<br />\
    <img src="styles/legend/batasRT_1_65.png" /> SAWAH<br />\
    <img src="styles/legend/batasRT_1_66.png" /> PERUMAHAN PURWO KENCANA 1<br />\
    <img src="styles/legend/batasRT_1_67.png" /> ES DAWET DURIAN<br />\
    <img src="styles/legend/batasRT_1_68.png" /> LP FUTSAL<br />'
        });
var format_BANGUNAN_2 = new ol.format.GeoJSON();
var features_BANGUNAN_2 = format_BANGUNAN_2.readFeatures(json_BANGUNAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_2.addFeatures(features_BANGUNAN_2);
var lyr_BANGUNAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_2, 
                style: style_BANGUNAN_2,
                popuplayertitle: "BANGUNAN",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_2.png" /> BANGUNAN'
            });
var format_purwokertoutara_point_3 = new ol.format.GeoJSON();
var features_purwokertoutara_point_3 = format_purwokertoutara_point_3.readFeatures(json_purwokertoutara_point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_purwokertoutara_point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwokertoutara_point_3.addFeatures(features_purwokertoutara_point_3);
var lyr_purwokertoutara_point_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_purwokertoutara_point_3, 
                style: style_purwokertoutara_point_3,
                popuplayertitle: "purwokertoutara_point",
                interactive: true,
    title: 'purwokertoutara_point<br />\
    <img src="styles/legend/purwokertoutara_point_3_0.png" /> CAFE AMIKOM<br />\
    <img src="styles/legend/purwokertoutara_point_3_1.png" /> DAERAH POMBENSIN<br />\
    <img src="styles/legend/purwokertoutara_point_3_2.png" /> DAERAH RT 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_3.png" /> DAERAH RT 1 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_4.png" /> DAERAH RT 1 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_5.png" /> DAERAH RT 1 RW 4<br />\
    <img src="styles/legend/purwokertoutara_point_3_6.png" /> DAERAH RT 1 RW 5<br />\
    <img src="styles/legend/purwokertoutara_point_3_7.png" /> DAERAH RT 1 RW 6<br />\
    <img src="styles/legend/purwokertoutara_point_3_8.png" /> DAERAH RT 1 RW 7<br />\
    <img src="styles/legend/purwokertoutara_point_3_9.png" /> DAERAH RT 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_10.png" /> DAERAH RT 2 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_11.png" /> DAERAH RT 2 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_12.png" /> DAERAH RT 2 RW 4<br />\
    <img src="styles/legend/purwokertoutara_point_3_13.png" /> DAERAH RT 2 RW 6<br />\
    <img src="styles/legend/purwokertoutara_point_3_14.png" /> DAERAH RT 2 RW 7<br />\
    <img src="styles/legend/purwokertoutara_point_3_15.png" /> DAERAH RT 3<br />\
    <img src="styles/legend/purwokertoutara_point_3_16.png" /> DAERAH RT 3 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_17.png" /> DAERAH RT 3 RW 4<br />\
    <img src="styles/legend/purwokertoutara_point_3_18.png" /> DAERAH RT 3 RW 6<br />\
    <img src="styles/legend/purwokertoutara_point_3_19.png" /> DAERAH RT 3 RW 7<br />\
    <img src="styles/legend/purwokertoutara_point_3_20.png" /> DAERAH RT 4<br />\
    <img src="styles/legend/purwokertoutara_point_3_21.png" /> DAERAH RT 4 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_22.png" /> DAERAH RT 4 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_23.png" /> DAERAH RT 4 RW 4<br />\
    <img src="styles/legend/purwokertoutara_point_3_24.png" /> DAERAH RT 4 RW 6<br />\
    <img src="styles/legend/purwokertoutara_point_3_25.png" /> DAERAH RT 5 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_26.png" /> DAERAH RT 5 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_27.png" /> DAERAH RT 5 RW 6<br />\
    <img src="styles/legend/purwokertoutara_point_3_28.png" /> DAERAH RT 6 RW 2<br />\
    <img src="styles/legend/purwokertoutara_point_3_29.png" /> DAERAH RT 8<br />\
    <img src="styles/legend/purwokertoutara_point_3_30.png" /> DAERAH RT 9<br />\
    <img src="styles/legend/purwokertoutara_point_3_31.png" /> DAERAH RT5<br />\
    <img src="styles/legend/purwokertoutara_point_3_32.png" /> DAERAH RT6<br />\
    <img src="styles/legend/purwokertoutara_point_3_33.png" /> DAERAH RT7<br />\
    <img src="styles/legend/purwokertoutara_point_3_34.png" /> DAERAH SDN 1&2 PURWANEGARA<br />\
    <img src="styles/legend/purwokertoutara_point_3_35.png" /> DAERAH SDN 3 PURWANEGARA<br />\
    <img src="styles/legend/purwokertoutara_point_3_36.png" /> ES DAWET DURIAN<br />\
    <img src="styles/legend/purwokertoutara_point_3_37.png" /> FUTSAL WATUMAS<br />\
    <img src="styles/legend/purwokertoutara_point_3_38.png" /> GEDUNG UTAMA UNIVERSITAS AMIKOM PURWOKERTO<br />\
    <img src="styles/legend/purwokertoutara_point_3_39.png" /> Kantor Kelurahan Purwanegara<br />\
    <img src="styles/legend/purwokertoutara_point_3_40.png" /> Kantor Kelurahan Purwosari<br />\
    <img src="styles/legend/purwokertoutara_point_3_41.png" /> Kantor Kelurahan Sumampir<br />\
    <img src="styles/legend/purwokertoutara_point_3_42.png" /> KLINIK WATUMAS<br />\
    <img src="styles/legend/purwokertoutara_point_3_43.png" /> KUBURAN KARANG SUCI<br />\
    <img src="styles/legend/purwokertoutara_point_3_44.png" /> LAPANGAN MAGEL<br />\
    <img src="styles/legend/purwokertoutara_point_3_45.png" /> LP.FUTSAL<br />\
    <img src="styles/legend/purwokertoutara_point_3_46.png" /> MASJID AL ISLAH<br />\
    <img src="styles/legend/purwokertoutara_point_3_47.png" /> MASJID ALISLAH<br />\
    <img src="styles/legend/purwokertoutara_point_3_48.png" /> MASJID RT 9<br />\
    <img src="styles/legend/purwokertoutara_point_3_49.png" /> MASJID SPN<br />\
    <img src="styles/legend/purwokertoutara_point_3_50.png" /> OKEMART<br />\
    <img src="styles/legend/purwokertoutara_point_3_51.png" /> penyewaan sound<br />\
    <img src="styles/legend/purwokertoutara_point_3_52.png" /> POSYANDU WATUMAS<br />\
    <img src="styles/legend/purwokertoutara_point_3_53.png" /> Purwanegara<br />\
    <img src="styles/legend/purwokertoutara_point_3_54.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_55.png" /> RT 3 RW 7<br />\
    <img src="styles/legend/purwokertoutara_point_3_56.png" /> RT 6 RW 1<br />\
    <img src="styles/legend/purwokertoutara_point_3_57.png" /> rumahbayu<br />\
    <img src="styles/legend/purwokertoutara_point_3_58.png" /> SAWAH<br />\
    <img src="styles/legend/purwokertoutara_point_3_59.png" /> Siklus Food, Beverages & Coffee Brewers<br />\
    <img src="styles/legend/purwokertoutara_point_3_60.png" /> SPN PURWOKERTO<br />\
    <img src="styles/legend/purwokertoutara_point_3_61.png" /> Sumampir<br />\
    <img src="styles/legend/purwokertoutara_point_3_62.png" /> TEMPAT MAKAM WATUMAS<br />\
    <img src="styles/legend/purwokertoutara_point_3_63.png" /> UNIVERSITAS AMIKOM PURWOKERTO<br />\
    <img src="styles/legend/purwokertoutara_point_3_64.png" /> <br />'
        });
var format_purwokertoutara_line_4 = new ol.format.GeoJSON();
var features_purwokertoutara_line_4 = format_purwokertoutara_line_4.readFeatures(json_purwokertoutara_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_purwokertoutara_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwokertoutara_line_4.addFeatures(features_purwokertoutara_line_4);
var lyr_purwokertoutara_line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_purwokertoutara_line_4, 
                style: style_purwokertoutara_line_4,
                popuplayertitle: "purwokertoutara_line",
                interactive: true,
    title: 'purwokertoutara_line<br />\
    <img src="styles/legend/purwokertoutara_line_4_0.png" /> Bobosan<br />\
    <img src="styles/legend/purwokertoutara_line_4_1.png" /> Gang Duku<br />\
    <img src="styles/legend/purwokertoutara_line_4_2.png" /> Gang Jeruk<br />\
    <img src="styles/legend/purwokertoutara_line_4_3.png" /> Gang Kantil<br />\
    <img src="styles/legend/purwokertoutara_line_4_4.png" /> Gang Watumas<br />\
    <img src="styles/legend/purwokertoutara_line_4_5.png" /> Jalan Bobosan<br />\
    <img src="styles/legend/purwokertoutara_line_4_6.png" /> Jalan Brigadir Jenderal Encung<br />\
    <img src="styles/legend/purwokertoutara_line_4_7.png" /> Jalan Cempaka<br />\
    <img src="styles/legend/purwokertoutara_line_4_8.png" /> Jalan Flamboyan<br />\
    <img src="styles/legend/purwokertoutara_line_4_9.png" /> Jalan Gunung Gede<br />\
    <img src="styles/legend/purwokertoutara_line_4_10.png" /> Jalan Jatisari<br />\
    <img src="styles/legend/purwokertoutara_line_4_11.png" /> Jalan Jenderal Ahmad Yani<br />\
    <img src="styles/legend/purwokertoutara_line_4_12.png" /> Jalan Kalisari<br />\
    <img src="styles/legend/purwokertoutara_line_4_13.png" /> Jalan Karang Kobar<br />\
    <img src="styles/legend/purwokertoutara_line_4_14.png" /> Jalan Kenanga<br />\
    <img src="styles/legend/purwokertoutara_line_4_15.png" /> Jalan Kenanga 2<br />\
    <img src="styles/legend/purwokertoutara_line_4_16.png" /> Jalan Kenanga 6<br />\
    <img src="styles/legend/purwokertoutara_line_4_17.png" /> Jalan Kenanga 7<br />\
    <img src="styles/legend/purwokertoutara_line_4_18.png" /> Jalan Kenanga 8<br />\
    <img src="styles/legend/purwokertoutara_line_4_19.png" /> Jalan Kenanga 9<br />\
    <img src="styles/legend/purwokertoutara_line_4_20.png" /> Jalan Kober<br />\
    <img src="styles/legend/purwokertoutara_line_4_21.png" /> Jalan Makam<br />\
    <img src="styles/legend/purwokertoutara_line_4_22.png" /> jalan pol soemarto<br />\
    <img src="styles/legend/purwokertoutara_line_4_23.png" /> Jalan Raya Beji<br />\
    <img src="styles/legend/purwokertoutara_line_4_24.png" /> Jalan Ringin Tirto<br />\
    <img src="styles/legend/purwokertoutara_line_4_25.png" /> Jalan Riyanto<br />\
    <img src="styles/legend/purwokertoutara_line_4_26.png" /> Jalan Serayu<br />\
    <img src="styles/legend/purwokertoutara_line_4_27.png" /> Jalan Serayu 10<br />\
    <img src="styles/legend/purwokertoutara_line_4_28.png" /> Jalan Serayu 11<br />\
    <img src="styles/legend/purwokertoutara_line_4_29.png" /> Jalan Serayu 12<br />\
    <img src="styles/legend/purwokertoutara_line_4_30.png" /> Jalan Serayu 13<br />\
    <img src="styles/legend/purwokertoutara_line_4_31.png" /> Jalan Serayu 14<br />\
    <img src="styles/legend/purwokertoutara_line_4_32.png" /> Jalan Serayu 15<br />\
    <img src="styles/legend/purwokertoutara_line_4_33.png" /> Jalan Serayu 16<br />\
    <img src="styles/legend/purwokertoutara_line_4_34.png" /> Jalan Serayu 17<br />\
    <img src="styles/legend/purwokertoutara_line_4_35.png" /> Jalan Serayu 7<br />\
    <img src="styles/legend/purwokertoutara_line_4_36.png" /> Jalan Serayu 8<br />\
    <img src="styles/legend/purwokertoutara_line_4_37.png" /> Jalan Serayu 9<br />\
    <img src="styles/legend/purwokertoutara_line_4_38.png" /> Jalan Watumas<br />\
    <img src="styles/legend/purwokertoutara_line_4_39.png" /> Jalan Watusari<br />\
    <img src="styles/legend/purwokertoutara_line_4_40.png" /> Jenderal Ahmad Yani<br />\
    <img src="styles/legend/purwokertoutara_line_4_41.png" /> JL.Letnan Jendral Polisi Sumarto<br />\
    <img src="styles/legend/purwokertoutara_line_4_42.png" /> Kali Banjaran<br />\
    <img src="styles/legend/purwokertoutara_line_4_43.png" /> Kamandaka<br />\
    <img src="styles/legend/purwokertoutara_line_4_44.png" /> Kranji<br />\
    <img src="styles/legend/purwokertoutara_line_4_45.png" /> gang kali jurik(buntu)<br />\
    <img src="styles/legend/purwokertoutara_line_4_46.png" /> gang merpati<br />\
    <img src="styles/legend/purwokertoutara_line_4_47.png" /> gang parkit<br />\
    <img src="styles/legend/purwokertoutara_line_4_48.png" /> gang buntu RT 5<br />\
    <img src="styles/legend/purwokertoutara_line_4_49.png" /> gang pisang<br />\
    <img src="styles/legend/purwokertoutara_line_4_50.png" /> gang sawah<br />\
    <img src="styles/legend/purwokertoutara_line_4_51.png" /> jalan RT 9 RW 3<br />\
    <img src="styles/legend/purwokertoutara_line_4_52.png" /> jl.letjend pol soemarto Gg.XIV<br />\
    <img src="styles/legend/purwokertoutara_line_4_53.png" /> GANG TEMBUSAN<br />\
    <img src="styles/legend/purwokertoutara_line_4_54.png" /> JL.POL.SOEMARTO Gg.Anjasmara<br />\
    <img src="styles/legend/purwokertoutara_line_4_55.png" /> Gg.11<br />\
    <img src="styles/legend/purwokertoutara_line_4_56.png" /> jl.pol.sumarto Gg.9<br />\
    <img src="styles/legend/purwokertoutara_line_4_57.png" /> gang buntu<br />\
    <img src="styles/legend/purwokertoutara_line_4_58.png" /> gang semut<br />\
    <img src="styles/legend/purwokertoutara_line_4_59.png" /> Gg.7<br />\
    <img src="styles/legend/purwokertoutara_line_4_60.png" /> Gg.8<br />\
    <img src="styles/legend/purwokertoutara_line_4_61.png" /> Gg.pelopor<br />\
    <img src="styles/legend/purwokertoutara_line_4_62.png" /> Gg.Brimob<br />\
    <img src="styles/legend/purwokertoutara_line_4_63.png" /> Gg.Riska<br />\
    <img src="styles/legend/purwokertoutara_line_4_64.png" /> JL.WATUMAS 2<br />\
    <img src="styles/legend/purwokertoutara_line_4_65.png" /> Gg.Slimet<br />\
    <img src="styles/legend/purwokertoutara_line_4_66.png" /> JL.SD<br />\
    <img src="styles/legend/purwokertoutara_line_4_67.png" /> Gg.Karang Indah 4<br />\
    <img src="styles/legend/purwokertoutara_line_4_68.png" /> Gg.Karangindah 3 Barat<br />\
    <img src="styles/legend/purwokertoutara_line_4_69.png" /> Gg.Karang Indah 2<br />\
    <img src="styles/legend/purwokertoutara_line_4_70.png" /> JL.Karang Indah 1<br />\
    <img src="styles/legend/purwokertoutara_line_4_71.png" /> Jl.Karang Indah 1<br />\
    <img src="styles/legend/purwokertoutara_line_4_72.png" /> Gg.Gn.Selok<br />\
    <img src="styles/legend/purwokertoutara_line_4_73.png" /> Gg.Tidar<br />\
    <img src="styles/legend/purwokertoutara_line_4_74.png" /> JALAN SPN<br />\
    <img src="styles/legend/purwokertoutara_line_4_75.png" /> Gg.Merbabu<br />\
    <img src="styles/legend/purwokertoutara_line_4_76.png" /> Gg.Karang Indah<br />\
    <img src="styles/legend/purwokertoutara_line_4_77.png" /> jl .magel<br />\
    <img src="styles/legend/purwokertoutara_line_4_78.png" /> JL SAWAH<br />\
    <img src="styles/legend/purwokertoutara_line_4_79.png" /> jl magel<br />\
    <img src="styles/legend/purwokertoutara_line_4_80.png" /> JL.SAWAH<br />\
    <img src="styles/legend/purwokertoutara_line_4_81.png" /> JL MAGEL<br />\
    <img src="styles/legend/purwokertoutara_line_4_82.png" /> JL SDN 3<br />\
    <img src="styles/legend/purwokertoutara_line_4_83.png" /> Gg.Merapi<br />\
    <img src="styles/legend/purwokertoutara_line_4_84.png" /> Gg.Pepandayan<br />\
    <img src="styles/legend/purwokertoutara_line_4_85.png" /> Gg.Sindoro<br />\
    <img src="styles/legend/purwokertoutara_line_4_86.png" /> Gg.Malabar<br />\
    <img src="styles/legend/purwokertoutara_line_4_87.png" /> Gg.Tampomas<br />\
    <img src="styles/legend/purwokertoutara_line_4_88.png" /> jl.semut<br />\
    <img src="styles/legend/purwokertoutara_line_4_89.png" /> jl.polisi sumarto<br />\
    <img src="styles/legend/purwokertoutara_line_4_90.png" /> JALAN BUNTU<br />\
    <img src="styles/legend/purwokertoutara_line_4_91.png" /> JL.TROBOSAN <br />\
    <img src="styles/legend/purwokertoutara_line_4_92.png" /> Gg.buntu<br />\
    <img src="styles/legend/purwokertoutara_line_4_93.png" /> Gg.Gn.Guntur<br />\
    <img src="styles/legend/purwokertoutara_line_4_94.png" /> Gg.IV<br />\
    <img src="styles/legend/purwokertoutara_line_4_95.png" /> JALAN WATUMAS<br />\
    <img src="styles/legend/purwokertoutara_line_4_96.png" /> Letnan Jenderal Polisi Sumarto<br />\
    <img src="styles/legend/purwokertoutara_line_4_97.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_batasRT_1.setVisible(true);lyr_BANGUNAN_2.setVisible(true);lyr_purwokertoutara_point_3.setVisible(true);lyr_purwokertoutara_line_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_batasRT_1,lyr_BANGUNAN_2,lyr_purwokertoutara_point_3,lyr_purwokertoutara_line_4];
lyr_batasRT_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_BANGUNAN_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_purwokertoutara_point_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'communicat': 'communicat', 'railway': 'railway', 'network': 'network', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'tower': 'tower', 'amenity': 'amenity', 'name': 'name', 'fuel': 'fuel', 'communic_1': 'communic_1', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'name_en': 'name_en', 'government': 'government', 'isced_leve': 'isced_leve', 'backup_gen': 'backup_gen', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'power': 'power', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'name_fr': 'name_fr', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_purwokertoutara_line_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'name_en': 'name_en', 'aeroway': 'aeroway', 'name_sw': 'name_sw', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'name_fr': 'name_fr', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_batasRT_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_BANGUNAN_2.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_purwokertoutara_point_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'communicat': 'TextEdit', 'railway': 'TextEdit', 'network': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'tower': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'fuel': 'TextEdit', 'communic_1': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'name_en': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'backup_gen': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'power': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'name_fr': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_purwokertoutara_line_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'name_en': 'TextEdit', 'aeroway': 'TextEdit', 'name_sw': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'name_fr': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_batasRT_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_BANGUNAN_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_purwokertoutara_point_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'communicat': 'no label', 'railway': 'no label', 'network': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'tower': 'no label', 'amenity': 'no label', 'name': 'no label', 'fuel': 'no label', 'communic_1': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'name_en': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'backup_gen': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'power': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'name_fr': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_purwokertoutara_line_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'name_en': 'no label', 'aeroway': 'no label', 'name_sw': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'name_fr': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_purwokertoutara_line_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});