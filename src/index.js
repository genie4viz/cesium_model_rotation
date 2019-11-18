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
        // left
        { x_b_dist: 14.4,    y_b_dist: 0,      z_b_dist: 57.75,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 13.2,    y_b_dist: 0,      z_b_dist: 57.75,   type: 0,  color: "#ffff00"  },

        // right
        { x_b_dist: -15,    y_b_dist: 0,      z_b_dist: 57.8,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -13.7,  y_b_dist: 0,      z_b_dist: 57.8,   type: 0,  color: "#ffff00"  },

      ]
    },{
      name: "±800kV耐张-干字",
      url: "./static/±800kV耐张-干字.glb",
      scale: 0.1,
      units: [
        // left
        { x_b_dist: 13.9,    y_b_dist: 11.5,     z_b_dist: 64.5,     type: 1,  color: "#ffff00"  },
        { x_b_dist: 14.4,    y_b_dist: 3,      z_b_dist: 57.75,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 14.4,    y_b_dist: -3,      z_b_dist: 57.75,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 13.9,    y_b_dist: -11.5,     z_b_dist: 64.5,     type: 3,  color: "#ffff00"  },

        { x_b_dist: 13.5,    y_b_dist: 11.5,     z_b_dist: 64.5,     type: 1,  color: "#ffff00"  },
        { x_b_dist: 13.2,    y_b_dist: 3,      z_b_dist: 57.75,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 13.2,    y_b_dist: -3,      z_b_dist: 57.75,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 13.5,    y_b_dist: -11.5,     z_b_dist: 64.5,     type: 3,  color: "#ffff00"  },

        // right
        { x_b_dist: -14.6,    y_b_dist: 11.5,     z_b_dist: 64.5,     type: 1,  color: "#ffff00"  },
        { x_b_dist: -15,    y_b_dist: 3,      z_b_dist: 57.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -15,    y_b_dist: -3,      z_b_dist: 57.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -14.6,    y_b_dist: -11.5,     z_b_dist: 64.5,     type: 3,  color: "#ffff00"  },

        { x_b_dist: -14.1,    y_b_dist: 11.5,     z_b_dist: 64.5,     type: 1,  color: "#ffff00"  },
        { x_b_dist: -13.7,    y_b_dist: 3,      z_b_dist: 57.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -13.7,    y_b_dist: -3,      z_b_dist: 57.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -14.1,    y_b_dist: -11.5,     z_b_dist: 64.5,     type: 3,  color: "#ffff00"  },
      ]
    },{
      name: "1000kV直线-丰字",
      url: "./static/1000b.glb",
      scale: 0.12,
      units: [
/*        // 0 // left - bottom
        { x_b_dist: 7,    y_b_dist: 0,      z_b_dist: 61.9,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 7.3,  y_b_dist: 0,      z_b_dist: 61.68,  type: 0,  color: "#ffff00"  },
        { x_b_dist: 7.6,  y_b_dist: 0,      z_b_dist: 61.9,   type: 0,  color: "#ffff00"  },

        // left - middle
        { x_b_dist: 6.55, y_b_dist: 0,      z_b_dist: 76.8,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 6.85, y_b_dist: 0,      z_b_dist: 76.55,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 7.15, y_b_dist: 0,      z_b_dist: 76.8,   type: 0,  color: "#ffff00"  },

        // left - top
        { x_b_dist: 6.0,  y_b_dist: 0,     z_b_dist: 91.7,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 6.3,  y_b_dist: 0,     z_b_dist: 91.45,   type: 0,  color: "#ffff00"  },
        { x_b_dist: 6.6,  y_b_dist: 0,     z_b_dist: 91.7,   type: 0,  color: "#ffff00"  },

        // 0 // right - bottom
        { x_b_dist: -6.45,    y_b_dist: 0,      z_b_dist: 61.9,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -6.75,    y_b_dist: 0,      z_b_dist: 61.68,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -7.05,    y_b_dist: 0,      z_b_dist: 61.9,   type: 0,  color: "#ffff00"  },

        // right - middle
        { x_b_dist: -6.85, y_b_dist: 0,      z_b_dist: 76.8,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -6.5, y_b_dist: 0,      z_b_dist: 76.5,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -6.25, y_b_dist: 0,      z_b_dist: 76.8,   type: 0,  color: "#ffff00"  },

        // right-top
        { x_b_dist: -6.1,   y_b_dist: 0,      z_b_dist: 91.7,   type: 0,  color: "#ffff00"  },
        { x_b_dist: -5.8,   y_b_dist: 0,      z_b_dist: 91.4,   type: 0,  color: "#ffff00"  },*/
        { x_b_dist: -5.5,   y_b_dist: 0,      z_b_dist: 91.7,   type: 0,  color: "#ffff00"  },
      ]
    },{
      name: "1000kV耐张-丰字",
      url: "./static/1000a.glb",
      scale: 0.12,
      units: [
/*
        // 0 // left - bottom
        { x_b_dist: 7,    y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: 7,    y_b_dist: 0,      z_b_dist: 61.9,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 7,    y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        { x_b_dist: 7.25, y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: 7.3,  y_b_dist: 0,      z_b_dist: 61.68,  type: 2,  color: "#ffff00"  },
        { x_b_dist: 7.25, y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        { x_b_dist: 7.5,  y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: 7.6,  y_b_dist: 0,      z_b_dist: 61.9,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 7.5,  y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        // left - middle
        { x_b_dist: 6.7,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 6.55, y_b_dist: 0,      z_b_dist: 76.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 6.7,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: 6.9,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 6.85, y_b_dist: 0,      z_b_dist: 76.55,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 6.9,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: 7.1,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 7.15, y_b_dist: 0,      z_b_dist: 76.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 7.1,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        // left - top
        { x_b_dist: 6.15,  y_b_dist: 7.6,   z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 6.0,  y_b_dist: 0,     z_b_dist: 91.7,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 6.15,  y_b_dist: -7.6,  z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: 6.35,  y_b_dist: 7.6,   z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 6.3,  y_b_dist: 0,     z_b_dist: 91.45,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 6.35,  y_b_dist: -7.6,  z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: 6.55,  y_b_dist: 7.6,   z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: 6.6,  y_b_dist: 0,     z_b_dist: 91.7,   type: 2,  color: "#ffff00"  },
        { x_b_dist: 6.55,  y_b_dist: -7.6,  z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },

        // 0 // right - bottom
        { x_b_dist: -6.5,    y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.45,    y_b_dist: 0,      z_b_dist: 61.9,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.5,    y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        { x_b_dist: -6.75,    y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.75,    y_b_dist: 0,      z_b_dist: 61.68,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.75,    y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        { x_b_dist: -6.9,    y_b_dist: 8.5,    z_b_dist: 67,     type: 1,  color: "#ffff00"  },
        { x_b_dist: -7.05,    y_b_dist: 0,      z_b_dist: 61.9,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.9,    y_b_dist: -8.5,   z_b_dist: 67,     type: 3,  color: "#ffff00"  },

        // right - middle
        { x_b_dist: -6.7,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.85, y_b_dist: 0,      z_b_dist: 76.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.7,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: -6.5,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.5, y_b_dist: 0,      z_b_dist: 76.5,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.5,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: -6.3,  y_b_dist: 8.3,    z_b_dist: 81.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.25, y_b_dist: 0,      z_b_dist: 76.8,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6.3,  y_b_dist: -8.3,   z_b_dist: 81.8,   type: 3,  color: "#ffff00"  },

        // right-top
        { x_b_dist: -6,   y_b_dist: 7.6,    z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -6.1,   y_b_dist: 0,      z_b_dist: 91.7,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -6,   y_b_dist: -7.6,   z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },

        { x_b_dist: -5.8,   y_b_dist: 7.6,    z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -5.8,   y_b_dist: 0,      z_b_dist: 91.4,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -5.8,   y_b_dist: -7.6,   z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },*/

        { x_b_dist: -5.6,   y_b_dist: 7.6,    z_b_dist: 96.8,   type: 1,  color: "#ffff00"  },
        { x_b_dist: -5.5,   y_b_dist: 0,      z_b_dist: 91.7,   type: 2,  color: "#ffff00"  },
        { x_b_dist: -5.6,   y_b_dist: -7.6,   z_b_dist: 96.8,   type: 3,  color: "#ffff00"  },

      ]
    }
  ];
