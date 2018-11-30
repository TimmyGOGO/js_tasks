//загрузка dataset:
var aF = JSON.stringify([
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
    {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
    {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
    {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
    {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
    {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
    {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
    {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
    {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
    {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
    {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
    {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
    {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
    {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
    {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
    {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
    {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
    {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
    {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
    {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
    {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
    {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
]);
var ancestry = JSON.parse(aF);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
   
// Мой код:
//------------------------------------------------
//вспомогательная функция:
function isInSet(keyName, set){
    if ( keyName in set ) return true;
    else return false;
}

/*получим ассоциативный массив, где:
 *ключи - века
 *элементы - массивы с возрастами людей
*/
let centuryGroups = {}; 
ancestry.forEach(function(person){
    function getCentury(p){ return Math.ceil(p.died / 100); }
    function getAge(p){ return p.died - p.born; }
    
    let century = getCentury(person);

    if ( !isInSet(century, centuryGroups) ) centuryGroups[century] = [];

    centuryGroups[century].push(getAge(person));
});

//теперь для каждого века посчитаем средний возраст:
Object.keys(centuryGroups).forEach( function(century){
    console.log( century + ": " + average(centuryGroups[century]).toFixed(1));
});

// результат: 
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

//------------------------------------------------
//абстрактная функция groupBy: возвращает ассоциативный массив
//array - массив, который нужно поделить на группы
//func - функция принадлежности элемента массива группе
//возвращает название группы для элемента массива
function groupBy(array, func){
    let groups = {}; 
    array.forEach( function(item){
        let groupName = func(item);
        if ( !isInSet(groupName, groups) ) groups[groupName] = [];
        
        groups[groupName].push(item);
    });
    return groups;
}

//пусть функция принадлежности, такая:
function byCentury(item){
    return Math.ceil(item.died / 100);
}

//тогда:
console.log("Сгруппировать людей по веку:");
let groups = groupBy(ancestry, byCentury);

//чтобы можно было проверить вывод:
Object.keys(groups).forEach( function(century){
    console.log(century + ":\n-------------");
    for (let person of groups[century]){
        console.log(`{name: ${person.name}, born: ${person.born}, died: ${person.died}}`);
    }
});

//результат:
/*
Сгруппировать людей по веку:
16:
-------------
{name: Pauwels van Haverbeke, born: 1535, died: 1582}
{name: Lievijne Jans, born: 1542, died: 1582}
17:
-------------
{name: Pieter Haverbeke, born: 1602, died: 1642}
{name: Lieven van Haverbeke, born: 1570, died: 1636}
{name: Lieven Haverbeke, born: 1631, died: 1676}
{name: Elisabeth Hercke, born: 1632, died: 1674}
{name: Anna van Hecke, born: 1607, died: 1670}
18:
-------------
{name: Maria de Rycke, born: 1683, died: 1724}
{name: Jan van Brussel, born: 1714, died: 1748}
{name: Lieven de Causmaecker, born: 1696, died: 1724}
{name: Livina Haverbeke, born: 1692, died: 1743}
{name: Pieter Bernard Haverbeke, born: 1695, died: 1762}
{name: Willem Haverbeke, born: 1668, died: 1731}
{name: Pieter Antone Haverbeke, born: 1753, died: 1798}
{name: Angela Haverbeke, born: 1728, died: 1734}
{name: Elisabeth Haverbeke, born: 1711, died: 1754}
{name: Bernardus de Causmaecker, born: 1721, died: 1789}
{name: Jacoba Lammens, born: 1699, died: 1740}
{name: Pieter de Decker, born: 1705, died: 1780}
{name: Joanna de Pape, born: 1654, died: 1723}
{name: Daniel Haverbeke, born: 1652, died: 1723}
{name: Martina de Pape, born: 1666, died: 1727}
{name: Jan Francies Haverbeke, born: 1725, died: 1779}
{name: Petronella de Decker, born: 1731, died: 1781}
{name: Laurentia Haverbeke, born: 1710, died: 1786}
{name: Jan Haverbeke, born: 1671, died: 1731}
19:
-------------
{name: Jan Frans van Brussel, born: 1761, died: 1833}
{name: Joanna de Causmaecker, born: 1762, died: 1807}
{name: Maria van Brussel, born: 1801, died: 1834}
{name: Livina Sierens, born: 1761, died: 1826}
{name: Carel Haverbeke, born: 1796, died: 1837}
{name: Jacobus Bernardus van Brussel, born: 1736, died: 1809}
20:
-------------
{name: Carolus Haverbeke, born: 1832, died: 1905}
{name: Emma de Milliano, born: 1876, died: 1956}
{name: Philibert Haverbeke, born: 1907, died: 1997}
{name: Emile Haverbeke, born: 1877, died: 1968}
{name: Maria Haverbeke, born: 1905, died: 1997}
{name: Maria Sturm, born: 1835, died: 1917}
21:
-------------
{name: Clara Aernoudts, born: 1918, died: 2012}
*/

