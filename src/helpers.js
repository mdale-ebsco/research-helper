
export function cleanHTML(text) {
  for(var i=0; i < text.length; i++){
    // text = text.replace("&lt;highlight&gt;","<span class='highlight'>");
    // text = text.replace("&lt;/highlight&gt;","</span>");

    text = text.replace("&lt;highlight&gt;","");
    text = text.replace("&lt;/highlight&gt;","");
  }
    return text;
}

export function cleanTitle(text){

  text = cleanHTML(text);
  text = text.replace(/.$/, "");

  return text;
}
