const t2n = require('text-to-number');

module.exports = {
	add: (...nums) => 
		[...nums].splice(1).reduce((acc, cur) => acc + t2n(cur), t2n(nums[0])),
	substract: (...nums) => 
		[...nums].splice(1).reduce((acc, cur) => acc - t2n(cur), t2n(nums[0])),
	multiply: (...nums) =>
		[...nums].splice(1).reduce((acc, cur) => acc * t2n(cur), t2n(nums[0])),
	divide: (...nums) =>
		[...nums].splice(1).reduce((acc, cur) => acc / t2n(cur), t2n(nums[0])),
};
