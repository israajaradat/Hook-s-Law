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
            "Javascript/jquery.js",
            js+"jquery-ui.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'symWeight1',
                            symbolName: 'symWeight1',
                            type: 'rect',
                            rect: ['63.1%', '80.3%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.49296','0.52083']]
                        },
                        {
                            id: 'symWeight2',
                            symbolName: 'symWeight2',
                            type: 'rect',
                            rect: ['63.1%', '78%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.48951','0.53191']]
                        },
                        {
                            id: 'symWeight3',
                            symbolName: 'symWeight3',
                            type: 'rect',
                            rect: ['63.1%', '75.6%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.48951','0.53191']]
                        },
                        {
                            id: 'symWeight4',
                            symbolName: 'symWeight4',
                            type: 'rect',
                            rect: ['63.1%', '73.1%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.48951','0.52083']]
                        },
                        {
                            id: 'symWeight5',
                            symbolName: 'symWeight5',
                            type: 'rect',
                            rect: ['63.1%', '70.7%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.48951','0.52083']]
                        },
                        {
                            id: 'symSpring',
                            symbolName: 'symSpring',
                            type: 'rect',
                            rect: ['45.9%', '8.7%', '94px', '170px', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.86874','0.97585']]
                        },
                        {
                            id: 'symRuler',
                            symbolName: 'symRuler',
                            type: 'rect',
                            rect: ['39.2%', '31.8%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.92','0.89052']]
                        },
                        {
                            id: 'symTable',
                            symbolName: 'symTable',
                            type: 'rect',
                            rect: ['15.4%', '82.7%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.90256','0.79077']]
                        },
                        {
                            id: 'symReset',
                            symbolName: 'symReset',
                            type: 'rect',
                            rect: ['64.3%', '86.3%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.49253','0.54412']]
                        },
                        {
                            id: 'symCeiling',
                            symbolName: 'symCeiling',
                            type: 'rect',
                            rect: ['35.5%', '-1.5%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.66972','0.70094']]
                        },
                        {
                            id: 'holder2',
                            type: 'image',
                            rect: ['49.2%', '9.1%', '20px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"holder2.png",'0px','0px']
                        },
                        {
                            id: 'symSnap',
                            symbolName: 'symSnap',
                            type: 'rect',
                            rect: ['44.8%', '40.4%', '139', '156', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'symHolderArrow',
                            symbolName: 'symHolderArrow',
                            type: 'rect',
                            rect: ['41.1%', '22.6%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.57068','0.57208']]
                        },
                        {
                            id: 'symResult5',
                            symbolName: 'symResult5',
                            type: 'rect',
                            rect: ['74.3%', '-4.6%', '245', '499', 'auto', 'auto'],
                            transform: [[],[],[],['0.89841','0.74535']]
                        },
                        {
                            id: 'symResult4',
                            symbolName: 'symResult4',
                            type: 'rect',
                            rect: ['74.3%', '-4.2%', '245', '464', 'auto', 'auto'],
                            transform: [[],[],[],['0.89783','0.72013']]
                        },
                        {
                            id: 'symResult3',
                            symbolName: 'symResult3',
                            type: 'rect',
                            rect: ['75.4%', '-1.5%', '221', '407', 'auto', 'auto'],
                            transform: [[],[],[],['0.99094','0.76413']]
                        },
                        {
                            id: 'symResult2',
                            symbolName: 'symResult2',
                            type: 'rect',
                            rect: ['75.4%', '-0.3%', '221', '331', 'auto', 'auto'],
                            transform: [[],[],[],['0.99548','0.74321']]
                        },
                        {
                            id: 'symResult1',
                            symbolName: 'symResult1',
                            type: 'rect',
                            rect: ['75.3%', '-0.6%', '223', '346', 'auto', 'auto'],
                            transform: [[],[],[],['0.98655','0.75149']]
                        },
                        {
                            id: 'symResult',
                            symbolName: 'symResult',
                            type: 'rect',
                            rect: ['74.4%', '-1.9%', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.89796','0.68518']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1123px', '614px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 30,
                    autoPlay: false,
                    data: [
                        [
                            "eid471",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symResult2}",
                            '0.74321',
                            '0.74321'
                        ],
                        [
                            "eid466",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symResult5}",
                            '0.89841',
                            '0.89841'
                        ],
                        [
                            "eid38",
                            "left",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '46.32%',
                            '46.32%'
                        ],
                        [
                            "eid532",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symSpring}",
                            '46.32%',
                            '45.92%'
                        ],
                        [
                            "eid475",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symResult2}",
                            '-0.33%',
                            '-0.33%'
                        ],
                        [
                            "eid487",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symResult4}",
                            '-4.23%',
                            '-4.23%'
                        ],
                        [
                            "eid464",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symResult5}",
                            '74.32%',
                            '74.32%'
                        ],
                        [
                            "eid468",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symResult4}",
                            '74.31%',
                            '74.31%'
                        ],
                        [
                            "eid409",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symResult1}",
                            '75.29%',
                            '75.29%'
                        ],
                        [
                            "eid367",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symResult2}",
                            '0.99548',
                            '0.99548'
                        ],
                        [
                            "eid407",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symResult1}",
                            '0.75149',
                            '0.75149'
                        ],
                        [
                            "eid452",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symResult4}",
                            '0.72013',
                            '0.72013'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '8.63%',
                            '8.63%'
                        ],
                        [
                            "eid531",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symSpring}",
                            '8.63%',
                            '8.73%'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '0.97585',
                            '0.97585'
                        ],
                        [
                            "eid485",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symResult3}",
                            '-1.47%',
                            '-1.47%'
                        ],
                        [
                            "eid467",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symResult4}",
                            '0.89783',
                            '0.89783'
                        ],
                        [
                            "eid305",
                            "opacity",
                            0,
                            30,
                            "linear",
                            "${symSnap}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid30",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '0.86874',
                            '0.86874'
                        ],
                        [
                            "eid481",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symResult1}",
                            '-0.65%',
                            '-0.65%'
                        ],
                        [
                            "eid462",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symResult5}",
                            '0.74535',
                            '0.74535'
                        ],
                        [
                            "eid470",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symResult3}",
                            '75.43%',
                            '75.43%'
                        ],
                        [
                            "eid469",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symResult3}",
                            '0.99094',
                            '0.99094'
                        ],
                        [
                            "eid369",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symResult1}",
                            '0.98655',
                            '0.98655'
                        ],
                        [
                            "eid414",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symResult2}",
                            '75.42%',
                            '75.42%'
                        ],
                        [
                            "eid418",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symResult3}",
                            '0.76413',
                            '0.76413'
                        ],
                        [
                            "eid39",
                            "width",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '160px',
                            '160px'
                        ],
                        [
                            "eid533",
                            "width",
                            30,
                            0,
                            "linear",
                            "${symSpring}",
                            '160px',
                            '94px'
                        ],
                        [
                            "eid87",
                            "height",
                            0,
                            0,
                            "linear",
                            "${symSpring}",
                            '339px',
                            '339px'
                        ],
                        [
                            "eid530",
                            "height",
                            30,
                            0,
                            "linear",
                            "${symSpring}",
                            '339px',
                            '170px'
                        ],
                        [
                            "eid488",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symResult5}",
                            '-4.56%',
                            '-4.56%'
                        ]
                    ]
                }
            },
            "symSpring": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Spring1',
                            rect: ['0px', '0px', '100.1%', '100.4%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Spring1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '10.3%', '39.6%']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symHolder": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['72px', '0px', '20px', '97px', 'auto', 'auto'],
                            id: 'holder2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/holder2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '80px', '163px', '205px', 'auto', 'auto'],
                            id: 'holder',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/holder.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '163px', '285px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symArrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['42px', '20px', '76px', '20px', 'auto', 'auto'],
                            id: 'arrow1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '61px', '60px', 'auto', 'auto'],
                            id: 'arrow2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '118px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symHolderArrow": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['28px', '0px', '163', '285', 'auto', 'auto'],
                            id: 'symHolder',
                            symbolName: 'symHolder',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '33px', '118', '60', 'auto', 'auto'],
                            id: 'symArrow',
                            symbolName: 'symArrow',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.85915', '0.90774']],
                            rect: ['20.9%', '81.8%', null, null, 'auto', 'auto'],
                            id: 'symWeight11',
                            symbolName: 'symWeight1',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.85315', '0.92706']],
                            rect: ['18.9%', '73.3%', null, null, 'auto', 'auto'],
                            id: 'symWeight22',
                            symbolName: 'symWeight2',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.85315', '0.92706']],
                            rect: ['23%', '64.2%', null, null, 'auto', 'auto'],
                            id: 'symWeight33',
                            symbolName: 'symWeight3',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.85315', '0.90774']],
                            rect: ['20.9%', '55.4%', null, null, 'auto', 'auto'],
                            id: 'symWeight44',
                            symbolName: 'symWeight4',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.85315', '0.90774']],
                            rect: ['22.5%', '46.7%', null, null, 'auto', 'auto'],
                            id: 'symWeight55',
                            symbolName: 'symWeight5',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '191px', '285px']
                        }
                    }
                },
                timeline: {
                    duration: 30,
                    autoPlay: false,
                    data: [
                        [
                            "eid259",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symWeight11}",
                            '0.85915',
                            '0.85915'
                        ],
                        [
                            "eid273",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symWeight33}",
                            '23.05%',
                            '23.05%'
                        ],
                        [
                            "eid288",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symWeight44}",
                            '55.44%',
                            '55.44%'
                        ],
                        [
                            "eid269",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symWeight44}",
                            '20.94%',
                            '20.94%'
                        ],
                        [
                            "eid271",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symWeight33}",
                            '0.85315',
                            '0.85315'
                        ],
                        [
                            "eid263",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symWeight22}",
                            '0.85315',
                            '0.85315'
                        ],
                        [
                            "eid260",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symWeight11}",
                            '0.90774',
                            '0.90774'
                        ],
                        [
                            "eid264",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symWeight22}",
                            '0.92706',
                            '0.92706'
                        ],
                        [
                            "eid490",
                            "opacity",
                            30,
                            0,
                            "linear",
                            "${symWeight44}",
                            '0',
                            '0'
                        ],
                        [
                            "eid267",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symWeight44}",
                            '0.85315',
                            '0.85315'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${symArrow}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid261",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symWeight11}",
                            '20.95%',
                            '20.95%'
                        ],
                        [
                            "eid286",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symWeight33}",
                            '64.21%',
                            '64.21%'
                        ],
                        [
                            "eid493",
                            "opacity",
                            30,
                            0,
                            "linear",
                            "${symWeight33}",
                            '0',
                            '0'
                        ],
                        [
                            "eid272",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symWeight33}",
                            '0.92706',
                            '0.92706'
                        ],
                        [
                            "eid289",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symWeight55}",
                            '46.67%',
                            '46.67%'
                        ],
                        [
                            "eid276",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symWeight55}",
                            '0.90774',
                            '0.90774'
                        ],
                        [
                            "eid94",
                            "top",
                            0,
                            30,
                            "linear",
                            "${symArrow}",
                            '17px',
                            '33px'
                        ],
                        [
                            "eid265",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symWeight22}",
                            '18.86%',
                            '18.86%'
                        ],
                        [
                            "eid489",
                            "opacity",
                            30,
                            0,
                            "linear",
                            "${symWeight11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid275",
                            "scaleX",
                            30,
                            0,
                            "linear",
                            "${symWeight55}",
                            '0.85315',
                            '0.85315'
                        ],
                        [
                            "eid492",
                            "opacity",
                            30,
                            0,
                            "linear",
                            "${symWeight22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid277",
                            "left",
                            30,
                            0,
                            "linear",
                            "${symWeight55}",
                            '22.52%',
                            '22.52%'
                        ],
                        [
                            "eid262",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symWeight11}",
                            '81.56%',
                            '81.56%'
                        ],
                        [
                            "eid280",
                            "top",
                            30,
                            0,
                            "linear",
                            "${symWeight22}",
                            '73.33%',
                            '73.33%'
                        ],
                        [
                            "eid268",
                            "scaleY",
                            30,
                            0,
                            "linear",
                            "${symWeight44}",
                            '0.90774',
                            '0.90774'
                        ],
                        [
                            "eid491",
                            "opacity",
                            30,
                            0,
                            "linear",
                            "${symWeight55}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "symCeiling": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '327px', '86px', 'auto', 'auto'],
                            id: 'ceiling',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ceiling.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '327px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symReset": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '134px', '68px', 'auto', 'auto'],
                            id: 'Reset',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Reset.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symResult": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '245px', '324px', 'auto', 'auto'],
                            id: 'ResultTable',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ResultTable.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '245px', '324px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symRuler": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '75px', '357px', 'auto', 'auto'],
                            id: 'Ruler',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Ruler.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '357px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symTable": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '780px', '119px', 'auto', 'auto'],
                            id: 'Table',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Table.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '780px', '119px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '142px', '48px', 'auto', 'auto'],
                            id: 'weight1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weight1.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['18px', '14px', '31px', '19px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​w1</p>',
                            opacity: '0',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '143px', '47px', 'auto', 'auto'],
                            id: 'weight2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weight2.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['13px', '11px', '34px', '22px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​w2</p>',
                            opacity: '0',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '143px', '47px', 'auto', 'auto'],
                            id: 'weight3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weight3.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['10px', '9px', '40px', '26px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​w3</p>',
                            opacity: '0',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '143px', '48px', 'auto', 'auto'],
                            id: 'weight4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weight4.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['12px', '10px', '40px', '25px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​w4</p>',
                            opacity: '0',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '143px', '48px', 'auto', 'auto'],
                            id: 'weight5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/weight5.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['17px', '13px', '33px', '23px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​w5</p>',
                            opacity: '0.017094017762659',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symWeight6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'weight6',
                            type: 'image',
                            rect: ['0px', '0px', '143px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/weight6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '48px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "symSnap": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '139px', '156px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '139px', '156px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symPile1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '68px', '15px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '68px', '15px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symBackground": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1123px', '614px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1123px', '614px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symResult5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '245px', '499px', 'auto', 'auto'],
                            id: 'result5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/result5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '245px', '499px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symResult4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '245px', '464px', 'auto', 'auto'],
                            id: 'result4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/result4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '245px', '464px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symResult3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '221px', '407px', 'auto', 'auto'],
                            id: 'result3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/result3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '407px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symResult2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '221px', '331px', 'auto', 'auto'],
                            id: 'result2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/result2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "symResult1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '223px', '346px', 'auto', 'auto'],
                            id: 'result1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/result1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '346px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Hook_edgeActions.js");
})("EDGE-97825884");
