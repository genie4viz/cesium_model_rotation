import Cesium from 'cesium/Cesium';

require('cesium/Widgets/widgets.css');
require('./css/main.css');

// console.log (typeof position);
// console.log(position, "from json");
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZWU2Nzc3OS01MmQzLTRmNmItODVjOS0yOTE3YmU4N2U0ZDIiLCJpZCI6MTg0OTIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzM4OTMzODR9.Uo9uKORUxA_5h3LWZCyoIZlBRIq03w6FsQcCxq76Gic';
var towers = [{
    "lng": 29.806319,
    "lat": 30.737467
}, {
    "lng": 29.807319,
    "lat": 30.738467
}, {
    "lng": 29.808319,
    "lat": 30.737467
}, {
    "lng": 29.809319,
    "lat": 30.737467
}];

var viewer = new Cesium.Viewer('cesiumContainer');

viewer.terrainProvider = Cesium.createWorldTerrain();

viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;

var startTime = viewer.clock.startTime;
var midTime = Cesium.JulianDate.addSeconds(startTime, 43200, new Cesium.JulianDate());
var stopTime = Cesium.JulianDate.addSeconds(startTime, 86400, new Cesium.JulianDate());

viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(towers[0].lng, towers[0].lat, 300),
    duration: 2
});
let carto_positions = [];
for (let i = 0; i < towers.length; i++) {
    carto_positions.push(
        Cesium.Cartographic.fromDegrees(
            towers[i].lng,
            towers[i].lat,
            0
        )
    );
}

const GE_PI = Math.PI;
const GE_PI2 = Math.PI / 2;
const GE_PI4 = Math.PI / 4;
const GE_2PI = Math.PI * 2;
const GE_DEG270 = Math.PI + Math.PI / 2;
//----------------------------
function getTowerDir(pTower, cTower, nTower) {
    let a = 0.0,
        ap = 0.0,
        an = 0.0;

    if (pTower == undefined) {
        // if start point
        a =
            getAngle(cTower.lat, cTower.lng, nTower.lat, nTower.lng) + GE_PI2;
    } else if (nTower == undefined) {
        // if end point
        a =
            getAngle(pTower.lat, pTower.lng, cTower.lat, cTower.lng) + GE_PI2;
    } else {
        // if middle point
        ap = getAngle(cTower.lat, cTower.lng, pTower.lat, pTower.lng);
        an = getAngle(cTower.lat, cTower.lng, nTower.lat, nTower.lng);
        a = (ap + an) / 2;
        if (an > ap) a -= GE_PI;
    }
    // normalize angle
    if (a > GE_2PI) {
        let n = Math.floor(a / GE_2PI);
        a -= GE_2PI * n;
    }
    return a;
}

