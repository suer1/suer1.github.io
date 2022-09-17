"use strict";

var gl;
var points;

window.onload = function init(){
    var canvas = document.getElementById( "triangle-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if( !gl ){
        alert( "WebGL isn't available" );
    }

    // Three Vertices
    var vertices = [
        5.0, 5.0,
        5.0,  0.0,
        0.0, 0.0,
        /*0, 1.0,
         1.0, -1.0,
         1.0,  1.0,
         0.0, -1.0,
         1.0,  1.0,
         0.0,  1.0*/
        /*-0.5, -0.5,
        0.0, 0.5,
        0.5, -0.5*/
    ];
    var vertices1 = [
        0.0,  0.0,
        0.0,  5.0,
        -5.0,  0.0,
        -5.0, 5.0,
        /*1.0, -1.0,
        1.0,  1.0,
        0.0, -1.0,
        1.0,  1.0,
        0.0,  1.0*/
        /*-0.5, -0.5,
        0.0, 0.5,
        0.5, -0.5*/

    ];

    // Load shaders and initialize attribute buffers
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

    // Associate external shader variables with data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    render();
//zheng
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    var program1 = initShaders( gl, "vertex-shader", "fragment-shader1" );
    gl.useProgram( program1 );

    // Load the data into the GPU
    var bufferId1 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array(vertices1), gl.STATIC_DRAW );

    // Associate external shader variables with data buffer
    var vPosition = gl.getAttribLocation( program1, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    render1();
}
function render(){
    gl.clear( gl.COLOR_BUFFER_BIT );
    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
    gl.drawArrays( gl.TRIANGLES, 0, 3 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render1(){
    //gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
    //gl.drawArrays( gl.TRIANGLES, 0, 3);
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}
