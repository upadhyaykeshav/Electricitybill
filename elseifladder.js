let unit=prompt('Enter no. of unit consumed')
if (unit>90)
{
    document.write("your electricity bill per Unit 18Rs is :-",unit*18)
}
else if(unit>80)
{
    document.write("your electricity bill per Unit 15Rs is :-",unit*15)
}
else if(unit>70)
{
    document.write("your electricity bill per Unit 13Rs is :-",unit*13)
}
else if(unit>60)
{
    document.write("your electricity bill per Unit 11Rs is :-",unit*11)
}
else if(unit>50)
{
    document.write("your electricity bill per Unit 9Rs is :-",unit*9)
}
else{
    document.write("your electricity bill per Unit 6Rs is :-",unit*6)
}