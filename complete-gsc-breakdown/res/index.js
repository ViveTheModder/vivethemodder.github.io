const toggleListCollection = document.getElementsByClassName("toggleUL");
const toggleSrcCollection = document.getElementsByClassName("toggleSrc");
const toggleTextCollection = document.getElementsByClassName("toggleText");
const toggleSrcTextCollection = document.getElementsByClassName("toggleSrcText");

function toggleList(index)
{   
    let toggleUL = toggleListCollection[index];
    let toggleText = toggleTextCollection[index];
    if (toggleUL.style.display === "none")
    {
        toggleUL.style.display = "block";
        toggleText.innerHTML = "[hide]";
    }
    else
    {
        toggleUL.style.display = "none";
        toggleText.innerHTML = "[show]";
    }
}
function toggleImg(index)
{
    let toggleSrc = toggleSrcCollection[index];
    let toggleSrcText = toggleSrcTextCollection[index];
    if (toggleSrc.style.display === "none")
    {
        toggleSrc.style.display = "block";
        toggleSrcText.innerHTML = "[hide source code]";
    }
    else
    {
        toggleSrc.style.display = "none";
        toggleSrcText.innerHTML = "[view source code]";
    }
}