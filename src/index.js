import Cesium from 'cesium/Cesium';

require('cesium/Widgets/widgets.css');
require('./css/main.css');

// console.log (typeof position);
// console.log(position, "from json");
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZWU2Nzc3OS01MmQzLTRmNmItODVjOS0yOTE3YmU4N2U0ZDIiLCJpZCI6MTg0OTIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzM4OTMzODR9.Uo9uKORUxA_5h3LWZCyoIZlBRIq03w6FsQcCxq76Gic';
var el_tower_models = [
    {
      name: "default",
      url: "./static/1.glb",
      scale: 1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#fff"
        }
      ]
    },
    {
      name: "±500kV直线-T字",
      url: "./static/±500kV直线-T字.glb",
      scale: 0.1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        }
      ]
    },{
      name: "±500kV耐张-T字",
      url: "./static/±500kV耐张-T字.glb",
      scale: 0.1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        }
      ]
    },{
      name: "±800kV直线-T字",
      url: "./static/±800kV直线-T字.glb",
      scale: 0.1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        }
      ]
    },{
      name: "±800kV耐张-干字",
      url: "./static/±800kV耐张-干字.glb",
      scale: 1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        }
      ]
    },{
      name: "1000kV直线-丰字",
      url: "./static/1000kV直线-丰字.glb",
      scale: 0.1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -17.05, //meters
          y_b_dist: 2, //meters
          z_b_dist: 64.403, 
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -16.85, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -17.15,
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 2, 
          z_b_dist: 63.6,
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 2, 
          z_b_dist: 64.02,
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 2, 
          z_b_dist: 64.403,
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 2, //meters
          z_b_dist: 78.57,
          color: "#fff"
        }
      ]
    },{
      name: "1000kV耐张-丰字",
      url: "./static/1000a.glb",
      scale: 1,
      units: [
        //only for left side
        // 0
        {
          x_b_dist: 5, //meters
          y_b_dist: 0, //meters
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: 5, 
          y_b_dist: 0, //meters
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: 5,
          y_b_dist: 0, //meters
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //3
        {
          x_b_dist: 5, 
          y_b_dist: 0, //meters
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: 5, 
          y_b_dist: 0, //meters
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: 5, 
          y_b_dist: 0, //meters
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //only for right side
        // 0
        {
          x_b_dist: -5, //meters
          y_b_dist: 0, //meters
          z_b_dist: 64.403, 
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //1
        {
          x_b_dist: -5, 
          y_b_dist: 0, //meters
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //2
        {
          x_b_dist: -5,
          y_b_dist: 0, //meters
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        {
          x_b_dist: -17.645, 
          y_b_dist: 0, //meters
          z_b_dist: 63.6,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //4
        {
          x_b_dist: -17.935, 
          y_b_dist: 0, 
          z_b_dist: 64.02,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        // //5
        {
          x_b_dist: -17.745, 
          y_b_dist: 0, 
          z_b_dist: 64.403,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#ffff00"
        },
        //white line
        //left
        {
          x_b_dist: 12.02, //meters
          y_b_dist: 0, //meters
          z_b_dist: 78.57,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#fff"
        },
        //right
        {
          x_b_dist: -12.02, //meters
          y_b_dist: 0, //meters
          z_b_dist: 78.57,
          think: 1,
          pass: 1, // or 2, 1 : one point for each tower,  2 : two point for each tower
          color: "#fff"
        }
      ]
    }
  ];
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

    //select model
    let currentModel = el_tower_models[6];

    let lines = [];
    let temp_lines = [];
    let baseLine = [];
    for (var i = 0; i < towers.length; i++) {
        // set towers addtional information
        towers[i].radian = getTowerDir(
          towers[i - 1],
          towers[i],
          towers[i + 1]
        );            
        towers[i].z_pos = positions[i].height;
        towers[i].tower_color = Cesium.Color.ALICEBLUE;
        towers[i].id = "el_tower_on_line_" + i;
        // draw towers
        add_el_tower(towers[i]);
        // ready for draw baseline
        baseLine.push(1.0 *(towers[i].lng));
        baseLine.push(1.0 *(towers[i].lat));
        baseLine.push(towers[i].z_pos);

        // ready for draw lines

        for (let k = 0; k < currentModel.units.length;k++) {
          let x_b_dist =
            currentModel.units[k].x_b_dist;
          let y_b_dist =
            currentModel.units[k].y_b_dist;
          let z_b_dist =
            currentModel.units[k].z_b_dist;
          
          //ksh
          let center = ComputeLatLng(towers[i].lat, towers[i].lng, towers[i].radian, x_b_dist);
          let right = ComputeLatLng(center[0], center[1], Math.PI / 2 + towers[i].radian , y_b_dist);
          let left =  ComputeLatLng(center[0], center[1], towers[i].radian - Math.PI / 2 , y_b_dist);              
          
          // ready for input
          if (!lines[k]) lines[k] = [];
          lines[k].push( left[1]);
          lines[k].push( left[0]);
          lines[k].push( z_b_dist + 1.0 * towers[i].z_pos);
          lines[k].push( right[1]);
          lines[k].push( right[0]);
          lines[k].push( z_b_dist + 1.0 * towers[i].z_pos);
         
        }
      }

      // draw lines
      for (let p = 0; p < lines.length; p++) {
        viewer.entities.add({
          id: "el_tower_line_" + p,
          polyline: {
            positions: new Cesium.Cartesian3.fromDegreesArrayHeights(
              lines[p]
            ),
            material: Cesium.Color.fromCssColorString(
              currentModel.units[p].color
            ),
            width: 1,
            show: false
          }
        });
      }
    
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

      let currentModel = el_tower_models[6];//1000kV耐张-丰字
      console.log(el_tower, currentModel, 'asadfasdf')
      viewer.entities.add({
        id: el_tower.id,
        position: position,
        orientation: orientation,
        model: {
          uri: "./static/1000a.glb",
          shadows: Cesium.ShadowMode.DISABLED,
          color: el_tower.tower_color,
          scale: currentModel.scale,
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
            0,
            main.cam_5K
          )
        },
        label: {
          show: false,
          text: el_tower.towernumber,
          font: "18px SimHei",
          fillColor: Cesium.Color.BROWN,
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 3.0,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
          pixelOffset: new Cesium.Cartesian2(0, 20),
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
            0,
            main.cam_5K
          )
        }
      });
}