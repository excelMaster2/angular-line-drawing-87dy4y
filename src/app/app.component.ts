import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  i =0;
  devSteps = [ {name:'TEST', id:1}, {name:'PULL', id:2}, {name:'BUID', id:3}, {name:'DEPLOY',id:6}]
  prodSteps = [ {name:'DOCKER', id:4}, {name:'KUB', id:5}, {name:'JEN', id:7}];

  add(parent, succ){
    const parentElement = document.getElementById(parent.id);
    const childElement =  document.getElementById(succ);

    parentElement.classList.add('rightcon');
    childElement.classList.add('leftcon');

    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute('id','svg');

    const line = document .createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute('stroke-width', '1px');
    line.setAttribute('stroke', '#000000');
    line.setAttribute('marker-end', 'url(#triangle)');
    //line.setAttribute('stroke-dasharray','8');

    svg1.appendChild(line);
    
    document.body.appendChild(svg1);

    svg1.style.position='absolute';
    svg1.style.top='0';
    svg1.style.left='0';
    svg1.style.width='100%';
    svg1.style.height='100vh';
    svg1.style.zIndex='-2';

    const x1 = parentElement.getBoundingClientRect().right + 28;
    const x2 = childElement.getBoundingClientRect().left - 28;
    const y1 = parentElement.getBoundingClientRect().top + 27;
    const y2 = childElement.getBoundingClientRect().top + 27;

    line.setAttribute( 'x1', `${x1}` );
    line.setAttribute( 'x2', `${x2}` );
    line.setAttribute( 'y1', `${y1}` );
    line.setAttribute( 'y2', `${y2}` );

  }

}
