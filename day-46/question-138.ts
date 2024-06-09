/*                           QUESTION 138
Describe how to use breakpoints in browser developer tools to debug JavaScript code.
*/

/*## How to Use Breakpoints in Browser Developer Tools to Debug JavaScript Code

1. **Open Developer Tools:**
   - In your web browser (Chrome, Firefox, Edge, etc.), open the Developer Tools by pressing `F12`, `Ctrl+Shift+I`,
    or right-clicking on the page and selecting "Inspect".

2. **Navigate to the "Sources" Tab:**
   - Once the Developer Tools are open, navigate to the "Sources" tab. This tab allows you to view and debug the
    source code of your web application.

3. **Locate Your JavaScript File:**
   - In the "Sources" panel, you will see a file navigator. Locate the JavaScript file you want to debug. 
   This is usually found under your website's domain in a folder structure that mimics your project directory.

4. **Set a Breakpoint:**
   - To set a breakpoint, find the line of code you want to inspect and click on the line number. A blue
    marker (in Chrome) will appear, indicating that a breakpoint has been set. The execution of the script
     will pause when it reaches this line.

5. **Inspect Variables and Execution:**
   - When your code execution hits the breakpoint, the script will pause, and you can inspect the current 
   state of your variables. The right-hand panel will show the "Call Stack", "Scope", and other debugging information.
   - You can hover over variables in your code to see their current values.
   - Use the "Console" tab to execute JavaScript expressions on the fly and inspect their results.

6. **Control Execution:**
   - Use the controls at the top of the "Sources" panel to resume execution (`Play`), step over to the next 
   function call (`Step Over`), step into a function call (`Step Into`), or step out of a function (`Step Out`).

7. **Modify and Test:**
   - You can make changes to your code directly in the "Sources" panel, though these changes are temporary
    and will be lost when the page is refreshed. This is useful for quick tests and debugging.

8. **Remove Breakpoints:**
   - To remove a breakpoint, simply click on the line number again, and the blue marker will disappear.*/