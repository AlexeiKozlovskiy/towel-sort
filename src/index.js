
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
	if (!matrix || matrix.length === 0) return array;
    for (let i = 0; i < matrix.length; i++) {
		if (i % 2 === 0) {
			array = array.concat(matrix[i].sort((a, b) => a - b));
		} else {
			array = array.concat(matrix[i].sort((a, b) => b - a));
		}
	};
	return array;

}
