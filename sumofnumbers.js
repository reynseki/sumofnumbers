const nums = [1, 2, 3];

function sumFor(nums1) {
  let total = 0;
  for (let i = 0; i < nums1.length; i++) {
    total += nums1[i];
  }
  return total;
}
console.log(sumFor(nums));

function sumWhile(nums2) {
  let total = 0;
  for (let i = 0; i < nums2.length; i++) {
    total += nums2[i];
  }
  return total;
}
console.log(sumWhile(nums));

function sumRecursion(nums3, index = 0) {
  if (index === nums3.length) {
    return 0;
  }
  return nums3[index] + sumRecursion(nums3, index + 1);
}
console.log(sumRecursion(nums));

function sumTheSimpleWay(nums4) {
  const total = _.reduce(nums4, function (first, num) {
    return first + num;
  });
  return total;
}
console.log(sumTheSimpleWay(nums));
