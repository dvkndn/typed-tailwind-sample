"use strict";
exports.__esModule = true;
// http://github.com/dvkndn/typed-tailwind
exports.Tw = function () { return new Tailwind(); };
var Tailwind = /** @class */ (function () {
    function Tailwind() {
        this.value = "";
    }
    // Getter methods
    // Why "$":
    // - https://github.com/microsoft/TypeScript/issues/2361
    // - https://github.com/microsoft/TypeScript/issues/4538
    // - https://en.wikipedia.org/wiki/Regular_expression
    Tailwind.prototype.$ = function () { return this.value; };
    // Building methods
    Tailwind.prototype.add = function (value) {
        this.value = this.value + " " + value;
        return this;
    };
    // Styling methods
    Tailwind.prototype.block = function () { return this.add("tw-block"); };
    Tailwind.prototype.inlineBlock = function () { return this.add("tw-inline-block"); };
    Tailwind.prototype.inline = function () { return this.add("tw-inline"); };
    Tailwind.prototype.flex = function () { return this.add("tw-flex"); };
    Tailwind.prototype.inlineFlex = function () { return this.add("tw-inline-flex"); };
    Tailwind.prototype.table = function () { return this.add("tw-table"); };
    Tailwind.prototype.tableRow = function () { return this.add("tw-table-row"); };
    Tailwind.prototype.tableCell = function () { return this.add("tw-table-cell"); };
    Tailwind.prototype.hidden = function () { return this.add("tw-hidden"); };
    Tailwind.prototype.static = function () { return this.add("tw-static"); };
    Tailwind.prototype.fixed = function () { return this.add("tw-fixed"); };
    Tailwind.prototype.absolute = function () { return this.add("tw-absolute"); };
    Tailwind.prototype.relative = function () { return this.add("tw-relative"); };
    Tailwind.prototype.sticky = function () { return this.add("tw-sticky"); };
    Tailwind.prototype.textBlack = function () { return this.add("tw-text-black"); };
    Tailwind.prototype.textWhite = function () { return this.add("tw-text-white"); };
    Tailwind.prototype.textGrayLight = function () { return this.add("tw-text-gray-light"); };
    Tailwind.prototype.textGrayMid = function () { return this.add("tw-text-gray-mid"); };
    Tailwind.prototype.textGrayDark = function () { return this.add("tw-text-gray-dark"); };
    Tailwind.prototype.textRedLight = function () { return this.add("tw-text-red-light"); };
    Tailwind.prototype.textRedMid = function () { return this.add("tw-text-red-mid"); };
    Tailwind.prototype.textRedDark = function () { return this.add("tw-text-red-dark"); };
    Tailwind.prototype.textBlueLight = function () { return this.add("tw-text-blue-light"); };
    Tailwind.prototype.textBlueMid = function () { return this.add("tw-text-blue-mid"); };
    Tailwind.prototype.textBlueDark = function () { return this.add("tw-text-blue-dark"); };
    Tailwind.prototype.bgBlack = function () { return this.add("tw-bg-black"); };
    Tailwind.prototype.bgWhite = function () { return this.add("tw-bg-white"); };
    Tailwind.prototype.bgGrayLight = function () { return this.add("tw-bg-gray-light"); };
    Tailwind.prototype.bgGrayMid = function () { return this.add("tw-bg-gray-mid"); };
    Tailwind.prototype.bgGrayDark = function () { return this.add("tw-bg-gray-dark"); };
    Tailwind.prototype.bgRedLight = function () { return this.add("tw-bg-red-light"); };
    Tailwind.prototype.bgRedMid = function () { return this.add("tw-bg-red-mid"); };
    Tailwind.prototype.bgRedDark = function () { return this.add("tw-bg-red-dark"); };
    Tailwind.prototype.bgBlueLight = function () { return this.add("tw-bg-blue-light"); };
    Tailwind.prototype.bgBlueMid = function () { return this.add("tw-bg-blue-mid"); };
    Tailwind.prototype.bgBlueDark = function () { return this.add("tw-bg-blue-dark"); };
    Tailwind.prototype.m4 = function () { return this.add("tw-m-4"); };
    Tailwind.prototype.m8 = function () { return this.add("tw-m-8"); };
    Tailwind.prototype.m16 = function () { return this.add("tw-m-16"); };
    Tailwind.prototype.m24 = function () { return this.add("tw-m-24"); };
    Tailwind.prototype.m1 = function () { return this.add("tw--m-1"); };
    Tailwind.prototype.my4 = function () { return this.add("tw-my-4"); };
    Tailwind.prototype.mx4 = function () { return this.add("tw-mx-4"); };
    Tailwind.prototype.my8 = function () { return this.add("tw-my-8"); };
    Tailwind.prototype.mx8 = function () { return this.add("tw-mx-8"); };
    Tailwind.prototype.my16 = function () { return this.add("tw-my-16"); };
    Tailwind.prototype.mx16 = function () { return this.add("tw-mx-16"); };
    Tailwind.prototype.my24 = function () { return this.add("tw-my-24"); };
    Tailwind.prototype.mx24 = function () { return this.add("tw-mx-24"); };
    Tailwind.prototype.my1 = function () { return this.add("tw--my-1"); };
    Tailwind.prototype.mx1 = function () { return this.add("tw--mx-1"); };
    Tailwind.prototype.mt4 = function () { return this.add("tw-mt-4"); };
    Tailwind.prototype.mr4 = function () { return this.add("tw-mr-4"); };
    Tailwind.prototype.mb4 = function () { return this.add("tw-mb-4"); };
    Tailwind.prototype.ml4 = function () { return this.add("tw-ml-4"); };
    Tailwind.prototype.mt8 = function () { return this.add("tw-mt-8"); };
    Tailwind.prototype.mr8 = function () { return this.add("tw-mr-8"); };
    Tailwind.prototype.mb8 = function () { return this.add("tw-mb-8"); };
    Tailwind.prototype.ml8 = function () { return this.add("tw-ml-8"); };
    Tailwind.prototype.mt16 = function () { return this.add("tw-mt-16"); };
    Tailwind.prototype.mr16 = function () { return this.add("tw-mr-16"); };
    Tailwind.prototype.mb16 = function () { return this.add("tw-mb-16"); };
    Tailwind.prototype.ml16 = function () { return this.add("tw-ml-16"); };
    Tailwind.prototype.mt24 = function () { return this.add("tw-mt-24"); };
    Tailwind.prototype.mr24 = function () { return this.add("tw-mr-24"); };
    Tailwind.prototype.mb24 = function () { return this.add("tw-mb-24"); };
    Tailwind.prototype.ml24 = function () { return this.add("tw-ml-24"); };
    Tailwind.prototype.mt1 = function () { return this.add("tw--mt-1"); };
    Tailwind.prototype.mr1 = function () { return this.add("tw--mr-1"); };
    Tailwind.prototype.mb1 = function () { return this.add("tw--mb-1"); };
    Tailwind.prototype.ml1 = function () { return this.add("tw--ml-1"); };
    Tailwind.prototype.p4 = function () { return this.add("tw-p-4"); };
    Tailwind.prototype.p8 = function () { return this.add("tw-p-8"); };
    Tailwind.prototype.p16 = function () { return this.add("tw-p-16"); };
    Tailwind.prototype.p24 = function () { return this.add("tw-p-24"); };
    Tailwind.prototype.py4 = function () { return this.add("tw-py-4"); };
    Tailwind.prototype.px4 = function () { return this.add("tw-px-4"); };
    Tailwind.prototype.py8 = function () { return this.add("tw-py-8"); };
    Tailwind.prototype.px8 = function () { return this.add("tw-px-8"); };
    Tailwind.prototype.py16 = function () { return this.add("tw-py-16"); };
    Tailwind.prototype.px16 = function () { return this.add("tw-px-16"); };
    Tailwind.prototype.py24 = function () { return this.add("tw-py-24"); };
    Tailwind.prototype.px24 = function () { return this.add("tw-px-24"); };
    Tailwind.prototype.pt4 = function () { return this.add("tw-pt-4"); };
    Tailwind.prototype.pr4 = function () { return this.add("tw-pr-4"); };
    Tailwind.prototype.pb4 = function () { return this.add("tw-pb-4"); };
    Tailwind.prototype.pl4 = function () { return this.add("tw-pl-4"); };
    Tailwind.prototype.pt8 = function () { return this.add("tw-pt-8"); };
    Tailwind.prototype.pr8 = function () { return this.add("tw-pr-8"); };
    Tailwind.prototype.pb8 = function () { return this.add("tw-pb-8"); };
    Tailwind.prototype.pl8 = function () { return this.add("tw-pl-8"); };
    Tailwind.prototype.pt16 = function () { return this.add("tw-pt-16"); };
    Tailwind.prototype.pr16 = function () { return this.add("tw-pr-16"); };
    Tailwind.prototype.pb16 = function () { return this.add("tw-pb-16"); };
    Tailwind.prototype.pl16 = function () { return this.add("tw-pl-16"); };
    Tailwind.prototype.pt24 = function () { return this.add("tw-pt-24"); };
    Tailwind.prototype.pr24 = function () { return this.add("tw-pr-24"); };
    Tailwind.prototype.pb24 = function () { return this.add("tw-pb-24"); };
    Tailwind.prototype.pl24 = function () { return this.add("tw-pl-24"); };
    Tailwind.prototype.text14 = function () { return this.add("tw-text-14"); };
    Tailwind.prototype.text16 = function () { return this.add("tw-text-16"); };
    Tailwind.prototype.text18 = function () { return this.add("tw-text-18"); };
    Tailwind.prototype.smBlock = function () { return this.add("sm:tw-block"); };
    Tailwind.prototype.smInlineBlock = function () { return this.add("sm:tw-inline-block"); };
    Tailwind.prototype.smInline = function () { return this.add("sm:tw-inline"); };
    Tailwind.prototype.smFlex = function () { return this.add("sm:tw-flex"); };
    Tailwind.prototype.smInlineFlex = function () { return this.add("sm:tw-inline-flex"); };
    Tailwind.prototype.smTable = function () { return this.add("sm:tw-table"); };
    Tailwind.prototype.smTableRow = function () { return this.add("sm:tw-table-row"); };
    Tailwind.prototype.smTableCell = function () { return this.add("sm:tw-table-cell"); };
    Tailwind.prototype.smHidden = function () { return this.add("sm:tw-hidden"); };
    Tailwind.prototype.smStatic = function () { return this.add("sm:tw-static"); };
    Tailwind.prototype.smFixed = function () { return this.add("sm:tw-fixed"); };
    Tailwind.prototype.smAbsolute = function () { return this.add("sm:tw-absolute"); };
    Tailwind.prototype.smRelative = function () { return this.add("sm:tw-relative"); };
    Tailwind.prototype.smSticky = function () { return this.add("sm:tw-sticky"); };
    Tailwind.prototype.smM4 = function () { return this.add("sm:tw-m-4"); };
    Tailwind.prototype.smM8 = function () { return this.add("sm:tw-m-8"); };
    Tailwind.prototype.smM16 = function () { return this.add("sm:tw-m-16"); };
    Tailwind.prototype.smM24 = function () { return this.add("sm:tw-m-24"); };
    Tailwind.prototype.smM1 = function () { return this.add("sm:tw--m-1"); };
    Tailwind.prototype.smMy4 = function () { return this.add("sm:tw-my-4"); };
    Tailwind.prototype.smMx4 = function () { return this.add("sm:tw-mx-4"); };
    Tailwind.prototype.smMy8 = function () { return this.add("sm:tw-my-8"); };
    Tailwind.prototype.smMx8 = function () { return this.add("sm:tw-mx-8"); };
    Tailwind.prototype.smMy16 = function () { return this.add("sm:tw-my-16"); };
    Tailwind.prototype.smMx16 = function () { return this.add("sm:tw-mx-16"); };
    Tailwind.prototype.smMy24 = function () { return this.add("sm:tw-my-24"); };
    Tailwind.prototype.smMx24 = function () { return this.add("sm:tw-mx-24"); };
    Tailwind.prototype.smMy1 = function () { return this.add("sm:tw--my-1"); };
    Tailwind.prototype.smMx1 = function () { return this.add("sm:tw--mx-1"); };
    Tailwind.prototype.smMt4 = function () { return this.add("sm:tw-mt-4"); };
    Tailwind.prototype.smMr4 = function () { return this.add("sm:tw-mr-4"); };
    Tailwind.prototype.smMb4 = function () { return this.add("sm:tw-mb-4"); };
    Tailwind.prototype.smMl4 = function () { return this.add("sm:tw-ml-4"); };
    Tailwind.prototype.smMt8 = function () { return this.add("sm:tw-mt-8"); };
    Tailwind.prototype.smMr8 = function () { return this.add("sm:tw-mr-8"); };
    Tailwind.prototype.smMb8 = function () { return this.add("sm:tw-mb-8"); };
    Tailwind.prototype.smMl8 = function () { return this.add("sm:tw-ml-8"); };
    Tailwind.prototype.smMt16 = function () { return this.add("sm:tw-mt-16"); };
    Tailwind.prototype.smMr16 = function () { return this.add("sm:tw-mr-16"); };
    Tailwind.prototype.smMb16 = function () { return this.add("sm:tw-mb-16"); };
    Tailwind.prototype.smMl16 = function () { return this.add("sm:tw-ml-16"); };
    Tailwind.prototype.smMt24 = function () { return this.add("sm:tw-mt-24"); };
    Tailwind.prototype.smMr24 = function () { return this.add("sm:tw-mr-24"); };
    Tailwind.prototype.smMb24 = function () { return this.add("sm:tw-mb-24"); };
    Tailwind.prototype.smMl24 = function () { return this.add("sm:tw-ml-24"); };
    Tailwind.prototype.smMt1 = function () { return this.add("sm:tw--mt-1"); };
    Tailwind.prototype.smMr1 = function () { return this.add("sm:tw--mr-1"); };
    Tailwind.prototype.smMb1 = function () { return this.add("sm:tw--mb-1"); };
    Tailwind.prototype.smMl1 = function () { return this.add("sm:tw--ml-1"); };
    Tailwind.prototype.smP4 = function () { return this.add("sm:tw-p-4"); };
    Tailwind.prototype.smP8 = function () { return this.add("sm:tw-p-8"); };
    Tailwind.prototype.smP16 = function () { return this.add("sm:tw-p-16"); };
    Tailwind.prototype.smP24 = function () { return this.add("sm:tw-p-24"); };
    Tailwind.prototype.smPy4 = function () { return this.add("sm:tw-py-4"); };
    Tailwind.prototype.smPx4 = function () { return this.add("sm:tw-px-4"); };
    Tailwind.prototype.smPy8 = function () { return this.add("sm:tw-py-8"); };
    Tailwind.prototype.smPx8 = function () { return this.add("sm:tw-px-8"); };
    Tailwind.prototype.smPy16 = function () { return this.add("sm:tw-py-16"); };
    Tailwind.prototype.smPx16 = function () { return this.add("sm:tw-px-16"); };
    Tailwind.prototype.smPy24 = function () { return this.add("sm:tw-py-24"); };
    Tailwind.prototype.smPx24 = function () { return this.add("sm:tw-px-24"); };
    Tailwind.prototype.smPt4 = function () { return this.add("sm:tw-pt-4"); };
    Tailwind.prototype.smPr4 = function () { return this.add("sm:tw-pr-4"); };
    Tailwind.prototype.smPb4 = function () { return this.add("sm:tw-pb-4"); };
    Tailwind.prototype.smPl4 = function () { return this.add("sm:tw-pl-4"); };
    Tailwind.prototype.smPt8 = function () { return this.add("sm:tw-pt-8"); };
    Tailwind.prototype.smPr8 = function () { return this.add("sm:tw-pr-8"); };
    Tailwind.prototype.smPb8 = function () { return this.add("sm:tw-pb-8"); };
    Tailwind.prototype.smPl8 = function () { return this.add("sm:tw-pl-8"); };
    Tailwind.prototype.smPt16 = function () { return this.add("sm:tw-pt-16"); };
    Tailwind.prototype.smPr16 = function () { return this.add("sm:tw-pr-16"); };
    Tailwind.prototype.smPb16 = function () { return this.add("sm:tw-pb-16"); };
    Tailwind.prototype.smPl16 = function () { return this.add("sm:tw-pl-16"); };
    Tailwind.prototype.smPt24 = function () { return this.add("sm:tw-pt-24"); };
    Tailwind.prototype.smPr24 = function () { return this.add("sm:tw-pr-24"); };
    Tailwind.prototype.smPb24 = function () { return this.add("sm:tw-pb-24"); };
    Tailwind.prototype.smPl24 = function () { return this.add("sm:tw-pl-24"); };
    Tailwind.prototype.smText14 = function () { return this.add("sm:tw-text-14"); };
    Tailwind.prototype.smText16 = function () { return this.add("sm:tw-text-16"); };
    Tailwind.prototype.smText18 = function () { return this.add("sm:tw-text-18"); };
    return Tailwind;
}());
