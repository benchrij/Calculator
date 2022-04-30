function Main()
{var url
var MinFloat="1.0e-22";var current="0";var prev="0";var memory=0;var toClear=true;var sign=0;var signs=["","+","-","×","÷","^","√","e"];var signsText=["none","add","subtract","multiply","divide","yPowX","ySquareRootX","eE"];var signOrder=["e","^","√","×","÷","-","+"];var lowOrderSigns=["-","+","×","÷"];var g_MathArray=new Array();var g_LastCalc=new Array();var g_ArrayIndex=0;var showNum=true;var g_Clear=true;var g_CalcResult="0";var g_bEqualsPressed=false;var g_numPressed=false;var radians=false;init();function init(e)
{exportRoot.os_btn.on("mousedown",function(){window.open('https://www.online-stopwatch.com','_blank');});exportRoot.output_txt.text="0";exportRoot.second_text.mouseEnabled=false;exportRoot.raddeg.mouseEnabled=false;exportRoot.acc.mouseEnabled=false;exportRoot.operatorHighlightMemory_mc.visible=false;exportRoot.operatorHighlightAdd_mc.mouseEnabled=false;exportRoot.operatorHighlightSubtract_mc.mouseEnabled=false;exportRoot.operatorHighlightDivide_mc.mouseEnabled=false;exportRoot.operatorHighlightMultiply_mc.mouseEnabled=false;exportRoot.operatorHighlightYPowX_mc.mouseEnabled=false;exportRoot.operatorHighlightEE_mc.mouseEnabled=false;exportRoot.operatorHighlightYSquareRootX_mc.mouseEnabled=false;exportRoot.operatorHighlightMemory_mc.mouseEnabled=false;exportRoot.c0_btn.addEventListener("mousedown",function()
{addNum("0");});exportRoot.c1_btn.addEventListener("mousedown",function()
{addNum("1");});exportRoot.c2_btn.addEventListener("mousedown",function()
{addNum("2");});exportRoot.c3_btn.addEventListener("mousedown",function()
{addNum("3");});exportRoot.c4_btn.addEventListener("mousedown",function()
{addNum("4");});exportRoot.c5_btn.addEventListener("mousedown",function()
{addNum("5");});exportRoot.c6_btn.addEventListener("mousedown",function()
{addNum("6");});exportRoot.c7_btn.addEventListener("mousedown",function()
{addNum("7");});exportRoot.c8_btn.addEventListener("mousedown",function()
{addNum("8");});exportRoot.c9_btn.addEventListener("mousedown",function()
{addNum("9");});exportRoot.point_btn.addEventListener("mousedown",function()
{if(toClear||current=="0")
{addNum("0.");}
else if(!current.match(/\./))
{addNum(".");}});exportRoot.plusMinus_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(parseFloat(current)*-1));});exportRoot.divide_btn.addEventListener("mousedown",function()
{setSign(4);toggleButtonHighlight("divide");});exportRoot.multiply_btn.addEventListener("mousedown",function()
{setSign(3);toggleButtonHighlight("multiply");});exportRoot.subtract_btn.addEventListener("mousedown",function()
{setSign(2);toggleButtonHighlight("subtract");});exportRoot.add_btn.addEventListener("mousedown",function()
{setSign(1);toggleButtonHighlight("add");});exportRoot.equals_btn.addEventListener("mousedown",function()
{EqualsPressed();});exportRoot.allClear_btn.addEventListener("mousedown",function()
{cPressed();});exportRoot.log_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.log(parseFloat(current))*Math.LOG10E));toClear=true;});exportRoot.ln_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.log(parseFloat(current))));toClear=true;});exportRoot.log2_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.log(parseFloat(current))*Math.LOG2E));toClear=true;});exportRoot.twoPowX_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.pow(2,parseFloat(current))));toClear=true;});exportRoot.pi_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.PI));toClear=true;});exportRoot.random_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.random()));toClear=true;});exportRoot.eX_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.exp(parseFloat(current))));toClear=true;});exportRoot.square_btn.addEventListener("mousedown",function()
{PressSquare(2);});exportRoot.cube_btn.addEventListener("mousedown",function()
{PressSquare(3);});exportRoot.squareRoot_btn.addEventListener("mousedown",function()
{PressSquareRt();});exportRoot.yPowX_btn.addEventListener("mousedown",function()
{toClear=true;setSign(5);toggleButtonHighlight("yPowX");});exportRoot.ySquareRootX_btn.addEventListener("mousedown",function()
{toClear=true;setSign(6);toggleButtonHighlight("ySquareRootX");});exportRoot.percent_btn.addEventListener("mousedown",function()
{toClear=true;var tmpt
if(g_MathArray[1]==undefined)
{tmpt=parseFloat(current)/100;}
else
{tmpt=(g_MathArray[0]*parseFloat(current)/100);}
addNum(String(tmpt));toClear=true;});exportRoot.factorial_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(factorial(parseFloat(current))));toClear=true;});exportRoot.reciprocal_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(1/parseFloat(current)));toClear=true;});exportRoot.eE_btn.addEventListener("mousedown",function()
{setSign(7);toggleButtonHighlight("eE");});exportRoot.raddeg_btn.addEventListener("mousedown",toggleRadians);exportRoot.secondFunction_btn.addEventListener("mousedown",toggleSecondFunctionEventHandler);exportRoot.firstFunction_btn.addEventListener("mousedown",toggleSecondFunctionEventHandler);exportRoot.sin_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.sin(trig(parseFloat(current)))));toClear=true;});exportRoot.arcSin_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(trig2(Math.asin(parseFloat(current)))));toClear=true;});exportRoot.cos_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.cos(trig(parseFloat(current)))));toClear=true;});exportRoot.arcCos_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(trig2(Math.acos(parseFloat(current)))));toClear=true;});exportRoot.tan_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(Math.tan(trig(parseFloat(current)))));toClear=true;});exportRoot.arcTan_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(trig2(Math.atan(parseFloat(current)))));toClear=true;});exportRoot.sinh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(sinh(parseFloat(current))));toClear=true;});exportRoot.arcSinh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(aSinh(parseFloat(current))));toClear=true;});exportRoot.cosh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(cosh(parseFloat(current))));toClear=true;});exportRoot.arcCosh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(aCosh(parseFloat(current))));toClear=true;});exportRoot.tanh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(tanh(parseFloat(current))));toClear=true;});exportRoot.arcTanh_btn.addEventListener("mousedown",function()
{toClear=true;addNum(String(aTanh(parseFloat(current))));toClear=true;});exportRoot.memoryAdd_btn.addEventListener("mousedown",function()
{setMemory(0);});exportRoot.memorySubtract_btn.addEventListener("mousedown",function()
{setMemory(1);});exportRoot.memoryRecall_btn.addEventListener("mousedown",function()
{getMemory();});exportRoot.memoryClear_btn.addEventListener("mousedown",function()
{clrMemory();});toggleSecondFunction(true)
setSign(0);toggleButtonHighlight("none");}
function toggleButtonHighlight(buttonName)
{exportRoot.operatorHighlightAdd_mc.visible=false;exportRoot.operatorHighlightMultiply_mc.visible=false;exportRoot.operatorHighlightSubtract_mc.visible=false;exportRoot.operatorHighlightDivide_mc.visible=false;exportRoot.operatorHighlightYPowX_mc.visible=false;exportRoot.operatorHighlightYSquareRootX_mc.visible=false;exportRoot.operatorHighlightEE_mc.visible=false;if(buttonName!="none")
{exportRoot["operatorHighlight"+capitaliseString(buttonName)+"_mc"].visible=true;}}
function toggleRadians(evt)
{radians=!radians;if(radians==true)
{exportRoot.raddeg.gotoAndStop(1);exportRoot.raddeg_btn.gotoAndStop(1);exportRoot.rad_Deg_lab.gotoAndStop(1);}
else
{exportRoot.raddeg.gotoAndStop(0);exportRoot.raddeg_btn.gotoAndStop(0);exportRoot.rad_Deg_lab.gotoAndStop(0);}}
function toggleSecondFunctionEventHandler(evt)
{toggleSecondFunction(false);}
function toggleSecondFunction(initialise)
{if(initialise==true)
{exportRoot.second_text.gotoAndStop(1);exportRoot.firstFunction_btn.visible=false;exportRoot.arcSin_btn.visible=false;exportRoot.arcCos_btn.visible=false;exportRoot.arcTan_btn.visible=false;exportRoot.log2_btn.visible=false;exportRoot.arcSinh_btn.visible=false;exportRoot.arcCosh_btn.visible=false;exportRoot.arcTanh_btn.visible=false;exportRoot.twoPowX_btn.visible=false;}
else
{exportRoot.firstFunction_btn.visible=!exportRoot.firstFunction_btn.visible;exportRoot.sin_btn.visible=!exportRoot.sin_btn.visible;exportRoot.cos_btn.visible=!exportRoot.cos_btn.visible;exportRoot.tan_btn.visible=!exportRoot.tan_btn.visible;exportRoot.ln_btn.visible=!exportRoot.ln_btn.visible;exportRoot.sinh_btn.visible=!exportRoot.sinh_btn.visible;exportRoot.cosh_btn.visible=!exportRoot.cosh_btn.visible;exportRoot.tanh_btn.visible=!exportRoot.tanh_btn.visible;exportRoot.eX_btn.visible=!exportRoot.eX_btn.visible;exportRoot.secondFunction_btn.visible=!exportRoot.secondFunction_btn.visible;exportRoot.arcSin_btn.visible=!exportRoot.arcSin_btn.visible;exportRoot.arcCos_btn.visible=!exportRoot.arcCos_btn.visible;exportRoot.arcTan_btn.visible=!exportRoot.arcTan_btn.visible;exportRoot.log2_btn.visible=!exportRoot.log2_btn.visible;exportRoot.arcSinh_btn.visible=!exportRoot.arcSinh_btn.visible;exportRoot.arcCosh_btn.visible=!exportRoot.arcCosh_btn.visible;exportRoot.arcTanh_btn.visible=!exportRoot.arcTanh_btn.visible;exportRoot.twoPowX_btn.visible=!exportRoot.twoPowX_btn.visible;if(exportRoot.second_text.currentFrame==0)
{exportRoot.second_text.gotoAndStop(1);exportRoot.second_lvl.text="1st";}
else
{exportRoot.second_text.gotoAndStop(0);exportRoot.second_lvl.text="2nd";}}}
function trig(num)
{return(!radians)?num*Math.PI/180:num;}
function trig2(num)
{if(!radians)
{return num*180/Math.PI;}
else
{return num;}}
function factorial(num)
{var temp;if(num>103)
{temp="Error";}
else
{if(num==0)
{temp=1}
else
{temp=num;for(var i=temp;i>1;i--)
{temp*=i-1;}}}
return temp;}
function setMemory(type)
{if(type==0)
{memory+=parseFloat(current);}
else
{memory-=parseFloat(current);}
exportRoot.operatorHighlightMemory_mc.visible=true;toClear=true;}
function getMemory()
{toClear=true;addNum(String(memory));toClear=true;}
function clrMemory()
{memory=0;exportRoot.operatorHighlightMemory_mc.visible=false;toClear=true;};function clearLastCalc()
{var emptyArray=new Array();g_LastCalc=emptyArray;}
function clearMathArray()
{var emptyArray=new Array();g_MathArray=emptyArray;}
function clearScreen()
{toggleButtonHighlight("none");clearLastCalc();clearMathArray();g_ArrayIndex=0;g_Clear=true;prev="";setSign(0);addNum("0");exportRoot.acc.gotoAndStop(1)
toClear=true;}
function GetEPos(number)
{return number.search(".e");}
function trimWithE(number,stringMaxLength)
{var ePos=GetEPos(number);var spareString=number.substr(ePos,number.length);number=number.slice(0,stringMaxLength-spareString.length);number=number+spareString;return number;}
function addNum(number)
{toggleButtonHighlight("none");exportRoot.acc.gotoAndStop(0);if(number=="Infinity")
{number="Error";}
if(number=="NaN")
{number="Error";}
if(parseFloat(number)>0&&parseFloat(number)<parseFloat(MinFloat))
{number="Error";}
if(g_bEqualsPressed==true)
{clearScreen();}
if(number==undefined)number=0;var len=number.toString().match(/-/)?17:16;var cLen=number=="-"?17:(current.toString().match(/-/)?17:16);if(number.length>=len&&(parseFloat(number)!=parseInt(number)))
{var ePos=GetEPos(number);if(ePos==-1)
{number=parseFloat(number).toPrecision(len-Math.min(parseFloat(number).toPrecision(len).length-len,len-1));number=number.slice(0,len);}
else
{number=trimWithE(number,len);}}
if(current.length<cLen||toClear)
{if(toClear||current=="0")
{current=number;toClear=false;}
else
{current+=number;}
exportRoot.output_txt.text=current;g_MathArray[g_ArrayIndex]=current;if(g_numPressed==true)
{clearLastCalc();}
g_numPressed=true;}}
function setSign(newSign)
{if(isLowOrderSign(g_MathArray[g_MathArray.length-1])&&isLowOrderSign(signs[newSign]))
{g_MathArray[g_ArrayIndex-1]=signs[newSign];}
else
{sign=newSign;prev=current;toClear=true;if(g_ArrayIndex>=1&&isSign(g_MathArray[g_ArrayIndex-1])&&g_MathArray[g_ArrayIndex-1]!=signs[sign]&&g_numPressed==false)
{g_MathArray[g_ArrayIndex-1]=signs[sign];}
else if((showNum&&g_numPressed)||(showNum&&g_LastCalc.length==2))
{if((g_Clear==true||g_numPressed)&&newSign!=0)
{g_Clear=false;g_MathArray[g_ArrayIndex++]=prev;g_MathArray[g_ArrayIndex++]=signs[sign];clearLastCalc();}
else
{g_MathArray[g_ArrayIndex-1]=signs[sign];clearLastCalc();}}
g_bEqualsPressed=false;}}
function CalcE()
{var num;if(parseFloat(prev)!=parseInt(prev))
{num=parseFloat(prev+"e"+current);}
else
{num=parseFloat(prev+".e"+current);}
return num;}
function calc()
{var num;if(sign==1)
{num=parseFloat(prev)+parseFloat(current);}
else if(sign==2)
{num=parseFloat(prev)-parseFloat(current);}
else if(sign==3)
{var num1=parseFloat(prev);var num2=parseFloat(current);num=parseFloat(prev)*parseFloat(current);num=parseFloat(num1)*parseFloat(num2);}
else if(sign==4)
{num=parseFloat(prev)/parseFloat(current);}
else if(sign==5)
{num=Math.pow(parseFloat(prev),parseFloat(current));}
else if(sign==6)
{num=Math.pow(parseFloat(prev),1/parseFloat(current));}
else if(sign==7)
{num=CalcE();}
else
{num=parseFloat(current);}
current="";prev="";if(showNum==true)
{addNum(num);}
else
{g_CalcResult=num;}
toClear=true;setSign(0);}
function GetSignIndex(signItem)
{for(var i=0;i<signs.length;i++)
{if(signs[i]==signItem)
{return i;}}
return 0;}
function cPressed()
{if(current=="0")
{clearScreen();}
else
{exportRoot.acc.gotoAndStop(0);current="0";exportRoot.output_txt.text=current;if(g_MathArray.length>1&&isSign(g_MathArray[g_ArrayIndex-1]))
{toggleButtonHighlight(signsText[GetSignIndex(g_MathArray[g_ArrayIndex-1])]);}}}
function isLowOrderSign(signInput)
{for(var i=0;i<lowOrderSigns.length;i++)
{if(signInput==lowOrderSigns[i])
{return true;}}
return false;}
function calculateAt(index,tempArray)
{if(index<tempArray.length&&index>0)
{showNum=false;prev=tempArray[index-1];sign=GetSignIndex(tempArray[index]);current=tempArray[index+1];g_LastCalc[0]=tempArray[index];g_LastCalc[1]=tempArray[index+1];calc();showNum=true;return removeFromArray(tempArray,index-1,index+1,g_CalcResult);}
return tempArray;}
function GetLeftBracket(tempArray)
{for(var i=0;i<tempArray.length;i++)
{if(tempArray[i]=="(")
{return i;}}
return-1;}
function GetRightBracket(tempArray)
{for(var i=tempArray.length;i>0;i--)
{if(tempArray[i]==")")
{return i;}}
return tempArray.length;}
function removeFromArray(tempArray,index1,index2,replacementValue)
{var newTempArray=new Array();var count=0
for(var i=0;i<tempArray.length;i++)
{if(i<index1||i>index2)
{newTempArray[count++]=tempArray[i];}
else if(i==index1&&replacementValue!="")
{newTempArray[count++]=replacementValue;}}
return newTempArray;}
function checkForBrackets(tempArray)
{var leftIndex=GetLeftBracket(tempArray);var rightIndex=GetRightBracket(tempArray);if(leftIndex!=-1)
{var newTempArray=new Array();var count=0
for(var i=leftIndex+1;i<rightIndex;i++)
{newTempArray[count++]=tempArray[i];}
var theResult=CalculateUsingArray(newTempArray);newTempArray=removeFromArray(tempArray,leftIndex,rightIndex,theResult);return newTempArray;}
return tempArray;}
function isSign(input)
{for(var j=0;j<signOrder.length;j++)
{if(signOrder[j]==input)
{return true;}}
return false;}
function CalculateUsingArray(tempArray)
{var newTempArray=new Array();newTempArray=checkForBrackets(tempArray);for(var j=0;j<signOrder.length;j++)
{var i=newTempArray.length;while(newTempArray.length>1&&i>=1)
{if(newTempArray[i]==signOrder[j])
{newTempArray=calculateAt(i,newTempArray);}
i--;}}
return newTempArray;}
function EqualsPressed()
{toggleButtonHighlight("none");if(g_numPressed==false)
{if(g_LastCalc.length==2)
{g_MathArray[g_MathArray.length]=g_LastCalc[0];g_MathArray[g_MathArray.length]=g_LastCalc[1];CalculateResult();}}
else
{PreCalculateResult()}
g_bEqualsPressed=true;}
function CalculateResult()
{g_MathArray=CalculateUsingArray(g_MathArray);current="";prev="";g_ArrayIndex=g_MathArray.length-1;toClear=true;g_numPressed=false;addNum(g_MathArray[g_ArrayIndex]);g_numPressed=false;g_Clear=true;}
function PreCalculateResult()
{var newTempArray=new Array();newTempArray=g_MathArray;if(g_MathArray.length>1)
{if(isSign(g_MathArray[g_MathArray.length-1]))
{if(g_MathArray.length==2)
{g_MathArray[g_ArrayIndex++]=g_MathArray[0]}
else
{g_MathArray=removeFromArray(g_MathArray,g_MathArray.length-1,g_MathArray.length-1,"");}}
CalculateResult();}}
function MidForulaCalculate()
{var lastInput=g_MathArray[g_MathArray.length-1];g_MathArray=removeFromArray(g_MathArray,g_MathArray.length-1,g_MathArray.length-1,"");CalculateResult();g_ArrayIndex++;g_MathArray[g_ArrayIndex++]=lastInput;g_numPressed=true;toClear=true;}
function CanCalculateNow()
{if(g_MathArray.length>=3)
{if(isLowOrderSign(g_MathArray[g_MathArray.length-1])==true)
{MidForulaCalculate();return true;}}
return false;}
function PressSquare(powerBut)
{if(g_MathArray.length>1)
{toClear=true;addNum(String(Math.pow(parseFloat(current),powerBut)));toClear=true;}
else
{setSign(5);addNum(String(powerBut));EqualsPressed();}}
function PressSquareRt()
{if(g_MathArray.length>1)
{toClear=true;addNum(String(Math.sqrt(parseFloat(current))));toClear=true;}
else
{setSign(6);addNum("2");EqualsPressed();}}
function sinh(num)
{return(Math.pow(Math.E,num)-Math.pow(Math.E,-num))/2;}
function cosh(num)
{return(Math.pow(Math.E,num)+Math.pow(Math.E,-num))/2;}
function tanh(num)
{return sinh(num)/cosh(num);}
function aSinh(num)
{return Math.log(num+Math.sqrt(Math.pow(num,2)+1));}
function aCosh(num)
{return Math.log(num+Math.sqrt(Math.pow(num,2)-1));}
function aTanh(num)
{return 0.5*Math.log((1+num)/(1-num));}
function capitaliseString(str)
{var firstChar=str.substr(0,1);var restOfString=str.substr(1,str.length);return firstChar.toUpperCase()+restOfString;}
function hoverHandler(event)
{var tmp=event.target.parent[event.target.name];if(event.type=="rollOut")
{tmp.gotoAndStop(0);}
else if(event.type=="rollOver")
{tmp.gotoAndStop(1);}}
this.keyboardEventFromOutside=function(keyEvent)
{pressKey(keyEvent);}
function pressKey(keyEvent)
{if(parseInt(keyEvent.key)>=0&&parseInt(keyEvent.key)<=9)
{addNum(keyEvent.key)
exportRoot['c'+keyEvent.key+'_btn'].gotoAndPlay(2);}
if(keyEvent.key=='/'||keyEvent.key.toLowerCase()=="divide")
{exportRoot.divide_btn.dispatchEvent("mousedown");}
if(keyEvent.key=='+'||keyEvent.key.toLowerCase()=="add")
{exportRoot.add_btn.dispatchEvent("mousedown");}
if(keyEvent.key=='-'||keyEvent.key.toLowerCase()=="subtract")
{exportRoot.subtract_btn.dispatchEvent("mousedown");}
if(keyEvent.key=='*'||keyEvent.key.toLowerCase()=="multiply")
{exportRoot.multiply_btn.dispatchEvent("mousedown");}
if(keyEvent.key.toLowerCase()=="enter"||keyEvent.key==" "||keyEvent.key=="=")
{exportRoot.equals_btn.gotoAndPlay(3)
exportRoot.equals_btn.dispatchEvent("mousedown");}
if(keyEvent.key.toLowerCase()=="c")
{exportRoot.allClear_btn.gotoAndPlay(3)
exportRoot.allClear_btn.dispatchEvent("mousedown");}
if(keyEvent.key=='.'||keyEvent.key.toLowerCase()=="decimal")
{exportRoot.point_btn.gotoAndPlay(3)
exportRoot.point_btn.dispatchEvent("mousedown");}}}
