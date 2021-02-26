const { count } = require("console");
const { create } = require("domain");
const { createElement } = require("react");

class Form{
    constructor(){
        
    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing Game')
        title.position(130, 0);
        var input = createInput('name')
        var button = create('Play')
        var gretting = createElement('h3')
        input.position(130,160)
        button.position(250, 200)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            PlayerCount += 1 ;
            player.update(name);
            player.update(PlayerCount);
            greeting.html('Hello' + name)
            greeting.postion(130,160);
        })
    }
}