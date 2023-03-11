import Typed from 'typed.js';

export const renderHome = ( codePart ) => {
    const typedCodePart = document.createElement('div');
    typedCodePart.innerHTML = `
        <div id="typed" class="container-fluid">
            <div class="row">
                <div class="clear-fix">
                    <div>
                        <img src="/assets/images/Hi.png" class="col-4 float-md-end mb-3 ms-md-3 rounded-5" id="myPhoto"></img>
                    </div>
                    <div id="code" class="col-8 float-sm-start mb-3 ms-md-3">
                        <span class="auto-typed"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear-fix"></div>
        <div class="container">
            <div class="row">
                <div id="presentation" class="col-12">
                    <h1 id="homeTitle">
                        Hello There!
                    </h1>
                    <h1 id="homeTitle">
                        I'm Franco <span id="visibility">Borzi.</span>
                    </h1>
                    <h3 id="homeSubtitle">
                        I'm a <span id="develop">Full Stack Web Developer.</span>
                    </h3>
                </div>
            </div>
        </div>
    `;

    typedCodePart.querySelector("#code").innerHTML = `
        <span class="auto-typed"></span>
    `;

    codePart.appendChild(typedCodePart);

    var typed = new Typed(".auto-typed", {
        strings: ['<p id="homeParagraph"><span id="visibility">public class</span><span id="general"> Developer{ <br></span>&emsp;&emsp;&emsp;&emsp;<span id="visibility">private</span><span id="general"> String</span> <span id="attribute">name</span><span id="general">;</span><br>&emsp;&emsp;&emsp;&emsp;<span id="visibility">private</span><span id="general"> String</span> <span id="attribute">type</span><span id="general">;</span><br><br>&emsp;&emsp;&emsp;&emsp;<span id="visibility">public</span><span id="constructor"> Developer</span><span id="general">(String name, String type){<br></span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="visibility">this</span><span id="general">.</span><span id="attribute">name</span><span id="general"> = name;</span><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id="visibility">this</span><span id="general">.</span><span id="attribute">type</span><span id="general"> = type;</span><br>&emsp;&emsp;&emsp;&emsp;<span id="general">}<br>}<br></span><br><span id="general">Developer developer =</span><span id="visibility"> new </span><span id="general">Developer(</span><span id="strings">"Franco Borzi"</span><span id="general">,</span><span id="strings"> "Full Stack Web Developer"</span><span id="general">);</span></p><p id="homeParagraph"> <span id="general">System.out.println(</span><span id="strings">"Hello There!"</span><span id="general">);<br></span><span id="general">System.out.println(</span><span id="strings">"Im "</span><span id="general"> + developer.getName());<br></span><span id="general">System.out.println(</span><span id="strings">"Im a "</span><span id="general"> + developer.getType());<br></span></p>'],
        showCursor: false,
        typeSpeed: 80,
        backDelay: 2000,
        backSpeed: 100,
        loop: true,
    });

}