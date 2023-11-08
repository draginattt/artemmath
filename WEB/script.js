
function areaOfTriangle(obj) {
var a=1*obj.st1.value;
var b=1*obj.st2.value;
var c=1*obj.st3.value;
var p=(a+b+c)/2;
var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
var s1 = Math.round(s *100)/100;
obj.res.value=s1; 
var m1 = Math.max(a,b,c)
obj.max.value = m1;
var m2 = Math.min(a,b,c)
obj.min.value = m2;


var ax = a; 
 var bx = b; 
 var cx = c; 
  var d=(bx*bx)-(4*ax*cx);
  if(d>0)
  {
    var d1=(-bx+Math.sqrt(d))/(2*ax);
    var d2=(-bx-Math.sqrt(d))/(2*ax);
    obj.x1.value = Math.round(d1*100)/100;
    obj.x2.value = Math.round(d2*100)/100;
  }
  else
  {

    if(d<0)

    { 
        obj.x1.value = 'нет корня';
        obj.x2.value = 'нет корня';
    } 
    else if(d==0)

    {
      var d3=-bx/(2*ax);
      obj.x1.value = Math.round(d3*100)/100;
    
    }

  }

};
