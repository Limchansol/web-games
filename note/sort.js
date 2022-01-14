// 숫자 정렬
const array = [1, 6, 3, 9, 4, 7];
array.sort((a, b) => a - b);  // 오름차순
array.sort((a, b) => b - a);  //내림차순

// 문자열 정렬 (한글 가능)
const array2 = ['abc', 'apple', 'banana', 'car'];
array2.sort((a, b) => a.localeCompare(b));  // 오름차순
array2.sort((a, b) => b.localeCompare(a));  // 내림차순
