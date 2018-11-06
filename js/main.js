function Table() {
    this.section = document.getElementById('section');
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.th = document.createElement('th');
    
    this.td = document.createElement('td');
    this.tr = document.createElement('tr');

    this.create_table = function(){
        this.section.appendChild(this.table);
        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);
        this.thead.appendChild(this.tr);
        for (var i = 0;i < 5;  i++){
            this.th.innerHTML = i;
            
            this.tr.appendChild(this.th);
        }






    };

    this.add_table = function(){

    }
}

var obj_table = new Table();
console.log(obj_table);
obj_table.create_table();

