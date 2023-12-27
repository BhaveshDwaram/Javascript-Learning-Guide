let t=document.body.firstElementChild.firstElementChild;
console.log(t);// returns table
console.log(t.rows);//html collection of tr
console.log(t.caption);// returns caption
console.log(t.tHead.firstElementChild);// returns tr
console.log(t.tFoot);
console.log(t.rows[0].rowIndex);
console.log(t.rows[1].rowIndex);
console.log(td.cellIndex);