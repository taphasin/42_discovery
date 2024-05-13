let coloring = ['red','green','blue'];
let index_color = 0;

function grow(element){
    var width = element.offsetWidth + 10;
    var height = element.offsetHeight + 10;
    if (width > 420){
        width = 200;
        height = 200;
    }
    grow_able(element,width,height);
}

function grow_able(element,width,height){
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    index_color += 1;
    if (index_color >= 3){
        index_color = 0
    }
    element.style.backgroundColor = coloring[index_color];
}

function reduce(element){
    var width = element.offsetWidth - 5;
    var height = element.offsetHeight - 5;
    if (width < 200){
        width = 200;
        height = 200;
    }
    reduce_able(element,width,height);
}

function reduce_able(element,width,height){
    element.style.width = width + 'px';
    element.style.height = height + 'px';

    if (index_color <= 0){
        index_color = 3
    }
    index_color -= 1;
    element.style.backgroundColor = coloring[index_color];
    console.log(index_color);
}