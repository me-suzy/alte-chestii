var omitformtags=["input", "textarea", "select"]

function disableselect(e){
for (i = 0; i < omitformtags.length; i++)
if (omitformtags[i]==(e.target.tagName.toLowerCase()))
return;
return false
}

function reEnable(){
return true
}

function noSelect(){
	if (typeof document.onselectstart!="undefined"){
		document.onselectstart=new Function ("return false")
		if (document.getElementsByTagName){
			tags=document.getElementsByTagName('*')
			for (j = 0; j < tags.length; j++){
				for (i = 0; i < omitformtags.length; i++)
				if (tags[j].tagName.toLowerCase()==omitformtags[i]){
					tags[j].onselectstart=function(){
						document.onselectstart=new Function ('return true')
					}
					tags[j].onmouseup=function(){
						document.onselectstart=new Function ('return false')
					}
				}
			}
		}
	}
	else{
		document.onmousedown=disableselect
		document.onmouseup=reEnable
	}
}

function noclick(){
	document.oncontextmenu=new Function ("return false");
}

function cuplate(){
	noSelect();
	noclick();
}

//window.onload=cuplate;
//window.onload=noclick;