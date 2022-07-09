
class navigation extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `<nav>
        | <a href="../index.html" class="nav-bar">Home</a> | <a href="./projects.html" class="nav-bar">Projects</a> 
        | <a href="./photography.html" class="nav-bar">Photography</a> | <a href="./aboutMe.html" class="nav-bar">About Me</a> |
        </nav> `
    }
}


class footerNotes extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="padding-top: 100px;"/>
        <footer id="social-media" style= " font-weight: bold; background-color: rgb(18, 4, 18); color:white; ">
            
            <div style="padding-left: 5px; text-align:center; align-items: center;">
                
                <h2 style="text-align:center; padding-top:20px; font-size: 20pt;">Contact</h2>
                
                <div style="padding-left: 0px; margin-left: 0px; margin-top: 25px; font-size:13pt">
                
                    <span style="display: inline-block; text-align: center; margin: 50px; margin-top: 4px; width: fit-content"/>
                        <a style="font-size: large; color: white">Email:</a>
                        <br></br>
                        <a style="color:white">cedric.men@unlv.edu</a>
                    </span>

                    <span style=" display:inline-block; text-align: center; margin: 50px; margin-top: 4px; padding-left:5px; width: 148px"/>
                        <a style="font-size: large; color: white">Instagram:</a>
                        <br></br>
                        <a class="link-hover" href="https://www.instagram.com/invites/contact/?i=1g5xd1d7c6jmh&utm_content=1dxea5n" style="text-align: center; text-decoration: none;">@cm015</a>
                    </span>
                    
                    <span style="display: inline-block; text-align: center; margin:50px; margin-top: 4px; width:148px"/>
                        <a style="color:white;">GitHub:</a>
                        <br></br>
                        <a class="link-hover" href="https://github.com/CMCedricM" style="text-decoration: none;">@CMCedricM</a>
                    </span>
                
                </div>
            
            </div>
        
        </footer>
    </div>`
    }
}
customElements.define("menu-bar", navigation); 
customElements.define("footer-notes", footerNotes)
