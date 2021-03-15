var getMonth, getDay, calendarElement;
getMonth = prompt("Month 1-12")
getDay = prompt("Start Day 1-7")
calendarElement = document.getElementById('calendar-element')

function Calendar(element, month, day) {

    const numOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let monthName = ''
    
    if (month == 1){    
        monthName = 'JANUARY'
    }
    
    else if (month == 2){
        monthName = 'FEBRUARY'
    }
    
    else if (month == 3){
        monthName = 'MARCH'
    }
    
    else if (month == 4){
        monthName = 'APRIL'
    }
    
    else if (month == 5){
        monthName = 'MAY'
    }
    
    else if (month == 6){
        monthName = 'JUNE'
    }
    
    else if (month == 7){
        monthName = 'JULY'
    }
    else if (month == 8){
        monthName = 'AUGUST'
    }
    
    else if (month == 9){
        monthName = 'SEPTEMBER'
    }
    else if (month == 10){
        monthName = 'OCTOBER'
    }
    
    else if (month == 11){
        monthName = 'NOVEMBER'
    }
    
    else if (month == 12){
        monthName = 'DECEMBER'
    }
    
    else 
    {
        monthName = "Invalid Input"
    }

    let calendarWeeks = 0
    let calendarDays = 1
    let count = 1
    let createTable = 
        `<table>
            <tr>
            <td colspan = "7"id="month" style="text-align:center; border: 1px solid black; font-size: larger;">
            ${monthName}
            </td>
            </tr>
            <tr>
                <th style=color:black; background-color: red; text-align:center">
                Sunday
                </th>
                <th style="text-align:center">
                Monday
                </th>
                <th style="color:black; background-color: white; text-align:center">
                Tuseday
                </th>
                <th style="text-align:center" >
                Wednesday
                </th>
                <th style="color:black; background-color: white; text-align:center">
                Thursday
                </th>
                <th style="text-align:center">
                Friday
                </th>
                <th style="color:black; background-color: white; text-align:center">
                Saturday
                </th>
            </tr>`
    
if(month > 12 || day > 7)
{
    element.innerHTML = ('<h2 style="text-align: center; color: black; background-color:white;">Invalid Input!</h2>')
}
else if(month == 0 || day == 0)
    element.innerHTML = ('<h2 style="text-align: center; color: black; background-color:white;">Invalid Input!</h2>')
    else
    {
        if(numOfDays[month-1] == 31)
        {
            if(day >= 6)
            {
                for (let i = 0; i < 42; i++) 
                {
                    if (calendarWeeks == 0) 
                    {
                        createTable  += '<tr>'
                    }
                    if (count <= day - 1)
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"

                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
                    if (calendarWeeks == 6) 
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) 
                {
                    if (calendarWeeks == 0)
                    {
                        createTable  += '<tr>'
                    }
            
                    if (count <= day - 1) 
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"

                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
                    if (calendarWeeks == 6)
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }   
        }
        else if(numOfDays[month-1] == 28)
        {
            if(day >= 6)
            {
                for (let i = 0; i < 35; i++) 
                {
                    if (calendarWeeks == 0)
                    {
                        createTable  += '<tr>'
                    }
                    if (count <= day - 1) 
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"
                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
                    if (calendarWeeks == 6) 
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }

            else
            {
                for (let i = 0; i < 28; i++)
                {
                    if (calendarWeeks == 0) 
                    {
                        createTable  += '<tr>'
                    }
                    if (count <= day - 1) 
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"
                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
                    if (calendarWeeks == 6) 
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }
        }
        else{
            if(day >= 6){
                for (let i = 0; i < 35; i++) 
                {
                    if (calendarWeeks == 0) 
                    {
                        createTable  += '<tr>'
                    }
                    if (count <= day - 1) 
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"
                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
                    if (calendarWeeks == 6) 
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }
            else
            {
                for (let i = 0; i < 35; i++)
                {
                    if (calendarWeeks == 0) 
                    {
                        createTable  += '<tr>'
                    }
                    if (count <= day - 1) 
                    {
                        createTable  += "<td></td>"
                        count++
                    }
                    else if (calendarDays > numOfDays[month - 1])
                        createTable  += "<td></td>"
                    else 
                    {
                        if (calendarDays <= numOfDays[month - 1]) 
                        {
                            createTable  += `<td>${calendarDays}</td>`
                            calendarDays++
                        }
                        else
                            createTable  += "<td></td>"
                    }
            
                    if (calendarWeeks == 6) 
                    {
                        createTable  += '</tr>'
                        calendarWeeks = 0
                    }
                    else 
                    {
                        calendarWeeks++
                    }
                }
            }
        }
        createTable  += '</table>'
        element.innerHTML = createTable ;
        }
    }

Calendar(calendarElement, getMonth, getDay)
