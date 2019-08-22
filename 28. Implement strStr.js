/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return (needle.length === 0)? 0 :haystack.indexOf(needle);
};