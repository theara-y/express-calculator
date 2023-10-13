const CalculatorError = require('./error')

function validateNums(nums_csv) {
    if(nums_csv == undefined || nums_csv == '')
        throw new CalculatorError('nums is not defined', 400)

    nums_list = nums_csv.split(',')
    if(nums_list.some(num => isNaN(num)))
        throw new CalculatorError('nums can only contain numbers', 400)

    return nums_list.map(num => Number(num))
}

function mean(nums) {
    return nums.reduce((acc, cur) => acc += cur, 0) / nums.length
}

function median(nums) {
    return nums.sort()[Math.floor(nums.length / 2)]
}

function mode(nums) {
    nums.sort()
    let longestLength = 1
    let modeNum = nums[0]
    let left = 0

    for(let right = 1; right < nums.length; right++) {
        if(nums[left] != nums[right]) {
            left = right;
        }

        let windowSize = right - left + 1;
        if(windowSize > longestLength) {
            longestLength = windowSize;
            modeNum = nums[left]
        }
    }
    return modeNum
}

module.exports = {validateNums, mean, median, mode}