var towers = [{
    "lng": 29.806319,
    "lat": 30.737467,
    "model": el_tower_models[6]
}, {
    "lng": 29.807319,
    "lat": 30.738467,
    "model": el_tower_models[5]
}, {
    "lng": 29.808319,
    "lat": 30.737467,
    "model": el_tower_models[5]
}, {
    "lng": 29.809319,
    "lat": 30.737467,
    "model": el_tower_models[6]
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
    let lines = [];
    let temp_lines = [];
    let baseLine = [];
    for (var i = 0; i < towers.length; i++) {
      let currentModel = towers[i].model;
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

        // // ready for draw lines
        
        // viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        // var startTime = viewer.clock.startTime;
        // var midTime = Cesium.JulianDate.addSeconds(startTime, 43200, new Cesium.JulianDate());
        // var stopTime = Cesium.JulianDate.addSeconds(startTime, 86400, new Cesium.JulianDate());
        let sPt, mPt, ePt;
        let center, pt1, pt2;

        for (let k = 0; k < currentModel.units.length; k++) {
          console.log(currentModel.units[k].type, "currentModel.units[k].type");
          // draw line of the between towers
          if(i > 0 && (currentModel.units[k].type == 0 || currentModel.units[k].type == 1)) {
            let n = -1;
            console.log(currentModel.name, "currentModel.name");
            console.log(towers[i-1].model.name, "towers[i-1].model.name");
            if(currentModel.name == towers[i-1].model.name) {
              if(currentModel.units[k].type == 1) {
                for(let m=k+1; m<towers[i-1].model.units.length; m++) {
                  if(towers[i-1].model.units[m].type == 3){
                    n = m;
                    break;
                  }
                }
              } else {
                n = k;
              }
            } else {
              if(currentModel.units[k].type == 0) {
                if(currentModel.name == "±800kV直线-T字.glb")
                  n = k * 4 + 3;
                else 
                  n = k * 3 + 2;
              } else {
                if(currentModel.name == "±800kV直线-T字.glb")
                  n = k / 4;
                else
                  n = k / 3;
              }
              console.log(n, "n");
            }
            
            if(n < 0)
              continue;

            center = ComputeLatLng(towers[i-1].lat, towers[i-1].lng, towers[i-1].radian, towers[i-1].model.units[n].x_b_dist);
            pt1 =  ComputeLatLng(center[0], center[1], towers[i-1].radian - Math.PI / 2 , towers[i-1].model.units[n].y_b_dist);
            sPt = Cesium.Cartesian3.fromDegrees(pt1[1], pt1[0], towers[i-1].model.units[n].z_b_dist + 1.0 * towers[i-1].z_pos);

            center = ComputeLatLng(towers[i].lat, towers[i].lng, towers[i].radian, currentModel.units[k].x_b_dist);
            pt2 =  ComputeLatLng(center[0], center[1], towers[i].radian - Math.PI / 2 , currentModel.units[k].y_b_dist);
            ePt = Cesium.Cartesian3.fromDegrees(pt2[1], pt2[0], currentModel.units[k].z_b_dist + 1.0 * towers[i].z_pos);

            let line = [];
            line.push(pt1[1]);    line.push(pt1[0]);    line.push(towers[i-1].model.units[n].z_b_dist + 1.0 * towers[i-1].z_pos);
            line.push(pt2[1]);    line.push(pt2[0]);    line.push(towers[i].radian - Math.PI / 2 , currentModel.units[k].y_b_dist);

            viewer.entities.add({
              id: "el_tower_line_" + p,
              polyline: {
                positions: new Cesium.Cartesian3.fromDegreesArrayHeights(line),
                material: Cesium.Color.fromCssColorString(
                  currentModel.units[p].color
                ),
                width: 1,
                show: true
              }
            });
            console.log(line, "line");

//            mPt = Cesium.Cartesian3.fromDegrees((pt1[1]+pt2[1])/2, 
//                                              (pt1[0]+pt2[0])/2,
//                                              (currentModel.units[k].z_b_dist+towers[i-1].model.units[n].z_b_dist)/2 + (towers[i].z_pos+towers[i-1].z_pos)/2 - 7);
//            var property = new Cesium.SampledPositionProperty();
//            property.addSample(startTime, sPt);
//            property.addSample(midTime, mPt);
//            property.addSample(stopTime, ePt);
            // var arcEntity = viewer.entities.add({
            //   position : property,
            //   path : {
            //       resolution : 500,
            //       material: Cesium.Color.fromCssColorString(
            //         currentModel.units[k].color
            //       ),
            //       width : 1,
            //       leadTime: 1e10,
            //       trailTime: 1e10
            //   }
            // });
            // arcEntity.position.setInterpolationOptions({
            //   interpolationDegree : 5,
            //   interpolationAlgorithm : Cesium.LagrangePolynomialApproximation
            // });

          } else if(currentModel.units[k].type == 0)
            continue;
          else if(currentModel.units[k].type == 3)
            continue;

        /*  // draw tower inside line
          center = ComputeLatLng(towers[i].lat, towers[i].lng, towers[i].radian, currentModel.units[k].x_b_dist);
          //let right = ComputeLatLng(center[0], center[1], Math.PI / 2 + towers[i].radian , y_b_dist);
          pt1 =  ComputeLatLng(center[0], center[1], towers[i].radian - Math.PI / 2 , currentModel.units[k].y_b_dist);
          //pt1 =  ComputeLatLng(center[0], center[1], Math.PI / 2 + towers[i].radian , currentModel.units[k].y_b_dist);
          sPt = Cesium.Cartesian3.fromDegrees(pt1[1], pt1[0], currentModel.units[k].z_b_dist + 1.0 * towers[i].z_pos);
          
          if(currentModel.units[k+1].type != 1) {
            pt2 =  ComputeLatLng(center[0], center[1], towers[i].radian - Math.PI / 2 , currentModel.units[k+1].y_b_dist);
          }else
            continue;
          ePt = Cesium.Cartesian3.fromDegrees(pt2[1], pt2[0], currentModel.units[k+1].z_b_dist + 1.0 * towers[i].z_pos);
          mPt = Cesium.Cartesian3.fromDegrees((pt1[1]+pt2[1])/2, 
                                              (pt1[0]+pt2[0])/2,
                                              (currentModel.units[k].z_b_dist+currentModel.units[k+1].z_b_dist)/2 + 1.0 * towers[i].z_pos - 2);
          var property = new Cesium.SampledPositionProperty();
          property.addSample(startTime, sPt);
          property.addSample(midTime, mPt);
          property.addSample(stopTime, ePt);
          var arcEntity = viewer.entities.add({
            position : property,
            path : {
                resolution : 500,
                material: Cesium.Color.fromCssColorString(
                  currentModel.units[k].color
                ),
                width : 1,
                leadTime: 1e10,
                trailTime: 1e10
            }
          });
          arcEntity.position.setInterpolationOptions({
            interpolationDegree : 5,
            interpolationAlgorithm : Cesium.LagrangePolynomialApproximation
          });*/
        }
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

      let currentModel = el_tower.model;
      
      viewer.entities.add({
        id: el_tower.id,
        position: position,
        orientation: orientation,
        model: {
          uri: currentModel.url,
          color: Cesium.Color.AQUA,
          scale: currentModel.scale
        }
      });
}
function ComputeLatLng(vLatitude, vLongitude, vAngle, vDistance) {
    var vNewLatLng = [];
    vDistance = vDistance / (6371 * 1000);
    // vAngle = ToRad(vAngle);

    var vLat1 = ToRad(vLatitude);
    var vLng1 = ToRad(vLongitude);

    var vNewLat = Math.asin(Math.sin(vLat1) * Math.cos(vDistance) +
                  Math.cos(vLat1) * Math.sin(vDistance) * Math.cos(vAngle));

    var vNewLng = vLng1 + Math.atan2(Math.sin(vAngle) * Math.sin(vDistance) * Math.cos(vLat1),
                          Math.cos(vDistance) - Math.sin(vLat1) * Math.sin(vNewLat));

    if (isNaN(vNewLat) || isNaN(vNewLng)) {
        return null;
    }

    vNewLatLng[0] = ToDeg(vNewLat);
    vNewLatLng[1] = ToDeg(vNewLng);

    return vNewLatLng;
}
function ToRad(vInput) {
    return vInput * Math.PI / 180;
}
function ToDeg(vInput) {
    return vInput * 180 / Math.PI;
}