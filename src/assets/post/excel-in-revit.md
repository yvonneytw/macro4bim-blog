# Excel in Revit

Since I have memory, every BIM Manager and Coordinator tried to efficiently link the Revit database with an Excel spreadsheet.

This is for numerous various reasons, first in line is the **simplicity and speed** in organizing data using Excel.

At Macro4BIM we developed our custom solution to meet some requirement not always met by other solutions:

- Keep the Excel database as similar as possible with Revit Schedule
- deal with Family Instances and Type from the same Excel line
- built custom function on top of this Revit Excel link.

## How to use

pyM4B already has **ready-made function** that can be used to export the active schedule (the one visible on your screen) directly to Excel, naming the Excel worksheet according to your Schedule name.

but in short:

1. Define excel location and name
2. Wait till the export be completed.
   - this operation can take a little bit as the function is literally creating from scratch the Excel database, extracting all the relevant information such as parameters value, name and element Id per each of the Schedule row.
3. Edit the Excel making sure you don't alter the first 2 columns (the ones with the Instances and Types Id)
4. Import back
   - this operation might also take a few seconds, it is officially setting all the written in each Excel cell.
5. Enjoy 😁

`< GIF with export Example >`

## Behind the scenes

In detail, this function use a custom IronPython library which you can find in our extension. We encourage you to explore that and, if you feel like, use the same for you personal script! (this motivational message comes of course with the invitation to scare your experience here on the blog)
