"use strict";
const kgToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
kgToLbs(40);
kgToLbs('60kg');
//# sourceMappingURL=index.js.map