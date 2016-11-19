var cal_box=document.getElementById('cal_box'),
	display=document.getElementById('display'),
	displayResult=document.getElementById('displayResult'),
	cal_result="",//存放运算结果
	list1="",	//存放输入的第一个值
	list2="",	//存放第二个值
	num1=0,		//第一个值
	num2=0,		//第二个值
	sym="",		//运算符号
	eql="",		//等于号			
	flag=false;

document.addEventListener('click',function(e){
	var target=e.target;
	//输入第一个值
	if (!flag) {
		if(target.className=='btn') {			
			list1+=target.value;
			num1=parseFloat(list1);
			display.innerHTML=num1;
		}
	};
	//输入运算符号
	if(target.className=='sym') {
		flag=true;
		sym=target.value;
		list2="";//当改选运算符号时，清除原先输入的数，重新输入
		display.innerHTML=num1+sym;						
	};

	//输入第二个值
	if(flag){	//如果按了运算符号的键就输入第二个数
		if (target.className=='btn') {
				
				
			list2+=target.value;
			num2=parseFloat(list2);
			display.innerHTML=num1+sym+num2;

		};
	}
	//进行计算并输出结果
	if (target.className=='eql') {	//判断是否是按了等于键
		eql=target.value;
		if (flag) {
			switch(sym){
				case '/': cal_result=parseFloat(num1/num2);break;
				case '*': cal_result=parseFloat(num1*num2);break;
				case '-': cal_result=parseFloat(num1-num2);break;
				case '+': cal_result=parseFloat(num1+num2);break;
			}
			displayResult.innerHTML=cal_result;//显示输出结果
			
		}else{
			displayResult.innerHTML=num1;//没有运算时，直接输出第一个数
		}
		flag=false;
		list1="";//每次在显示完，再次输入时自动清屏，
		list2="";//这两个一定要清空，否则需要按清空键才能再次输入
		sym="";
	};
	//清屏
	if (target.className=='cl') {
		display.innerHTML="";	//将显示屏清空
		flag=false;		
		list1="";	//输入按键但没有进行运算，按清屏键后不保留之前输入的值
		list2="";
		displayResult.innerHTML="";//清除上次运算的结果
		
		
	};

})
