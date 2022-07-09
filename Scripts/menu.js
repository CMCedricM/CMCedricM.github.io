
class navigation extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `<nav>
        | <a href="../index.html" class="nav-bar">Home</a> | <a href="./projects.html" class="nav-bar">Projects</a> 
        | <a href="./photography.html" class="nav-bar">Photography</a> | <a href="./aboutMe.html" class="nav-bar">About Me</a> |
        </nav> `
        console.log("Hello");
    }
}

customElements.define("menu-bar", navigation); 
