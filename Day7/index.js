const func = () => {
    const main = document.getElementById("main-display");

    //Create a Sub Div
    const subdiv = document.createElement("div");
    subdiv.className = "Sub-Div";
    const inp = document.getElementById("main-options-input").value;

    var text = "No Programmed Output";

    if (inp =="Hello") {
        text="Hii"
    }
    else if(inp=="How Are U?")
    {
        text="I Am Fine , What About U?"
    }
    else if(inp=="I am Fine")
    {
        text="I am Good , Thanks For Asking"
    }
    //Creating "You" Text
    const user_text = document.createElement("p");
    user_text.innerText = "You";
    user_text.className = "User-Text";
    subdiv.appendChild(user_text);

    //Creating "You" Text
    const user_inp = document.createElement("p");
    user_inp.innerText = inp;
    user_inp.className = "User-Inp";
    subdiv.appendChild(user_inp);

    //Creating "You" Text
    const bot_inp = document.createElement("p");
    bot_inp.innerText = "Chatbot";
    bot_inp.className = "Bot-Text";
    subdiv.appendChild(bot_inp);

    //Creating "You" Text
    const bot_out = document.createElement("p");
    bot_out.innerText = text;
    bot_out.className = "Bot-Out";
    subdiv.appendChild(bot_out);



    main.appendChild(subdiv);

    document.getElementById("main-options-input").value=""
}
const btn = document.getElementById("main-option-button");
btn.addEventListener('click', () => {
    func()
});