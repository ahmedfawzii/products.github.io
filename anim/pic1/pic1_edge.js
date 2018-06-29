/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pic1',
                            type: 'image',
                            rect: ['0px', '0px', '400px', '500px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pic1.jpg",'0px','0px']
                        },
                        {
                            id: 'price',
                            display: 'none',
                            type: 'image',
                            rect: ['50px', '400px', '300px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"price.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '400px', '500px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${price}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pic1_edgeActions.js");
})("EDGE-161554647");
