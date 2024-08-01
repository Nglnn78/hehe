


status="Quốc Định"
var a=new Array(),n=""
a[1]='I';
a[2]='l';
a[3]='u';
a[4]='v';
a[5]='U';
a[6]='c';
a[7]='h';
a[8]='ụ';
a[9]='t';
a[10]='c';
a[11]='h';
a[12]='ụ';
a[13]='t';
a[14]='c';
a[15]='h';
a[16]='ụ';
a[17]='t';
a[18]='♥';
a[19]='♥';
a[20]='♥';
a[21]='♥';
a[22]=' ';
a[23]=' ';
a[24]=' ';
a[25]=' ';
a[26]=' ';
a[27]=' ';
a[28]=' ';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
				
					
					
				