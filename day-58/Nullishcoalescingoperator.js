//                                         Nullish Coalescing Operator '??'

// Basic usage
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)

// Sequence of nullish coalescing
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// Comparison with ||
firstName = null;
lastName = null;
nickName = "Supercoder";
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// Difference between || and ??
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

// Precedence example
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000

// Using ?? with && or ||
let x = (1 && 2) ?? 3; // Works
alert(x); // 2
