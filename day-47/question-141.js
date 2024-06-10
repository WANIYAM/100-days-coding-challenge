/*                   QUESTION 141
Discuss the significance of the await reserved word in asynchronous JavaScript.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/* Imagine you're waiting at a restaurant. You order your food (make an asynchronous request),
 but you can't do anything else (like reading a book) until your food arrives (the promise resolves).

Before `await`, it was like having to keep asking the waiter (the callback function) every second if your food is ready.
This could get annoying and confusing, especially if you ordered multiple dishes (multiple asynchronous operations).

With `await`, it's like telling the waiter to bring you your food whenever it's done, and then you can relax and
read your book (continue with other code) until your food arrives (the promise resolves).
You only focus on your food (the resolved value) when it's in front of you.

`Await` makes asynchronous code feel more like normal code, which is easier to understand and write.
*/
// NOW IN JAVASCRIPT
// Without await
// Imagine the waiter (callback function) keeps asking you if you're ready to order
function OrderFood(menuItem, callback) {
    console.log("Ordering", menuItem);
    // Simulate some wait time (like the kitchen preparing the food)
    setTimeout(function () {
        if (menuItem === "Pizza") {
            var food = "Hot and delicious pizza!";
            callback(null, food); // No error, food arrived!
        }
        else {
            var error = "We are out of " + menuItem;
            callback(error, null); // Error! No food for you! 
        }
    }, 2000); // Wait for 2 seconds (simulating preparation time)
}
// You (the code) keep asking the waiter if the food is ready (calling the callback function)
OrderFood("Pizza", function (err, food) {
    if (err) {
        console.error("Error:", err);
    }
    else {
        console.log("Enjoying my", food);
    }
});
// You also want to order drinks (another asynchronous operation)
OrderFood("Soda", function (err, drink) {
    if (err) {
        console.error("Error:", err);
    }
    else {
        console.log("Sipping on my", drink);
    }
});
// WITH AWAIT
// Imagine you tell the waiter what you want and then relax (pause execution)
function orderFood(menuItem) {
    return __awaiter(this, void 0, void 0, function () {
        var waitTime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Ordering", menuItem);
                    waitTime = 2000;
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, waitTime); })];
                case 1:
                    _a.sent();
                    if (menuItem === "Pizza") {
                        return [2 /*return*/, "Hot and delicious pizza!"];
                    }
                    else {
                        throw new Error("We are out of " + menuItem); // Throw an error if out of stock
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// You can order your food and drinks sequentially (like normal code) and relax until it arrives
(function () { return __awaiter(_this, void 0, void 0, function () {
    var pizza, drink, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, orderFood("Pizza")];
            case 1:
                pizza = _a.sent();
                console.log("Enjoying my", pizza);
                return [4 /*yield*/, orderFood("Soda")];
            case 2:
                drink = _a.sent();
                console.log("Sipping on my", drink);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error("Error:", err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
