/*                             QUESTION 147
Explain how to handle errors in a callback pattern.
*/
/*
Imagine you call a friend (callback function) to ask them to do a chore (asynchronous task). There are two ways things can go:

1. **Friend does the chore successfully (no error):** Your friend calls you back (callback execution) and tells you everything is done (successful result).
2. **Friend runs into trouble (error):** Your friend calls you back (callback execution) and tells you there was a problem (error message).

Here are two ways to handle these scenarios with callbacks:

**Scenario 1 (Success):**

- You call your friend and ask them to take out the trash (call the callback function with instructions).
- Your friend takes out the trash (completes the task).
- Your friend calls you back (callback execution) to say "Trash is out!" (successful result passed to the callback).
- You hear from your friend and know everything is good.

**Scenario 2 (Error):**

- You call your friend and ask them to mow the lawn (call the callback function with instructions).
- Your friend tries to mow the lawn (starts the task).
- The lawnmower breaks (an error occurs).
- Your friend calls you back (callback execution) to say "The lawnmower broke!" (error message passed to the callback).
- You hear from your friend and know there's a problem.

**Callback Errors - Two Options:**

1. **Error-First Callback:**
   - Imagine your friend tells you if there's a problem (error) first, then tells you the result (data) if successful.
   - This is like the callback function receiving two arguments:
      - The first argument is for the error (null if no error).
      - The second argument is for the result (data).
2. **Throwing Exceptions:**
   - Imagine your friend yells at you about the problem (throws an exception).
   - You (the calling code) need to catch the exception using a `try...catch` block to handle the error.

Both approaches have their pros and cons, and the best choice depends on your coding style and the specific situation.
*/ 
