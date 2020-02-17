var image_resize_canvas=document.createElement("CANVAS"),image_resize_ctx=image_resize_canvas.getContext("2d"),canvas_Array=[],canvas_Array2=[],originWidth=0,originHeight=0;
function input_image(c){image_resize_canvas.width=originWidth;image_resize_canvas.height=originHeight;image_resize_ctx.drawImage(img,0,0);c=image_resize_ctx.getImageData(0,0,image_resize_canvas.width,image_resize_canvas.height).data;canvas_Array=Array(image_resize_canvas.height);for(var a=0;a<image_resize_canvas.height;a++){canvas_Array[a]=new Uint8ClampedArray(4*image_resize_canvas.width);for(var b=0;b<4*image_resize_canvas.width;b+=4)canvas_Array[a][b]=c[a*image_resize_canvas.width*4+b],canvas_Array[a][b+
1]=c[a*image_resize_canvas.width*4+b+1],canvas_Array[a][b+2]=c[a*image_resize_canvas.width*4+b+2],canvas_Array[a][b+3]=c[a*image_resize_canvas.width*4+b+3]}console.log(canvas_Array)}
function input_image2(c){image_resize_canvas.width=originWidth;image_resize_canvas.height=originHeight;image_resize_ctx.drawImage(img,0,0);c=image_resize_ctx.getImageData(0,0,image_resize_canvas.width,image_resize_canvas.height).data;canvas_Array2=Array(image_resize_canvas.height);for(var a=0;a<image_resize_canvas.height;a++){canvas_Array2[a]=new Uint8ClampedArray(4*image_resize_canvas.width);for(var b=0;b<4*image_resize_canvas.width;b+=4)canvas_Array2[a][b]=c[a*image_resize_canvas.width*4+b],canvas_Array2[a][b+
1]=c[a*image_resize_canvas.width*4+b+1],canvas_Array2[a][b+2]=c[a*image_resize_canvas.width*4+b+2],canvas_Array2[a][b+3]=c[a*image_resize_canvas.width*4+b+3]}console.log(canvas_Array2)}
function get_image(){for(var c=image_resize_ctx.getImageData(0,0,image_resize_canvas.width,image_resize_canvas.height),a=0;a<image_resize_canvas.height;a++)for(var b=0;b<4*image_resize_canvas.width;b+=4)c.data[a*image_resize_canvas.width*4+b]=canvas_Array[a][b],c.data[a*image_resize_canvas.width*4+b+1]=canvas_Array[a][b+1],c.data[a*image_resize_canvas.width*4+b+2]=canvas_Array[a][b+2],c.data[a*image_resize_canvas.width*4+b+3]=canvas_Array[a][b+3];image_resize_ctx.putImageData(c,0,0);return image_resize_canvas.toDataURL()}
function color_inverse(){for(var c=0;c<image_resize_canvas.height;c++)for(var a=0;a<4*image_resize_canvas.width;a+=4)canvas_Array[c][a]=255-canvas_Array[c][a],canvas_Array[c][a+1]=255-canvas_Array[c][a+1],canvas_Array[c][a+2]=255-canvas_Array[c][a+2]}
function sharp(){for(var c=parseInt(VW.value),a=parseInt(VH.value),b=0,h=0,k=0,d=0;d<image_resize_canvas.height;d++)for(var e=0;e<4*image_resize_canvas.width;e+=4){for(var f=-1;1>=f;f++)for(var g=-4;4>=g;g+=4)0>d+f||d+f>=image_resize_canvas.height||0>e+g||e+g>=4*image_resize_canvas.width||(b+=canvas_Array[d+f][e+g],h+=canvas_Array[d+f][e+g+1],k+=canvas_Array[d+f][e+g+2]);canvas_Array[d][e]=b/9;canvas_Array[d][e+1]=h/9;canvas_Array[d][e+2]=k/9;b=h=k=0}var l=4*c;for(d=0;d<image_resize_canvas.height;d++)for(e=
0;e<4*image_resize_canvas.width;e+=4){for(f=-a;f<=a;f++)for(g=-l;g<=l;g+=4)0>d+f||d+f>=image_resize_canvas.height||0>e+g||e+g>=4*image_resize_canvas.width||(b+=canvas_Array2[d+f][e+g],h+=canvas_Array2[d+f][e+g+1],k+=canvas_Array2[d+f][e+g+2]);b+=canvas_Array2[d][e]*-(2*c+1)*(2*a+1);h+=canvas_Array2[d][e+1]*-(2*c+1)*(2*a+1);k+=canvas_Array2[d][e+2]*-(2*c+1)*(2*a+1);255<b&&(b=255);255<h&&(h=255);255<k&&(k=255);0>b&&(b=0);0>h&&(h=0);0>k&&(k=0);canvas_Array[d][e]=255-(b+h+k)/3;canvas_Array[d][e+1]=canvas_Array[d][e];
canvas_Array[d][e+2]=canvas_Array[d][e];b=h=k=0}}function getStretchSize(c,a,b){for(;(c>window.innerWidth/2||a>window.innerHeight-52)&&!(c*=.9,a*=.9,10>c||10>a););return[c,a]};