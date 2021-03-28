function update()
{
    if(parseInt(sub.value) <= 10000  && parseInt(sub.value) >= 100)
    {
        tax.value = (0.12 * sub.value);
        total.value = parseInt(tax.value) + parseInt(sub.value);
        amount.disabled = false;
        amount.value = total.value;
        amount.min = total.value;
        change.value = parseInt(amount.value) - parseInt(total.value);
        pay.disabled = false;
        pay.style.backgroundColor = "green";
    }

    else
    {
        tax.value = ""
        total.value = ""
        amount.value = ""
        change.value = ""
        amount.disabled = true;
        pay.disabled = true;
        pay.style.backgroundColor = "red";
    }

}

function update2()
{
    change.value = parseInt(amount.value) - parseInt(total.value);
    if(parseInt(change.value) >= 0)
    {
        pay.disabled = false;
        pay.style.backgroundColor = "green";
    }
                
    if(parseInt(change.value) < 0)
    {
        pay.disabled = true;
        pay.style.backgroundColor = "red";
    }
}

function myFunction() 
{

}