function getAngle(x1, y1, x2, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    if (a == 0) {
        if (b == 0.0) {
            return 0.0;
        }
        return b > 0.0 ? GE_PI2 : GE_DEG270;
    } else {
        if (b == 0.0) {
            return a > 0.0 ? 0.0 : GE_PI;
        }
        if (a > 0.0) {
            if (b > 0.0) {
                return Math.atan(b / a);
            } else {
                return Math.atan(b / a) + GE_2PI;
            }
        } else {
            return Math.atan(b / a) + GE_PI;
        }
    }
}
Cesium.sampleTerrainMostDetailed(
    viewer.terrainProvider,
    carto_positions
).then(function (positions) {
    for (let i = 0; i < towers.length; i++) {
        towers[i].radian = getTowerDir(
            towers[i - 1],
            towers[i],
            towers[i + 1]
        );
        towers[i].id = "tower" + i;
        towers[i].z_pos = positions[i].height;
        add_el_tower(towers[i]);
    }
    let x_b_dist = 0.0001536, y_b_dist = 0.000021, z_b_dist = 65;
    let lines = [], main_lines = [];
    for (let i = 0; i < towers.length; i++) {
        // let line = [];
        
        let d_lng = Math.sin(towers[i].radian) * x_b_dist;
        let d_lat = Math.cos(towers[i].radian) * x_b_dist;

        let d_lng1 = d_lng - y_b_dist * Math.cos(towers[i].radian);
        let d_lat1 = d_lat + y_b_dist * Math.sin(towers[i].radian);
        let prevPoint, curPoint;
        if(i > 0){
            prevPoint = [d_lng1 + 1.0 * towers[i - 1].lng, d_lat1 + 1.0 * towers[i - 1].lat, z_b_dist + 1.0 * towers[i - 1].z_pos];
            curPoint = [d_lng1 + 1.0 * towers[i].lng, d_lat1 + 1.0 * towers[i].lat, z_b_dist + 1.0 * towers[i].z_pos];
            // Create a straight-line path.
            var property = new Cesium.SampledPositionProperty();
            var startPosition = Cesium.Cartesian3.fromDegrees(prevPoint[0], prevPoint[1], prevPoint[2]);
            property.addSample(startTime, startPosition);
            var stopPosition = Cesium.Cartesian3.fromDegrees(curPoint[0], curPoint[1], curPoint[2]);
            property.addSample(stopTime, stopPosition);

            // Find the midpoint of the straight path, and raise its altitude.
            var midPoint = Cesium.Cartographic.fromCartesian(property.getValue(midTime));
            midPoint.height = (prevPoint[2] + curPoint[2])/2 - 20 ;
            var midPosition = viewer.scene.globe.ellipsoid.cartographicToCartesian(
                midPoint, new Cesium.Cartesian3());

            // Redo the path to be the new arc.
            property = new Cesium.SampledPositionProperty();
            property.addSample(startTime, startPosition);
            property.addSample(midTime, midPosition);
            property.addSample(stopTime, stopPosition);

            // Create an Entity to show the arc.
            var arcEntity = viewer.entities.add({
                position : property,        
                // This path shows the arc as a polyline.
                path : {
                    resolution : 500,
                    color : Cesium.Color.YELLOW,
                    width : 5,
                    leadTime: 1e10,
                    trailTime: 1e10
                }
            });

            // This is where it becomes a smooth path.
            arcEntity.position.setInterpolationOptions({
                interpolationDegree : 5,
                interpolationAlgorithm : Cesium.LagrangePolynomialApproximation
            });
        }
        main_lines.push(d_lng1 + 1.0 * towers[i].lng);
        main_lines.push(d_lat1 + 1.0 * towers[i].lat);
        main_lines.push(z_b_dist + 1.0 * towers[i].z_pos);
        // let d_lng2 = d_lng + y_b_dist * Math.cos(towers[i].radian);
        // let d_lat2 = d_lat - y_b_dist * Math.sin(towers[i].radian);
        // main_lines.push(d_lng2+ 1.0 * towers[i].lng);
        // main_lines.push(d_lat2 + 1.0 * towers[i].lat);
        // main_lines.push(z_b_dist + 1.0 * towers[i].z_pos);

        //drawing for center line of each tower
        // line.push(1.0 * towers[i].lng + d_lng);
        // line.push(1.0 * towers[i].lat + d_lat);
        // line.push(z_b_dist + 1.0 * towers[i].z_pos + 10);

        // line.push(1.0 * towers[i].lng - d_lng);
        // line.push(1.0 * towers[i].lat - d_lat);
        // line.push(z_b_dist + 1.0 * towers[i].z_pos + 10);

        // lines.push(line);
    }
    viewer.entities.add({
    id: "tower_line_main",
    polyline: {
        positions: new Cesium.Cartesian3.fromDegreesArrayHeights(
        main_lines
        ),
        material: Cesium.Color.YELLOW,
        width: 1            
    }
    });

    //draw center line for each tower
    // for (let p = 0; p < lines.length; p++) {
    //     viewer.entities.add({
    //       id: "tower_line_" + p,
    //       polyline: {
    //         positions: new Cesium.Cartesian3.fromDegreesArrayHeights(
    //           lines[p]
    //         ),
    //         material: Cesium.Color.RED,
    //         width: 1            
    //       }
    //     });
    // }
    
});

function add_el_tower(el_tower) {
    let position = Cesium.Cartesian3.fromDegrees(
        el_tower.lng,
        el_tower.lat,
        el_tower.z_pos
    );
    let heading = el_tower.radian; //Cesium.Math.toRadians(tower.radian);
    let hpr = new Cesium.HeadingPitchRoll(heading, 0, 0);
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
        position, hpr
    );

    viewer.entities.add({
        id: el_tower.id,
        position: position,
        orientation: orientation,
        model: {
            uri: './static/1.glb',            
            color: Cesium.Color.AQUA,
            scale: 1
        }
    });
}