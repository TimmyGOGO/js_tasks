
function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
      result += string;
    return result;
}

//"class" TextCell:    
function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
};
  
TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

//мой код:
function StretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

StretchCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

StretchCell.prototype.draw = function(width, height) {
    var w = ( width > this.width ) ? width : this.width;
    var h = ( height > this.height ) ? height : this.height;
    return this.inner.draw(w, h - 1)
      .concat([repeat(" ", w)]);
};

//checking:
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]


