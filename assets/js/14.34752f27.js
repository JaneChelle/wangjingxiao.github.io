(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{195:function(s,n,t){"use strict";t.r(n);var a=t(0),e=Object(a.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"leetcode88-合并两个有序数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leetcode88-合并两个有序数组","aria-hidden":"true"}},[s._v("#")]),s._v(" LeetCode88. 合并两个有序数组")]),s._v(" "),t("h3",{attrs:{id:"自己总结的这个超级好理解的一种简单算法，供大家参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自己总结的这个超级好理解的一种简单算法，供大家参考","aria-hidden":"true"}},[s._v("#")]),s._v(" 自己总结的这个超级好理解的一种简单算法，供大家参考")]),s._v(" "),t("p",[s._v("方法如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Solution {\n    public static void merge(int[] nums1, int m, int[] nums2, int n) {\n        for (int i = 0; i < nums2.length; i++) {\n\t\t\tnums1[nums1.length-1-i] = nums2[i];\n\t\t}\n        Arrays.sort(nums1);\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("完整输出如下(大家可以在控制台跑一下)：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import java.util.Arrays;\npublic class mykfirst {\n\n\tpublic static void main(String[] args) {\n\t\t// TODO Auto-generated method stub\n\t\t//定义输出\n\t\tint[] arr1 = {1,2,4,6,0,0,0};\n\t\tint[] arr2 = {1,2,3};\n        merge(arr1, 4, arr2, 3);\n\t}\n\tpublic static void merge(int[] nums1, int m, int[] nums2, int n) {\n        for (int i = 0; i < nums2.length; i++) {\n\t\t\tnums1[nums1.length-1-i] = nums2[i];\n\t\t}\n        Arrays.sort(nums1);\n    }\n\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])},[],!1,null,null,null);n.default=e.exports}}]);